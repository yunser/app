import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const About = resolve => require(['@/views/About'], resolve)
const Friend = resolve => require(['@/views/Friend'], resolve)

const Live = resolve => require(['@/views/Live'], resolve)
const Study = resolve => require(['@/views/Study'], resolve)
const Develop = resolve => require(['@/views/Develop'], resolve)
const Plugin = resolve => require(['@/views/Plugin'], resolve)
const Lab = resolve => require(['@/views/Lab'], resolve)

const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

const APP_NAME = '云设'

let routes = [
    {
        path: '/',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于'
        }
    },
    {
        path: '/friend',
        component: Friend,
        meta: {
            title: '友情链接'
        }
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
        path: '/develop',
        component: Develop
    },
    {
        path: '/plugin',
        component: Plugin
    },
    {
        path: '/lab',
        component: Lab
    },
    {
        path: '/404',
        component: Error404,
        meta: {
            title: '页面找不到了'
        }
    },
    {
        path: '*',
        redirect: '/404'
    }
]

function getTitle(title) {
    if (title) {
        return title
    } else {
        return APP_NAME
    }
}

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

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title) {
        document.title = getTitle(to.meta.title)
    } else {
        document.title = getTitle()
    }
    next()
})

export default router
