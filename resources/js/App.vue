<template>
    <v-app>

        <!-- Alert  -->
        <v-alert
            :type="alert.type"
            :value="alert.isVisible"
            style="position: fixed; z-index: 10000; top: 16px; left: 0; right: 0; margin: 0 auto;"
            :color="alert.color"
            dark
            max-width="374"
        >{{ alert.msg }}</v-alert>

        <!-- Navbar -->
        <v-app-bar app flat color="blue-grey lighten-4">
            <v-container class="py-0 fill-height">
                <v-app-bar-nav-icon v-if="!isLarge && authenticated" @click="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title class="mr-8">KAPLANKAYA</v-toolbar-title>

                <div v-if="isLarge && authenticated">
                    <v-btn
                        v-for="link in links"
                        :key="link.name"
                        :to="link.href"
                        text
                        small
                        class="mx-1"
                    >
                        {{ link.name }}
                    </v-btn>
                </div>

                <v-spacer></v-spacer>

                <v-btn v-if="isLarge && authenticated" small text color="black" @click="logout">
                    Logout
                    <v-icon right>mdi-exit-to-app</v-icon>
                </v-btn>
            </v-container>
        </v-app-bar>

        <!-- Side menu -->
        <v-navigation-drawer
            v-if="!isLarge && authenticated"
            v-model="drawer"
            class="grey lighten-4"
            app
        >
            <v-list>
                <v-list-item
                    v-for="item in links"
                    :key="item.title"
                    :to="item.href"
                    link
                >
                    <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block dark color="black" @click="logout">
                        <v-icon left>mdi-exit-to-app</v-icon>
                        Выйти
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>

        <!-- Container -->
        <v-main class="mt-5">
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import { mapGetters }from 'vuex'

export default {
    name: 'App',
    data: () => ({
        drawer: false,
        links: [
            /*{
                name: 'Requests',
                href: '/'
            },*/
            {
                name: 'Announcements',
                href: '/'
            },
            {
                name: 'Notifications',
                href: '/notifications'
            },
            {
                name: 'Residents',
                href: '/residents'
            },
            {
                name: 'À la carte services',
                href: '/services'
            },
            {
                name: 'Requests',
                href: '/service-requests'
            },
            {
                name: 'Bills',
                href: '/bills'
            },
            {
                name: 'Payments',
                href: '/payments'
            },
            /*{
                name: 'Employees',
                href: '/employees'
            }*/
        ],
    }),
    computed: {
        isLarge() {
            return window.innerWidth >= 1024
        },
        ...mapGetters({
            token: 'token',
            authenticated: 'authenticated',
            alert: 'alert'
        })
    },
    methods: {
        logout() {
            console.log('logout')
            this.$store.dispatch('logout')
        },
    }
}
</script>
