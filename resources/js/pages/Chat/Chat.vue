<template>
    <div>
        <v-row>

            <!--  Left  -->
            <v-col cols="12" sm="12" lg="5">
                <div class="mb-4">
                    <v-breadcrumbs
                        class="pl-0"
                        :items="breadcrumbs"
                        large
                    ></v-breadcrumbs>
                </div>
                <v-sheet elevation="0" outlined rounded class="pa-3">
                    <h3 class="mb-1">{{request.residentName}}</h3>
                    <div class="d-flex align-center mb-5">
                        <v-chip
                            label
                            small
                            dark
                            :color="getStatusColor(request.requestStatus)"
                        >
                            {{getStatus(request.requestStatus)}}
                        </v-chip>
                    </div>

                    <div class="d-flex align-start">
                        <div class="mr-10">
                            <h5>Phone:</h5>
                            <p class="body-1 font-weight-light">{{request.residentPhoneNumber}}</p>
                        </div>
                        <div>
                            <h5>Villa:</h5>
                            <p class="body-1 font-weight-light">{{request.villaNumber}}</p>
                        </div>
                    </div>

                    <h5 v-if="request.description">Description:</h5>
                    <p class="body-1 font-weight-light">{{request.description}}</p>
                </v-sheet>

                <!--   Timeline   -->
                <v-timeline
                    align-top
                    dense
                >

                    <v-timeline-item
                        color="green"
                        small
                    >
                        <v-chip
                            label
                            small
                            dark
                            color="green"
                        >
                            New
                        </v-chip>
                        <div class="text-caption">
                            {{ request.createdAt }}
                        </div>
                    </v-timeline-item>

                    <v-timeline-item
                        v-if="history.length === 0"
                        small
                    >
                        <v-textarea
                            v-model="comment"
                            outlined
                            clearable
                            :label="comment_title"
                            @keydown.enter="accept"
                            :disabled="loading"
                            :loading="loading"
                        ></v-textarea>
                        <v-btn
                            color="primary"
                            class="mr-4"
                            @click="accept"
                            :disabled="loading"
                            :loading="loading"
                        >
                            Accept
                        </v-btn>
                        <v-btn
                            color="error"
                            class="mx-0"
                            @click="decline"
                            :disabled="loading"
                            :loading="loading"
                        >
                            Decline
                        </v-btn>
                    </v-timeline-item>

                    <v-timeline-item
                        v-for="h in history"
                        :key="h.id"
                        small
                        :color="getStatusColor(h.status)"
                    >
                        <div>
                            <v-chip
                                label
                                small
                                dark
                                :color="getStatusColor(h.status)"
                            >
                                {{getStatus(h.status)}}
                            </v-chip>
                            <div class="text-caption mb-2">
                                {{ h.createdAt }}
                            </div>
                            <div class="body-2">
                                {{h.description}}
                            </div>
                        </div>
                    </v-timeline-item>

                    <v-timeline-item
                        v-if="history.length === 1 && history[0].status !== 5"
                        small
                    >
                        <v-text-field
                            v-model="price"
                            type="number"
                            outlined
                            clearable
                            label="Price"
                            :disabled="loading"
                            :loading="loading"
                        ></v-text-field>
                        <v-textarea
                            v-model="comment"
                            outlined
                            clearable
                            :label="comment_title"
                            @keydown.enter="accept"
                            :disabled="loading"
                            :loading="loading"
                        ></v-textarea>
                        <v-btn
                            color="primary"
                            class="mx-0"
                            @click="sendPayment"
                            :disabled="loading"
                            :loading="loading"
                        >
                            Issue an invoice
                        </v-btn>
                    </v-timeline-item>
                </v-timeline>
            </v-col>

            <!--  Right  -->
            <v-col cols="12" sm="12" lg="7" style="position: relative">
                <div style="height: 600px; overflow-y: auto" class="pa-3">

                </div>
                <div>
                    <v-text-field
                        v-model="content"
                        type="text"
                        placeholder="Type here..."
                        v-on:keyup.enter="sendMessage"
                        outlined
                        rounded
                        append-icon="mdi-send"
                        @click:append="sendMessage"
                    >
                    </v-text-field>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import message from "../../components/Message";
export default {
    name: "Chat",
    props: ['id'],
    components: {message},
    data: () => ({
        request: {},
        messages: [],
        content: '',
        loading: false,
        breadcrumbs: [
            {
                text: 'Service requests',
                disabled: false,
                href: '/service-requests',
            },
            {
                text: 'Request details',
                disabled: true
            },
        ],
        history: [],
        comment: null,
        price: null,
        comment_title: 'Comment'
    }),
    created() {
        this.getRequestById()
    },
    methods: {
        async getRequestById() {
            await axios
                .get('https://api.test.kaplankaya.app/api/web/services/requests/'+this.id)
                .then(response => {
                    this.request = response.data.data
                    this.history = this.request.history
                    this.history = this.history.reverse()
                    this.loading = false
                    console.log(this.request)
                })
        },
        sendMessage () {
            if (this.content !== '') {
                //this.$store.dispatch('sendMessage', { username: this.username, content: this.content, date: new Date().toString(), chatID: this.id })
                this.content = ''
            }
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
            }else if (status === 5){
                return 'Canceled'
            }
        },
        getStatusColor(status) {
            if (status === 1) {
                return 'green'
            }else if(status === 2) {
                return 'deep-orange'
            }else if (status === 3) {
                return 'indigo'
            }else if (status === 4) {
                return 'blue'
            }else if (status === 5){
                return 'red'
            }
        },
        accept() {
            this.loading = true
            axios.put('https://api.test.kaplankaya.app/api/web/services/requests/move/'+this.id, {
                requestId: this.id,
                description: this.comment
            }).then(response => {
                this.loading = false
                this.comment = null
                this.getRequestById()
            }).catch(error => {
                this.loading = false
                console.log(error)
            })
        },
        decline() {
            this.loading = true
            axios.put('https://api.test.kaplankaya.app/api/web/services/requests/cancel/'+this.id, {
                requestId: this.id,
                description: this.comment,
                price: this.price
            }).then(response => {
                this.loading = false
                this.comment = null
                this.price = null
                this.getRequestById()
            }).catch(error => {
                this.loading = false
                console.log(error)
            })
        },
        sendPayment() {
            this.loading = true
            axios.put('https://api.test.kaplankaya.app/api/web/services/requests/move/'+this.id, {
                requestId: this.id,
                price: this.price,
                description: this.comment
            }).then(response => {
                this.loading = false
                this.comment = null
                this.getRequestById()
            }).catch(error => {
                this.loading = false
                console.log(error)
            })
        }
    }
}
</script>
