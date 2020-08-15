import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/system/login')
    },
    {
        path: '/person-detail',
        name: 'personDetail',
        component: () => import('../components/personal/person-detail')
    },
    {
        path: '/tl-add',
        name: 'tlAdd',
        component: () => import('../components/tl/tl-add')
    },
    {
        path: '/element-data-add',
        name: 'elementDataAdd',
        component: () => import('../components/elementData/element-data-add.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
