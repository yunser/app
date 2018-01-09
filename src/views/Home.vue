<template>
    <ui-page name="home">
        <div class="container">
            <!--<input v-model="keyword" placeholder="输入关键词搜索">-->

            <!--<h2 class="big-title">搜索结果</h2>-->

            <h2 class="big-title">推荐工具</h2>
            <ui-tool-list :data="recommendTools"></ui-tool-list>

            <h2 class="big-title">在线制作</h2>
            <ui-tool-list :data="makeTools"></ui-tool-list>

            <h2 class="big-title">便民工具</h2>
            <ui-tool-list :data="liveTools2"></ui-tool-list>

            <h2 class="big-title">便民工具 - 文字工具</h2>
            <ui-tool-list :data="textTools"></ui-tool-list>

            <h2 class="big-title">便民工具 - 图片工具</h2>
            <ui-tool-list :data="imageTools"></ui-tool-list>

            <h2 class="big-title">便民工具 - 查询</h2>
            <ui-tool-list :data="queryTools"></ui-tool-list>

            <h2 class="big-title">未分类</h2>
            <ui-tool-list :data="otherTools"></ui-tool-list>
        </div>
    </ui-page>
</template>

<script>
    import {textTools, imageTools, queryTools, makeTools, otherTools, liveTools2, recommendTools} from '@/data/data'

//    import dark from 'raw-loader!yunser-ui-vue/dist/theme-dark.css'
//    import dark from '!raw-loader!./theme-light.css'
//    import teal from 'raw-loader!yunser-ui-vue/dist/theme-teal.css'

//    console.log('dark')
//    console.log(dark)

    export default {
        data () {
            return {
                textTools: textTools,
                imageTools: imageTools,
                queryTools: queryTools,
                makeTools: makeTools,
                otherTools: otherTools,
                liveTools2: liveTools2,
                recommendTools: recommendTools,
                keyword: '',
                theme: 'light',
                themes: {
//                    dark,
//                    teal
                }
            }
        },
        methods: {
            changeTheme() {
                this.changeTheme2('dark')
            },
            changeTheme2 (theme) {
                this.theme = theme
                const styleEl = this.getThemeStyle()
                styleEl.innerHTML = this.themes[theme] || ''
                console.log(styleEl.innerHTML)
            },
            getThemeStyle () {
                const themeId = 'muse-theme'
                let styleEl = document.getElementById(themeId)
                if (styleEl) return styleEl
                styleEl = document.createElement('style')
                styleEl.setAttribute('asd', 'asd')
                styleEl.id = themeId
                document.body.appendChild(styleEl)
                console.log('添加完成')
                return styleEl
            }
        }
    }
</script>

<style scoped>
</style>
