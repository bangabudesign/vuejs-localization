import Vue from 'vue'
import VueRouter from 'vue-router'
import {Trans} from '../plugins/Translation'

Vue.use(VueRouter)

import Home from '../views/Home.vue'
import Schedule from '../views/Schedule.vue'

const routes = [
    {
        path: '/:locale',
        component: {
            render (c) {return c('router-view')}
        },
        beforeEnter: Trans.routeMiddleware,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home,
            },            
            {
                path: 'schedule',
                name: 'Schedule',
                component: Schedule,
            }
        ]
    },
    {
        path: "*",
        redirect() {
            return Trans.defaultLocale
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
  
export default router