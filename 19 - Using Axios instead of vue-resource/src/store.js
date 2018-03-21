import Vue from 'vue'
import Vuex from 'vuex'
import axiosInstance from "./axios-auth"
import API_KEY from "./config";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {
    authUser(state, userdata) {
      state.idToken = userdata.token
      state.userId = userdata.userId
    }
  },
  actions: {
    signup({ commit }, authData) {
      axiosInstance
        .post("/signupNewUser?key=" + API_KEY, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));
      // commit('SIGNUP')
    },
    login({ commit }, authData) {
      axiosInstance
        .post("/verifyPassword?key=" + API_KEY, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));
      // commit('LOGIN')
    }

  },
  getters: {

  }
})