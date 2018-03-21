import Vue from 'vue'
import Vuex from 'vuex'
import axiosInstance from "./axios-auth"
import axios from 'axios'
import API_KEY from "./config";

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
      console.log(userData);
      state.user = userData
    }
  },
  actions: {
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
          /** Dispatch ! */
          dispatch('storeUser', authData)
        })
        .catch(error => console.log(error));
    },
    login({ commit }, authData) {
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
        })
        .catch(error => console.log(error));
    },
    storeUser({ commit }, userData) {
      console.log('storeUser', userData);
      axios
        .post("/users.json", userData)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    },
    fetchUser({ commit }) {
      axios
        .get("/users.json")
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
    }

  },
  getters: {
    user(state) {
      return state.user
    }
  }
})