<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-space-between align-center">
                <h1>Notifications</h1>
                <div>
                    <v-btn dark color="brand" to="notifications/create">
                        <v-icon left>mdi-plus</v-icon>
                        Add notification
                    </v-btn>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>

                <div class="text-center pt-2 pb-5">
                    <v-pagination
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
    name: "Notification",
    data: () => ({
        items: [],
        headers: [
            { text: '#', value: 'index' },
            { text: 'Publication date', value: 'publicationDate' },
            { text: 'Title', value: 'title' },
            { text: 'Buildings', value: 'isForAll' }
        ],
        loading: true,
        page: 1,
        pageCount: 0,
        itemsPerPage: 10
    }),
    created() {
        this.fetchNotifications()
    },
    methods: {
        async fetchNotifications() {
            await axios
                .get('https://api.kaplankaya.app/api/Notices/GetByOSIId', {
                    params: {
                        OSIId: this.$store.state.user_id,
                        PageNumber: 1,
                        PageSize: 10000
                    }
                })
                .then(response => {
                    this.items = response.data.data
                    this.loading = false
                })
        },
        openItem(item) {
            this.$router.push({name: 'notifications_edit', params: {id: item.id}})
        }
    }
}
</script>

