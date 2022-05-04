<template>
    <div>
        <v-card class="mx-auto my-12" flat max-width="374">
            <v-card-title>Entrance</v-card-title>
            <form class="pa-4">
                <v-text-field
                    v-model="email"
                    :error-messages="errors.email"
                    label="Email"
                    outlined
                    prepend-inner-icon="mdi-email"
                ></v-text-field>

                <v-text-field
                    v-model="password"
                    :error-messages="errors.password"
                    :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPass ? 'text' : 'password'"
                    label="Password"
                    counter
                    outlined
                    prepend-inner-icon="mdi-lock"
                    @click:append="showPass = !showPass"
                ></v-text-field>

                <v-btn
                    class="mt-4"
                    :loading="loading"
                    :disabled="loading"
                    color="primary"
                    block
                    large
                    @click="submit"
                >
                    Log in
                </v-btn>
            </form>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "Login",
    data: () => ({
        email: 'sa-kaplankaya@gmail.com',
        password: 'gwG6nkss9ERUYHaU',
        showPass: false,
        loading: false,
        errors: []
    }),
    methods: {
        async submit () {
            this.loading = true
            axios.post('https://api.test.kaplankaya.app/api/web/account/login', {
                email: this.email,
                password: this.password
            }).then(response => {
                console.log(response)
                this.$store.dispatch('login', response.data.data)
                this.$router.push('/announcements')
            }).catch(error => {
                this.$store.dispatch('showAlert', {
                    isVisible: true,
                    msg: error.response.data.Message,
                    color: 'error',
                    type: 'error'
                })
                this.loading = false
            })
        }
    }
}
</script>
