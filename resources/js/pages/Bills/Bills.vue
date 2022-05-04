<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-space-between align-center">
                <h1>Bills</h1>
                <div>
                    <v-btn color="brand" dark to="bills/create">
                        <v-icon left>mdi-plus</v-icon>
                        Add bill
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
                    @click:row="editItem"
                >
                    <template v-slot:item.index="{ index }">
                        {{ index + 1 }}
                    </template>
                    <template v-slot:item.title="{ item }">
                        <span class="font-weight-bold">{{item.title}}</span>
                    </template>
                    <template v-slot:item.status="{ item }">
                        <v-chip
                            label
                            small
                            dark
                            :color="getStatusColor(item.status)"
                        >
                            {{getStatus(item.status)}}
                        </v-chip>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "Bills",
    data: () => ({
        items: [],
        headers: [
            { text: '#', value: 'index' },
            { text: 'Resident', value: 'residentFullName' },
            { text: 'Phone', value: 'residentPhoneNumber' },
            { text: 'Amount', value: 'amount' },
            { text: 'Status', value: 'status' }
        ],
        loading: true,
        page: 1,
        pageCount: 0,
        itemsPerPage: 10,
        resident_id: null,
        resident_name: null
    }),
    created() {
        this.fetchBills()
    },
    methods: {
        async fetchBills() {
            await axios
                .get('https://api.test.kaplankaya.app/api/web/services/requests/bills', {
                    params: {
                        PageNumber: 1,
                        PageSize: 10000,
                        ResidentName: this.resident_name,
                        VillaNumber: this.villa,
                        ResidentId: this.resident_id
                    }
                })
                .then(response => {
                    this.items = response.data.data
                    this.loading = false
                })
        },
        editItem(item) {
            this.$router.push({name: 'bills_edit', params: {id: item.referenceId}})
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

