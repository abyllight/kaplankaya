<template>
    <div>
        <v-row justify="center">
            <v-col sm="12" lg="6">
                <div class="mb-5">
                    <v-breadcrumbs
                        class="pl-0"
                        :items="items"
                        large
                    ></v-breadcrumbs>
                </div>

                <div class="mb-10">
                    <h3 class="mb-2">{{ user.lastName + ' ' + user.firstName }}</h3>
                    <v-chip
                        label
                    >
                        user.status
                    </v-chip>
                </div>

                <div>
                    <v-text-field
                        v-model="user.lastName"
                        label="Company name"
                        clearable
                        outlined
                        dense
                        class="required"
                    ></v-text-field>
                    <v-text-field
                        v-model="user.firstName"
                        label="Responsible person"
                        clearable
                        outlined
                        dense
                        class="required"
                    ></v-text-field>
                    <v-text-field
                        label="Middle name (optional)"
                        clearable
                        outlined
                        dense
                    ></v-text-field>
                    <v-text-field
                        label="IIN"
                        clearable
                        outlined
                        dense
                        class="required"
                    ></v-text-field>
                    <v-text-field
                        v-model="user.numberPhone"
                        label="Phone"
                        v-mask="'+7 (###) ###-##-##'"
                        clearable
                        outlined
                        dense
                        class="required"
                    ></v-text-field>
                    <v-text-field
                        label="Villa"
                        clearable
                        outlined
                        dense
                        class="required"
                    ></v-text-field>
                    <v-radio-group
                        v-model="role"
                        row
                    >
                        <v-radio
                            label="Owner"
                            value="owner"
                        ></v-radio>
                        <v-radio
                            label="Tenant"
                            value="tenant"
                        ></v-radio>
                    </v-radio-group>
                    <v-btn
                        class="mt-4 mr-4"
                        large
                        color="primary"
                        @click="save"
                        width="200"
                    >
                        Save
                    </v-btn>
                    <v-btn
                        class="mt-4 mr-4"
                        large
                        outlined
                        @click="ban"
                    >
                        Ban
                    </v-btn>
                    <v-btn
                        class="mt-4"
                        color="error"
                        large
                        @click="destroy"
                    >
                        Delete
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "ResidentsShow",
    props: {
        user: Object
    },
    data: () => ({
        items: [
            {
                text: 'Residents',
                disabled: false,
                href: '/residents',
            },
            {
                text: 'Edit resident',
                disabled: true
            },
        ],
        disabled: true,
        villa: null,
        role: null,
    }),
    created() {
    },
    methods: {
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

