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

                <h1 class="mb-8">Add service request</h1>

                <v-select
                    v-model="service_id"
                    :items="services"
                    item-text="name"
                    item-value="id"
                    label="Service"
                    clearable
                    outlined
                ></v-select>

                <v-select
                    v-model="resident_id"
                    :items="residents"
                    item-text="fullName"
                    item-value="userId"
                    label="Resident"
                    clearable
                    outlined
                ></v-select>

                <v-textarea
                    v-model="description"
                    clearable
                    outlined
                    label="Description"
                >
                </v-textarea>

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
    name: "ServiceRequestsCreate",
    data: () => ({
        breadcrumbs: [
            {
                text: 'Service requests',
                disabled: false,
                href: '/service-requests',
            },
            {
                text: 'Add service request',
                disabled: true
            },
        ],
        services: [],
        service_id: null,
        residents: [],
        resident_id: null,
        description: null
    }),
    created() {
        this.fetchServices()
        this.fetchResidents()
    },
    methods: {
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
        save() {
            axios.post('https://api.test.kaplankaya.app/api/web/services/requests', {
                serviceId: this.service_id,
                residentId: this.resident_id,
                description: this.description
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

