import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
}

const mutations = {
    setToken (state, token) {
        state.token = token;
        localStorage.setItem("token", token.token)
    },

    delToken (state) {
        state.token = '';
        localStorage.removeItem("token");
    }
}

const store = new Vuex.Store({
    state,
    mutations
})

export default store