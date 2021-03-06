import Vue from 'vue'
import Vuex from 'vuex'
import axiosInstance from "./axios-auth"
import axios from 'axios'
import API_KEY from "./config";
import router from "./router"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userdata) {
      state.idToken = userdata.token
      state.userId = userdata.userId
    },
    storeUser(state, userData) {
      console.log('storeUser', userData);
      state.user = userData
    },
    clearAuthData(state) {
      state.idToken = null
      state.userId = null
    }
  },
  actions: {
    setLogoutTimer({ commit }, expirationTime) {
      setTimeout(() => {
        // dispatch('logout')
        commit('clearAuthData')
      }, expirationTime);
    },
    signup({ commit, dispatch }, authData) {
      axiosInstance
        .post("/signupNewUser?key=" + API_KEY, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(response => {
          commit('authUser', {
            token: response.data.idToken,
            userId: response.data.localId,
          })
          const now = new Date()
          const expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000)
          localStorage.setItem('token', response.data.idToken)
          localStorage.setItem('expirationDate', expirationDate)
          localStorage.setItem('userId', response.data.localId)
          /** Dispatch ! */
          dispatch('storeUser', authData)
          // dispatch('setLogoutTimer', response.data.expiresIn)
        })
        .catch(error => console.log(error));
    },
    login({ commit, dispatch }, authData) {
      axiosInstance
        .post("/verifyPassword?key=" + API_KEY, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(response => {
          commit('authUser', {
            token: response.data.idToken,
            userId: response.data.localId,
          })
          const now = new Date()
          const expirationDate = new Date(now.getTime() + response.data.expiresIn * 1000)
          localStorage.setItem('token', response.data.idToken)
          localStorage.setItem('expirationDate', expirationDate)
          localStorage.setItem('userId', response.data.localId)
          // dispatch('setLogoutTimer', response.data.expiresIn)
        })
        .catch(error => console.log(error));
    },
    storeUser({ commit, state }, userData) {
      if (!state.idToken) {
        return
      }
      axios
        .post("/users.json" + '?auth=' + state.idToken, userData)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    },
    fetchUser({ commit, state }, userData) {
      if (!state.idToken) {
        return
      }
      axios
        .get("/users.json" + '?auth=' + state.idToken)
        .then(response => {
          const data = response.data;
          const users = [];
          for (let key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          console.log(users);
          /** Commit ! */
          commit('storeUser', users[1])
        })
        .catch(error => console.log(error));
    },
    logout({ commit }) {
      commit('clearAuthData')
      localStorage.removeItem('expirationDate')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      router.push('/signin')
    },
    tryAutoLogin({ commit }) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date()
      if (now >= expirationDate) {
        return
      }
      const userId = localStorage.getItem('userId')
      commit('authUser', { token, userId })
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    isAuthenticated(state) {
      return state.idToken !== null
    }
  }
})