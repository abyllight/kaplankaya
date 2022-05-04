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

                <h1 class="mb-8">Add announcement</h1>

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
                    Update
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "AnnouncementsCreate",
    data: () => ({
        breadcrumbs: [
            {
                text: 'Announcements',
                disabled: false,
                href: '/',
            },
            {
                text: 'Create announcement',
                disabled: true
            },
        ],
        item: {}
    }),
    methods: {
        save() {

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

