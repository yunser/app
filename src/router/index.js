import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const Link = resolve => require(['@/views/Link'], resolve)
const About = resolve => require(['@/views/About'], resolve)
const Live = resolve => require(['@/views/Live'], resolve)
const Work = resolve => require(['@/views/Work'], resolve)
const Study = resolve => require(['@/views/Study'], resolve)
const Develop = resolve => require(['@/views/Develop'], resolve)
const Site = resolve => require(['@/views/Site'], resolve)
const Lab = resolve => require(['@/views/Lab'], resolve)

const Collection = resolve => require(['@/views/Collection'], resolve)

const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/like',
        component: Collection
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/links',
        component: Link
    },
    {
        path: '/live',
        component: Live
    },
    {
        path: '/study',
        component: Study
    },
    {
        path: '/work',
        component: Work
    },
    {
        path: '/develop',
        component: Develop
    },
    {
        path: '/lab',
        component: Lab
    },
    {
        path: '/site',
        component: Site
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
