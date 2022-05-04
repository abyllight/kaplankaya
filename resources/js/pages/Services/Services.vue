<template>
 <div>
     <v-row>

        <!-- Left  -->
         <v-col sm="12" lg="3">
             <div class="d-flex align-center justify-space-between">
                 <h2>Categories</h2>
                 <v-btn color="brand" dark to="/categories/create">
                     <v-icon left>mdi-plus</v-icon>
                     add
                 </v-btn>
             </div>

             <div class="mt-8">
                 <div v-if="categories.length === 0">
                     <v-skeleton-loader
                         type="paragraph"
                     ></v-skeleton-loader>
                 </div>

                 <div v-else>
                     <v-sheet
                         v-for="(item, index) in categories"
                         :key="item.name"
                         rounded="lg"
                         color="blue-grey lighten-3"
                         class="pa-3 mb-3 d-flex align-center justify-space-between"
                         :class="c_id === index ? 'blue-grey lighten-3' : 'grey lighten-4'"
                         style="cursor: pointer"
                         @click="chooseCategory(item, index)"
                     >
                         <h6>{{item.name}}</h6>
                         <v-icon small @click="editCategory(item)">mdi-pencil</v-icon>
                     </v-sheet>
                 </div>
             </div>

<!--             <v-divider class="my-5"></v-divider>-->

            <!--   Extra   -->
<!--             <div class="mt-4">
                 <div v-if="categories.length === 0">
                     <v-skeleton-loader
                         type="paragraph"
                     ></v-skeleton-loader>
                 </div>

                 <div v-else>
                     <v-sheet
                         v-for="(item, index) in extra"
                         :key="item.name"
                         rounded="lg"
                         color="blue-grey lighten-3"
                         class="pa-3 mb-3"
                         :class="type === (index+1) ? 'blue-grey lighten-3' : 'grey lighten-4'"
                         style="cursor: pointer"
                         @click="chooseExtra(item)"
                     >
                         <h6 class="text-uppercase">{{item.name}}</h6>
                     </v-sheet>
                 </div>
             </div>-->
         </v-col>

         <!-- Right  -->
         <v-col>
             <div class="d-flex align-center justify-space-between mb-10">
                 <h4>{{category_name}}</h4>
                 <v-btn color="brand" dark to="/services/create">
                     <v-icon left>mdi-plus</v-icon>
                     add service
                 </v-btn>
             </div>

             <div class="mt-4">
                 <div v-if="categories.length === 0">
                     <v-skeleton-loader
                         type="paragraph"
                     ></v-skeleton-loader>
                 </div>
                 <div v-else>
                     <service-items-tab :type="type" :items="services"/>
                 </div>
             </div>
         </v-col>
     </v-row>
 </div>
</template>

<script>
import ServiceItemsTab from "../../components/ServiceItemsTab";
export default {
    name: "Services",
    components: {ServiceItemsTab},
    data: () => ({
        categories: [],
        category_id: null,
        category_name: null,
        c_id: 0,
        services: [],
        requests: [],
        bills: [],
        dialog: false,
        selectedItem: 1,
        type: 0,
        extra: [
            {
                name: 'Requests',
                type: 1
            },
            {
                name: 'Bills',
                type: 2
            }
        ]
    }),
    created() {
        this.fetchCategories()
    },
    methods: {
        async fetchCategories() {
            await axios
                .get('https://api.test.kaplankaya.app/api/web/services/categories', {
                    params: {
                        PageNumber: 1,
                        PageSize: 10000
                    }
                })
                .then(response => {
                    this.categories = response.data.data
                    this.category_id = this.categories[0].id
                    this.category_name = this.categories[0].name
                    this.c_id = 0

                    this.fetchServices()
                })
        },
        async fetchServices() {
            await axios
                .get('https://api.test.kaplankaya.app/api/web/services', {
                    params: {
                        Categoryid: this.category_id,
                        PageNumber: 1,
                        PageSize: 10000
                    }
                })
                .then(response => {
                    this.services = response.data.data
                })
        },
        async fetchServiceRequests() {
            await axios
                .get('https://api.kaplankaya.app/api/ServiceRequests/GetAll', {
                    params: {
                        PageNumber: 1,
                        PageSize: 10000
                    }
                })
                .then(response => {
                    this.services = response.data.data
                    console.log(this.services)
                })
        },
        async fetchServiceBills() {
            await axios
                .get('https://api.kaplankaya.app/api/Bill/GetAll', {
                    params: {
                        PageNumber: 1,
                        PageSize: 10000
                    }
                })
                .then(response => {
                    this.services = response.data.data
                    console.log('bills', this.services)
                })
        },
        async fetchCategoryById(id) {
            await axios
                .get('https://api.kaplankaya.app/api/Category/GetById', {
                    params: {
                        Id: id
                    }
                })
                .then(response => {
                    this.fetchServices()
                })
        },
        chooseCategory(item, idx) {
            this.type = 0
            this.category_id = item.id
            this.category_name = item.name
            this.c_id = idx
            this.fetchServices()
        },
        editCategory(item) {
            this.$router.push({name: 'categories_edit', params: {id: item.id}})
        },
        chooseExtra(item) {
            this.type = item.type

            if (this.type === 1) {
                this.fetchServiceRequests()
            }else if (this.type === 2){
                this.fetchServiceBills()
            }
        }
    }
}
</script>
