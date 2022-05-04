window.axios = require('axios');
window.axios.defaults.withCredentials = true
let user = localStorage.user

if (user) {
    user = JSON.parse(user)
    axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
}

import Vue from 'vue'
import Vuetify from "vuetify";
import VueMask from 'v-mask'
import App from "./App.vue";
import router from './router'
import store from './store'

Vue.use(Vuetify)
Vue.use(VueMask)

axios.interceptors.response.use(
    function (response) {
        return response;
    }, function (error) {
        switch (error.response.status) {
            case 401:
                store.dispatch('logout').then(() => {})
                break
            case 419:
                store.dispatch('logout').then(() => {})
                break
            default:
                return Promise.reject(error);
        }
    });

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c',
                brand: '#607D8B',
            },
        },
    },
})

store.dispatch('me').then(() => {
    new Vue({
        vuetify: vuetify,
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
})
