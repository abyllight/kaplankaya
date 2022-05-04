import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            component: () => import('./pages/NotFound')
        },
        {
            path: '/login',
            name: 'login',
            meta: {
                auth: false
            },
            component: () => import('./pages/Login')
        },
        {
            path: '/',
            name: 'announcements',
            meta: {
                auth: true
            },
            component: () => import('./pages/Announcements/Announcements')
        },
        {
            path: '/announcements/create',
            name: 'announcements_create',
            meta: {
                auth: true
            },
            component: () => import('./pages/Announcements/AnnouncementsCreate')
        },
        {
            path: '/announcements/:id',
            name: 'announcements_edit',
            props: true,
            meta: {
                auth: true
            },
            component: () => import('./pages/Announcements/AnnouncementsEdit')
        },
        {
            path: '/notifications',
            name: 'notifications',
            meta: {
                auth: true
            },
            component: () => import('./pages/Notifications/Notifications')
        },
        {
            path: '/notifications/create',
            name: 'notifications_create',
            meta: {
                auth: true
            },
            component: () => import('./pages/Notifications/NotificationsCreate')
        },
        {
            path: '/notifications/:id',
            name: 'notifications_edit',
            props: true,
            meta: {
                auth: true
            },
            component: () => import('./pages/Notifications/NotificationsEdit')
        },
        {
            path: '/residents',
            name: 'residents',
            meta: {
                auth: true
            },
            component: () => import('./pages/Residents/Residents')
        },
        {
            path: '/residents/edit',
            name: 'residents_edit',
            props: true,
            meta: {
                auth: true
            },
            component: () => import('./pages/Residents/ResidentsEdit')
        },
        {
            path: '/services',
            name: 'services',
            meta: {
                auth: true
            },
            component: () => import('./pages/Services/Services')
        },
        {
            path: '/categories/create',
            name: 'categories_create',
            meta: {
                auth: true
            },
            component: () => import('./pages/ServiceCategories/CategoriesCreate')
        },
        {
            path: '/categories/:id',
            name: 'categories_edit',
            props: true,
            meta: {
                auth: true
            },
            component: () => import('./pages/ServiceCategories/CategoriesEdit')
        },
        {
            path: '/services/create',
            name: 'services_create',
            meta: {
                auth: true
            },
            component: () => import('./pages/Services/ServicesCreate')
        },
        {
            path: '/services/:id',
            name: 'services_edit',
            props: true,
            meta: {
                auth: true
            },
            component: () => import('./pages/Services/ServicesEdit')
        },
        {
            path: '/service-requests',
            name: 'service_requests',
            meta: {
                auth: true
            },
            component: () => import('./pages/ServiceRequests/ServiceRequests')
        },
        {
            path: '/service-requests/create',
            name: 'service_requests_create',
            meta: {
                auth: true
            },
            component: () => import('./pages/ServiceRequests/ServiceRequestsCreate')
        },
        {
            path: '/service-requests/:id',
            name: 'service_requests_edit',
            props: true,
            meta: {
                auth: true
            },
            component: () => import('./pages/ServiceRequests/ServiceRequestsEdit')
        },
        {
            path: '/chat/:id',
            name: 'chat',
            props: true,
            meta: {
                auth: true
            },
            component: () => import('./pages/Chat/Chat')
        },
        {
            path: '/payments',
            name: 'payments',
            meta: {
                auth: true
            },
            component: () => import('./pages/Payments/Payments')
        },
        {
            path: '/bills',
            name: 'bills',
            meta: {
                auth: true
            },
            component: () => import('./pages/Bills/Bills')
        },
        {
            path: '/bills/create',
            name: 'bills_create',
            meta: {
                auth: true
            },
            component: () => import('./pages/Bills/BillsCreate')
        },
        {
            path: '/bills/:id',
            name: 'bills_edit',
            props: true,
            meta: {
                auth: true
            },
            component: () => import('./pages/Bills/BillsEdit')
        },
    ]
})

router.beforeEach((to, from, next) => {

    const currentUser = localStorage.getItem('authenticated')
    const requireAuth = to.matched.some(record => record.meta.auth)

    if(requireAuth && !currentUser) {
        next('/login')
    }else if(currentUser && to.name === 'login'){
        next('/announcements')
    }else {
        next()
    }
})

export default router
