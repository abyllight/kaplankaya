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

                <h2 class="mb-1">{{item.residentFullName}}</h2>
                <div class="d-flex align-center mb-8">
                    <v-chip
                        label
                        small
                        dark
                        :color="getStatusColor(item.status)"
                    >
                        {{getStatus(item.status)}}
                    </v-chip>
                </div>

                <div class="d-flex align-start mb-3">
                    <div class="mr-10">
                        <h5>Phone:</h5>
                        <p class="body-1 font-weight-light">{{item.residentPhoneNumber}}</p>
                    </div>
                    <div>
                        <h5>Amount:</h5>
                        <p class="body-1 font-weight-light">{{item.amount}}</p>
                    </div>
                </div>

                <h5 v-if="item.description">Description:</h5>
                <p class="body-1 font-weight-light">{{item.description}}</p>

                <div class="mt-10">
                    <v-btn
                        class="mr-3"
                        large
                        @click="$router.back()"
                    >
                        Back
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
                    <v-btn color="blue darken-1" text @click="deleteBill">Yes</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "BillsEdit",
    props: ['id', 'resident_id'],
    data: () => ({
        breadcrumbs: [
            {
                text: 'Bills',
                disabled: false,
                href: '/bills',
            },
            {
                text: 'Edit bill',
                disabled: true
            },
        ],
        item: {},
        dialogConfirm: false
    }),
    created() {
        this.getBillById()
    },
    methods: {
        async getBillById() {
            await axios
                .get('https://api.test.kaplankaya.app/api/web/services/requests/bills/'+this.id)
                .then(response => {
                    this.item = response.data.data
                    console.log(this.item)
                })
        },
        deleteBill() {
            axios.delete('https://api.test.kaplankaya.app/api/web/services/requests/bills/'+this.id).
            then(response => {
                this.dialogDelete = false

                this.$store.dispatch('showAlert', {
                    isVisible: true,
                    msg: response.data.message,
                    color: 'success',
                    type: 'success'
                })

                this.$router.push('/bills')
            }).catch(error => {
                this.$store.dispatch('showAlert', {
                    isVisible: true,
                    msg: error.response.data.Message,
                    color: 'error',
                    type: 'error'
                })
            })
        },
        getStatus(status) {
            if (status === 1) {
                return 'Await'
            }else if(status === 2) {
                return 'New'
            }else if(status === 3) {
                return 'Completed'
            }else {
                return 'Error'
            }
        },
        getStatusColor(status) {
            if (status === 1) {
                return 'deep-orange'
            }else if(status === 2) {
                return 'green'
            }else if (status === 3) {
                return 'blue'
            }else {
                return 'red'
            }
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

