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

                <h1 class="mb-8">Edit category</h1>

                <v-text-field
                    v-model="name"
                    label="Name"
                    clearable
                    outlined
                    class="required"
                ></v-text-field>

                <v-textarea
                    v-model="description"
                    label="Description"
                    outlined
                    clearable
                    class="required"
                ></v-textarea>

                <v-btn
                    class="mt-4 mr-3"
                    large
                    @click="$router.back()"
                >
                    Back
                </v-btn>

                <v-btn
                    class="mt-4 mr-3"
                    color="primary"
                    width="120"
                    large
                    @click="update"
                >
                    Update
                </v-btn>

                <v-btn
                    class="mt-4"
                    color="error"
                    large
                    @click="dialogDelete = true"
                >
                    Delete
                </v-btn>
            </v-col>
        </v-row>

        <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
                <v-card-title class="text-h5">Are you sure you want to delete this category?</v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialogDelete = false">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">Yes</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "CategoriesEdit",
    props: ['id'],
    data: () => ({
        breadcrumbs: [
            {
                text: 'Services',
                disabled: false,
                href: '/services',
            },
            {
                text: 'Edit category',
                disabled: true
            },
        ],
        name: null,
        description: null,
        dialogDelete: false
    }),
    created() {
        this.getCategoryById()
    },
    methods: {
        async getCategoryById() {
            await axios
                .get('https://api.test.kaplankaya.app/api/web/services/categories/'+this.id)
                .then(response => {
                    this.name = response.data.data.name
                    this.description = response.data.data.description
                    this.loading = false
                })
        },
        update() {
            axios.put('https://api.test.kaplankaya.app/api/web/services/categories/'+this.id, {
                id: this.id,
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
        },
        deleteItemConfirm() {
            axios
                .delete('https://api.test.kaplankaya.app/api/web/services/categories/'+this.id)
                .then(response => {
                    this.dialogDelete = false

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

