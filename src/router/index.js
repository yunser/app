import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const Link = resolve => require(['@/views/Link'], resolve)
const LinkApply = resolve => require(['@/views/LinkApply'], resolve)
const AdminLinkApply = resolve => require(['@/views/AdminLinkApply'], resolve)
const Contact = resolve => require(['@/views/Contact'], resolve)
const Search = resolve => require(['@/views/Search'], resolve)

const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/links',
        component: Link
    },
    {
        path: '/link',
        component: Link
    },
    {
        path: '/link/apply',
        component: LinkApply
    },
    {
        path: '/admin/applies',
        component: AdminLinkApply
    },
    {
        path: '/search',
        component: Search
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
