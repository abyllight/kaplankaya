<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-space-between align-center">
                <h1>Payments</h1>
                <div>
                    <v-btn color="brand" dark to="announcements/create">
                        <v-icon left>mdi-plus</v-icon>
                        Add payment
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
                    @click:row="openItem"
                    style="cursor: pointer"
                >
                    <template v-slot:item.index="{ index }">
                        {{ index + 1 }}
                    </template>
                    <template v-slot:item.title="{ item }">
                        <span class="font-weight-bold">{{item.title}}</span>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "Payments",
    data: () => ({
        items: [],
        headers: [
            { text: '#', value: 'index' },
            { text: 'Title', value: 'title' }
        ],
        loading: true,
        page: 1,
        pageCount: 0,
        itemsPerPage: 10,
        villa: null,
        is_paid: false,
        month: null
    }),
    created() {
        this.fetchPayments()
    },
    methods: {
        async fetchPayments() {
            await axios
                .get('https://api.test.kaplankaya.app/api/web/payments/GetAll', {
                    params: {
                        VillaNumber: this.villa,
                        //IsPaid: this.is_paid,
                        Month: this.month
                    }
                })
                .then(response => {
                    this.items = response.data.data
                    this.loading = false
                })
        },
        openItem(item) {
            this.$router.push({name: 'announcements_edit', params: {id: item.id}})
        }
    }
}
</script>

