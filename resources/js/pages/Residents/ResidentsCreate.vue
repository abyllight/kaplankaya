<template>
    <div>
        <v-row justify="">
            <v-col sm="12" lg="6">
                <div class="mb-4">
                    <v-breadcrumbs
                        class="pl-0 blue--text"
                        :items="items"
                        large
                    ></v-breadcrumbs>
                </div>

                <h1 class="mb-5">Add a resident</h1>

                <div>
                    <v-text-field
                        v-model="firstName"
                        label="First name"
                        clearable
                        outlined
                        class="required"
                    ></v-text-field>
                    <v-text-field
                        v-model="lastName"
                        label="Last name"
                        clearable
                        outlined
                        class="required"
                    ></v-text-field>
                    <v-text-field
                        v-model="middleName"
                        label="Middle name (optional)"
                        clearable
                        outlined
                    ></v-text-field>
                    <v-text-field
                        v-model="phoneNumber"
                        label="Phone"
                        v-mask="'+7 (###) ###-##-##'"
                        clearable
                        outlined
                        class="required"
                    ></v-text-field>
                    <v-text-field
                        v-model="email"
                        label="Email"
                        clearable
                        outlined
                        class="required"
                    ></v-text-field>
                    <v-select
                        v-model="villaAddress"
                        :items="villas"
                        label="Villa address"
                        clearable
                        outlined
                        class="required"
                    ></v-select>
                    <v-select
                        v-model="villaNumber"
                        :items="villaNumbers"
                        label="Villa number"
                        clearable
                        outlined
                        class="required"
                    ></v-select>
                    <v-btn
                        class="mt-4"
                        color="primary"
                        large
                        @click="submit"
                    >
                        Save
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "ResidentsCreate",
    data: () => ({
        items: [
            {
                text: 'Residents',
                disabled: false,
                href: '/residents',
            },
            {
                text: 'Add a resident',
                disabled: true,
                href: '/residents/create',
            },
        ],
        loading: true,
        page: 1,
        pageCount: 0,
        itemsPerPage: 10,
        firstName: null,
        middleName: null,
        lastName: null,
        phoneNumber: null,
        villaAddress: null,
        villaNumber: null,
        villas: [],
        villaNumbers: [],
        email: null
    }),
    created() {

    },
    methods: {
        submit() {}
    }
}
</script>
<style>
.required label::after {
    content: "*";
    color: red;
}
</style>

