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

                <h2 class="mb-2 headline">{{item.title}}</h2>
                <div class="mb-8 d-flex align-center">
                    <div>
                        <p class="body-2">Publication date: <span class="font-weight-bold">{{dateFormat}}</span></p>
                    </div>
                </div>

                <v-text-field
                    v-model="item.title"
                    label="Title"
                    clearable
                    outlined
                ></v-text-field>

                <v-textarea
                    v-model="item.text"
                    label="Description"
                    outlined
                    clearable
                ></v-textarea>

                <v-file-input
                    accept="image/*"
                    label="Attach files"
                    outlined
                    clearable
                ></v-file-input>

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
                    width="120"
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
    name: "AnnouncementsEdit",
    props: ['id'],
    data: () => ({
        breadcrumbs: [
            {
                text: 'Announcements',
                disabled: false,
                href: '/',
            },
            {
                text: 'Edit announcement',
                disabled: true
            },
        ],
        item: {}
    }),
    created() {
        this.fetchAnnouncement()
    },
    computed: {
        dateFormat() {
            let date = new Date(this.item.publicationDate)
            return this.item.publicationDate
        }
    },
    methods: {
        async fetchAnnouncement() {
            await axios
                .get('https://api.kaplankaya.app/api/Announcement/GetById', {
                    params: {
                        Id: this.id
                    }
                })
                .then(response => {
                    this.item = response.data.data
                    this.loading = false
                    console.log(response)
                })
        },
        save() {

        },
        ban() {},
        destroy() {

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

