<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-space-between align-center">
                <h1>Service requests</h1>
                <div>
                    <v-btn color="brand" dark to="service-requests/create">
                        <v-icon left>mdi-plus</v-icon>
                        Add request
                    </v-btn>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>

                <div class="text-center pt-2 pb-5">
                    <v-pagination
                        color="brand"
                        v-model="page"
                        :length="pageCount"
                    ></v-pagination>
                </div>

                <v-data-table
                    :headers="headers"
                    :items="items"
                    :page.sync="page"
                    :items-per-page="itemsPerPage"
                    :loading="loading"
                    loading-text="Loading... Please wait"
                    hide-default-footer
                    class="elevation-1"
                    @page-count="pageCount = $event"
                    style="cursor: pointer"
                >
                    <template v-slot:item.index="{ index }">
                        {{ index + 1 }}
                    </template>
                    <template v-slot:item.title="{ item }">
                        <span class="font-weight-bold">{{item.title}}</span>
                    </template>
                    <template v-slot:item.requestStatus="{ item }">
                        <v-chip
                            label
                            small
                            dark
                            :color="getStatusColor(item.requestStatus)"
                        >
                            {{getStatus(item.requestStatus)}}
                        </v-chip>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-icon
                            small
                            class="mr-2"
                            @click="editItem(item)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                            small
                            @click="goToChat(item)"
                        >
                            mdi-chat
                        </v-icon>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "ServiceRequests",
    data: () => ({
        items: [],
        headers: [
            { text: '#', value: 'index' },
            { text: 'Resident', value: 'residentName' },
            { text: 'Service', value: 'serviceName' },
            { text: 'Price', value: 'servicePrice' },
            { text: 'Villa', value: 'villaNumber' },
            { text: 'Status', value: 'requestStatus' },
            { text: 'Actions', value: 'actions', sortable: false }
        ],
        loading: true,
        page: 1,
        pageCount: 0,
        itemsPerPage: 10
    }),
    created() {
        this.fetchServiceRequests()
    },
    methods: {
        async fetchServiceRequests() {
            await axios
                .get('https://api.test.kaplankaya.app/api/web/services/requests', {
                    params: {
                        PageNumber: 1,
                        PageSize: 10000
                    }
                })
                .then(response => {
                    this.items = response.data.data
                    this.loading = false
                    console.log(this.items)
                })
        },
        editItem(item) {
            this.$router.push({name: 'service_requests_edit', params: {id: item.id, resident_id: item.residentId}})
        },
        goToChat(item) {
            this.$router.push({name: 'chat', params: {id: item.id}})
        },
        getStatus(status) {
            if (status === 1) {
                return 'New'
            }else if(status === 2) {
                return 'Accepted'
            }else if(status === 3) {
                return 'Payment expected'
            }else if (status === 4) {
                return 'Completed'
            }else {
                return 'Canceled'
            }
        },
        getStatusColor(status) {
            if (status === 1) {
                return 'green'
            }else if(status === 2) {
                return 'amber'
            }else if (status === 3) {
                return 'purple'
            }else if (status === 4) {
                return 'blue'
            }else {
                return 'red'
            }
        }
    }
}
</script>

