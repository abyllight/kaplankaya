import Vue from "vue";
import Vuex from "vuex";
//import axios from "axios";

Vue.use(Vuex)

//axios.defaults.baseURL = 'https://back.eatandfit.kz'
//axios.defaults.baseURL = 'http://127.0.0.1:8000'

export default new Vuex.Store({
    state: {
        authenticated: false,
        user: {},
        alert: {
            isVisible: false,
            msg: '',
            color: '',
            type: 'error'
        }
    },
    getters: {
        authenticated: state => !!state.authenticated,
        user: state => state.user,
        alert: state => state.alert
    },
    mutations: {
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value
        },
        SET_USER(state, data) {
            state.data = data
        },
        SET_ALERT(state, alertData) {
            state.alert = alertData
        }
    },
    actions: {
        async login({ commit }, data) {
            commit('SET_AUTHENTICATED', true)
            commit('SET_USER', data)
            localStorage.setItem('authenticated', 'true')
            localStorage.setItem('user', JSON.stringify(data))
            axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        },
        async logout({ commit }) {
            commit('SET_AUTHENTICATED', false)
            commit('SET_USER', {})
            localStorage.removeItem('authenticated')
            localStorage.removeItem('user')
            location.reload()
        },
        async me({ commit }){
            const user = localStorage.getItem('user')

            if (user) {
                commit('SET_AUTHENTICATED',  true)
                commit('SET_USER', user)
            }
        },
        async showAlert({ commit }, alert) {
            commit('SET_ALERT', alert)

            return new Promise(resolve => {
                const timeout = setTimeout(() => {
                    clearTimeout(timeout);
                    commit('SET_ALERT', {
                        isVisible: false,
                        msg: '',
                        color: '',
                        type: 'error'
                    });
                    resolve();
                }, 3000);
            });
        }
    }
})
