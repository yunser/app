import header from './header'
import footer from './footer'
import page from './page'
import toolList from './tool-list'

export default {
    install: function (Vue) {
        Vue.component('ui-header', header)
        Vue.component('ui-footer', footer)
        Vue.component('ui-page', page)
        Vue.component('ui-tool-list', toolList)
    }
}
