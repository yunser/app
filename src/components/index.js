import header from './header'
import footer from './footer'
import page from './page'

export default {
    install: function (Vue) {
        Vue.component('ui-header', header)
        Vue.component('ui-footer', footer)
        Vue.component('ui-page', page)
    }
}
