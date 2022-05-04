<template>
    <div>
        <v-row justify="center">
            <v-col sm="12" lg="5">
                <div class="mb-4">
                    <v-breadcrumbs
                        class="pl-0"
                        :items="breadcrumbs"
                        large
                    ></v-breadcrumbs>
                </div>

                <h1 class="mb-8">Add category</h1>

                <v-text-field
                    v-model="name"
                    label="Name"
                    clearable
                    outlined
                ></v-text-field>

                <v-textarea
                    v-model="description"
                    label="Description"
                    outlined
                    clearable
                ></v-textarea>

                <v-btn
                    class="mt-4 mr-3"
                    large
                    @click="$router.back()"
                >
                    Back
                </v-btn>

                <v-btn
                    class="mt-4"
                    color="primary"
                    width="120"
                    large
                    @click="save"
                >
                    Save
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "CategoriesCreate",
    data: () => ({
        breadcrumbs: [
            {
                text: 'Services',
                disabled: false,
                href: '/services',
            },
            {
                text: 'Create category',
                disabled: true
            },
        ],
        name: null,
        description: null
    }),
    methods: {
        save() {
            axios.post('https://api.test.kaplankaya.app/api/web/services/categories', {
                name: this.name,
                description: this.description
            }).then(response => {

                this.$store.dispatch('showAlert', {
                    isVisible: true,
                    msg: response.data.message,
                    color: 'success',
                    type: 'success'
                })
                this.$router.push('/services')
            }).catch(error => {
                this.$store.dispatch('showAlert', {
                    isVisible: true,
                    msg: error.response.data.Message,
                    color: 'error',
                    type: 'error'
                })
            })
        }
    }
}
</script>
<style>
.required label::after {
    content: "*";
    color: red;
}
</style>

