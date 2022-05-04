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

                <h1 class="mb-8">Add a service</h1>

                <v-select
                    v-model="category"
                    :items="categories"
                    item-text="name"
                    item-value="id"
                    label="Category"
                    clearable
                    outlined
                ></v-select>

                <v-text-field
                    v-model="item.name"
                    label="Name"
                    clearable
                    outlined
                ></v-text-field>

                <v-textarea
                    v-model="item.description"
                    label="Description"
                    clearable
                    outlined
                ></v-textarea>

                <v-text-field
                    v-model="item.price"
                    type="number"
                    label="Price (from)"
                    placeholder="Price (from)"
                    clearable
                    outlined
                ></v-text-field>

                <v-file-input
                    v-model="attachment"
                    @change="preview"
                    type="file"
                    accept="image/*"
                    label="Image"
                    outlined
                    clearable
                ></v-file-input>

                <div v-if="img" style="position: relative; width: 100px; height: 100px; margin-bottom: 20px" >
                    <v-img :src="img" class="rounded"></v-img>
                    <v-btn
                        text
                        icon
                        small
                        color="red lighten-1"
                        style="position: absolute; top: 2px; right: 2px"
                        @click="removeImage"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </div>

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
    name: "ServicesEdit",
    props: ['id'],
    data: () => ({
        breadcrumbs: [
            {
                text: 'Services',
                disabled: false,
                href: '/services',
            },
            {
                text: 'Edit service',
                disabled: true
            },
        ],
        categories: [],
        category: null,
        attachment: null,
        img: null,
        raw: null,
        item: {},
        dialogDelete: false
    }),
    created() {
        this.fetchServiceById()
        this.fetchCategories()
    },
    methods: {
        async fetchServiceById() {
            await axios
                .get('https://api.test.kaplankaya.app/api/web/services/'+this.id)
                .then(response => {
                    this.item = response.data.data
                    this.category = this.item.categoryId
                })
        },
        async fetchCategories() {
            await axios
                .get('https://api.test.kaplankaya.app/api/web/services/categories', {
                    params: {
                        PageNumber: 1,
                        PageSize: 10000
                    }
                })
                .then(response => {
                    this.categories = response.data.data
                })
        },
        preview() {
            this.img = URL.createObjectURL(this.attachment)

            this.convertToBase64()
        },
        removeImage() {
            this.img = null
            this.attachment = null
        },
        convertToBase64() {
            let reader = new FileReader()
            reader.onloadend = () => {
                this.raw = reader.result
            }

            reader.readAsDataURL(this.attachment)
        },
        update() {
            axios.put('https://api.test.kaplankaya.app/api/web/services/'+this.id, {
                id: this.id,
                name: this.item.name,
                description: this.item.description,
                price: this.item.price,
                categoryId: this.category
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
            axios.delete('https://api.test.kaplankaya.app/api/web/services/'+this.id).
            then(response => {
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

