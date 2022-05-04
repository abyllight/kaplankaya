<template>
    <div>
        <v-row>

            <!--  Left  -->
            <v-col cols="12" sm="12" lg="4">
                <v-sheet elevation="0" outlined rounded class="pa-3">
                    <h3 class="mb-1">{{request.residentName}}</h3>
                    <div class="d-flex align-center mb-4">
                        <div class="mr-4">
                            <v-icon small>
                                mdi-phone
                            </v-icon>
                            <span class="subtitle-2 ml-0 pl-0">
                                {{request.residentPhoneNumber}}
                            </span>
                        </div>
                        <v-chip label small>{{request.requestStatus}}new</v-chip>
                    </div>

                    <p class="body-1 font-weight-light">{{request.description}}</p>
                </v-sheet>
            </v-col>

            <!--  Right  -->
            <v-col cols="12" sm="12" lg="8" style="position: relative">
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
                    this.loading = false
                    console.log(this.request)
                })
        },
        loadChat () {

        },
        sendMessage () {
            console.log('asd')
            if (this.content !== '') {
                //this.$store.dispatch('sendMessage', { username: this.username, content: this.content, date: new Date().toString(), chatID: this.id })
                this.content = ''
            }
        }
    }
}
</script>
