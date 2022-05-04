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
                    v-model="name"
                    label="Name"
                    clearable
                    outlined
                ></v-text-field>

                <v-textarea
                    v-model="description"
                    label="Description"
                    clearable
                    outlined
                ></v-textarea>

                <v-text-field
                    v-model="price"
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
                    class="mt-4"
                    color="primary"
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
    name: "ServicesCreate",
    data: () => ({
        breadcrumbs: [
            {
                text: 'Services',
                disabled: false,
                href: '/services',
            },
            {
                text: 'Create service',
                disabled: true
            },
        ],
        categories: [],
        category: null,
        name: null,
        description: null,
        price: null,
        attachment: null,
        img: null,
        raw: null
    }),
    created() {
        this.fetchCategories()
    },
    methods: {
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
        save() {
            axios.post('https://api.test.kaplankaya.app/api/web/services', {
                name: this.name,
                description: this.description,
                price: this.price,
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

