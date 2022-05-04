<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-space-between align-center">
                <h1>Residents</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-row>
                    <v-col cols="6" lg="3" class="mb-n4">
                        <v-text-field
                            v-model="fullName"
                            @change="fetchResidents"
                            placeholder="Full name"
                            outlined
                            dense
                            clearable
                        >
                        </v-text-field>
                    </v-col>
                    <v-col cols="6" lg="3" class="mb-n4">
                        <v-text-field
                            v-model="phone"
                            @change="fetchResidents"
                            placeholder="Phone number"
                            outlined
                            dense
                            clearable
                        >
                        </v-text-field>
                    </v-col>
                    <v-col cols="6" lg="3" class="mb-n4">
                        <v-text-field
                            v-model="email"
                            @change="fetchResidents"
                            placeholder="Email"
                            outlined
                            dense
                            clearable
                        >
                        </v-text-field>
                    </v-col>
                    <v-col cols="6" lg="3" class="mb-n4">
                        <v-text-field
                            v-model="villa"
                            @change="fetchResidents"
                            placeholder="Villa"
                            outlined
                            dense
                            clearable
                        >
                        </v-text-field>
                    </v-col>
                </v-row>

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
                    @click:row="openModal"
                    style="cursor: pointer"
                >
                    <template v-slot:item.index="{ index }">
                        {{ index + 1 }}
                    </template>
                </v-data-table>
            </v-col>
        </v-row>

        <resident-modal :dialog="dialog" :resident="resident" @close-modal="closeModal"/>
    </div>
</template>

<script>
import ResidentModal from "../../components/ResidentModal";
export default {
    name: "Residents",
    components: {ResidentModal},
    data: () => ({
        items: [],
        headers: [
            { text: '#', value: 'index' },
            { text: 'Name', value: 'fullName' },
            { text: 'Phone', value: 'numberPhone' },
            { text: 'Email', value: 'email' },
            { text: 'Villa', value: 'villaNumber' }
        ],
        loading: true,
        page: 1,
        pageCount: 0,
        itemsPerPage: 10,
        fullName: null,
        phone: null,
        email: null,
        addresses: [],
        address: null,
        villa: null,
        roles: [],
        role: null,
        statuses: [
            {
                name: 'Confirmed',
                value: 1
            },
            {
                name: 'New',
                value: 0
            }
        ],
        status: null,
        dialog: false,
        resident: {}
    }),
    created() {
        this.fetchResidents()
    },
    methods: {
        async fetchResidents() {
            await axios
                .get('https://api.test.kaplankaya.app/api/web/residents', {
                    params: {
                        OSIId: this.$store.state.user_id,
                        PageNumber: 1,
                        PageSize: 10000,
                        FullName: this.fullName,
                        NumberPhone: this.phone,
                        VillaNumber: this.villa
                    }
                })
                .then(response => {
                    this.items = response.data.data
                    this.loading = false
                }).catch(error => {
                    this.loading = false
                    this.$store.dispatch('showAlert', {
                        isVisible: true,
                        msg: error.response.data.Message,
                        color: 'error',
                        type: 'error'
                    })
                })
        },
        openModal(item) {
            this.resident = item
            this.dialog = true
        },
        closeModal() {
            this.resident = {}
            this.dialog = false
        },
        getStatus(status) {
            return status === 1 ? 'Confirmed' : 'New'
        }
    }
}
</script>

