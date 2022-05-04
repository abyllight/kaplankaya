<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="500"
        >
            <v-card
                :disabled="loading_reg"
                :loading="loading_reg"
            >
                <v-card-title class="mb-2">
                    {{fullName}}
                </v-card-title>
                <v-card-subtitle>
                    <v-chip label small dark :color="statusColor">
                        {{status}}
                    </v-chip>
                </v-card-subtitle>

                <v-card-text>
                    <v-row>
                        <v-col>
                            <h4>Phone</h4>
                            {{resident.numberPhone}}
                        </v-col>
                        <v-col>
                            <h4>Email</h4>
                            {{resident.email}}
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h4>Villa number</h4>
                            {{resident.villaNumber}}
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="$emit('close-modal')"
                    >
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "ResidentModal",
    props: {
        dialog: Boolean,
        resident: Object
    },
    data: () => ({
        loading_reg: false
    }),
    computed: {
        fullName() {
            return this.resident.lastName + ' ' + this.resident.firstName
        },
        status() {
            return this.resident.status === 1 ? 'Confirmed' : 'New'
        },
        statusColor() {
            return this.resident.status === 1 ? 'amber' : 'green'
        },
        villaAddress() {
            return this.resident.address ? this.resident.address.house.street.name + ', ' + this.resident.address.house.name : ''
        },
        villaApartment() {
            return this.resident.address ? this.resident.address.apartment : ''
        }
    },
    methods: {
        regenerateResident() {
            this.loading_reg = true
        }
    }
}
</script>
