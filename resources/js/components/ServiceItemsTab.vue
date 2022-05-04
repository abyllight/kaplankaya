<template>
    <div class="mt-4">
        <v-row>
            <v-col>
                <p v-if="items.length === 0">No services found</p>
                <v-sheet
                    v-else
                    v-for="(item, i) in items"
                    :key="item.name"
                    class="pa-4 mb-3 d-flex align-center justify-space-between text-sm-body-2"
                    color="grey lighten-4"
                    style="cursor: pointer"
                    @click="editService(item.id)"
                >
                    <div class="d-flex align-center">
                        <span class="font-weight-bold mb-0 mr-3">{{i+1}}</span>
                        <p class="mb-0">{{item.name}}</p>
                    </div>

                    <v-icon v-if="type === 0">
                        mdi-chevron-right
                    </v-icon>
                </v-sheet>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "ServiceItemsTab",
    props: {
        items: Array,
        type: Number
    },
    methods: {
        editService(id) {
            this.$router.push({ name: 'services_edit', params: { id: id } })
        }
    }
}
</script>
