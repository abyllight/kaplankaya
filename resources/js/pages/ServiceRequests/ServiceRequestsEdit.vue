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

                <h2 class="mb-8">{{item.residentName}}</h2>

                <v-select
                    v-model="item.serviceId"
                    :items="services"
                    item-text="name"
                    item-value="id"
                    label="Service"
                    clearable
                    outlined
                ></v-select>

                <v-textarea
                    v-model="item.description"
                    clearable
                    outlined
                    label="Description"
                >
                </v-textarea>

                <div class="mb-4">
                    <v-btn
                        class="mr-3"
                        large
                        @click="$router.back()"
                    >
                        Back
                    </v-btn>

                    <v-btn
                        class="mr-3"
                        color="primary"
                        large
                        @click="updateRequest"
                    >
                        Update
                    </v-btn>

                    <v-btn
                        color="error"
                        large
                        @click="dialogConfirm = true"
                    >
                        Delete
                    </v-btn>
                </div>
            </v-col>
        </v-row>

        <v-dialog v-model="dialogConfirm" max-width="500px">
            <v-card>
                <v-card-title class="text-h5">Are you sure you want to delete this request?</v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialogConfirm = false">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteRequest">Yes</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "ServiceRequestsEdit",
    props: ['id', 'resident_id'],
    data: () => ({
        breadcrumbs: [
            {
                text: 'Service requests',
                disabled: false,
                href: '/service-requests',
            },
            {
                text: 'Edit service request',
                disabled: true
            },
        ],
        services: [],
        residents: [],
        item: {},
        resident: {},
        dialogConfirm: false,
        action_name: 'approve',
        action_id: 0
    }),
    created() {
        this.getServiceById()
        this.fetchServices()
        this.fetchResidents()
    },
    methods: {
        async getServiceById() {
            await axios
                .get('https://api.test.kaplankaya.app/api/web/services/requests/'+this.id)
                .then(response => {
                    this.item = response.data.data
                })
        },
        async fetchServices() {
            await axios
                .get('https://api.test.kaplankaya.app/api/web/services', {
                    params: {
                        Categoryid: this.category_id,
                        PageNumber: 1,
                        PageSize: 10000
                    }
                })
                .then(response => {
                    this.services = response.data.data
                })
        },
        async fetchResidents() {
            await axios
                .get('https://api.test.kaplankaya.app/api/web/residents', {
                    params: {
                        PageNumber: 1,
                        PageSize: 10000
                    }
                })
                .then(response => {
                    this.residents = response.data.data
                }).catch(error => {
                    this.$store.dispatch('showAlert', {
                        isVisible: true,
                        msg: error.response.data.Message,
                        color: 'error',
                        type: 'error'
                    })
                })
        },
        updateRequest() {
            axios.put('https://api.test.kaplankaya.app/api/web/services/requests/'+this.id, {
                id: this.id,
                serviceId: this.item.serviceId,
                residentId: this.item.residentId,
                description: this.item.description
            }).then(response => {
                this.$store.dispatch('showAlert', {
                    isVisible: true,
                    msg: response.data.message,
                    color: 'success',
                    type: 'success'
                })
                this.$router.push('/service-requests')
            }).catch(error => {
                console.log(error.response.data)
                this.$store.dispatch('showAlert', {
                    isVisible: true,
                    msg: error.response.data.title,
                    color: 'error',
                    type: 'error'
                })
            })
        },
        deleteRequest() {
            axios.delete('https://api.test.kaplankaya.app/api/web/services/requests/'+this.id).
            then(response => {
                this.dialogDelete = false

                this.$store.dispatch('showAlert', {
                    isVisible: true,
                    msg: response.data.message,
                    color: 'success',
                    type: 'success'
                })

                this.$router.push('/service-requests')
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

