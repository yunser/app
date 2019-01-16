<template>
    <tool-page title="应用">
        <h2 class="big-title" v-if="recentUseTools.length">最近使用</h2>
        <ui-tool-list :data="recentUseTools" :onRemove="onRemove" v-if="recentUseTools.length"></ui-tool-list>

        <h2 class="big-title">推荐</h2>
        <ui-tool-list :data="recommendTools"></ui-tool-list>

        <h2 class="big-title">系统</h2>
        <ui-tool-list :data="moreTools"></ui-tool-list>
        <!--<div class="my-container">-->
            <!---->
        <!--</div>-->
        <div class="link-box">友情链接：<a href="https://www.toolfk.com/lang-zh-CN" target="_blank">在线工具箱</a></div>
        <div><router-link to="/link/apply">申请友链</router-link></div>
    </tool-page>
</template>

<script>
    import {recommendTools, moreTools} from '@/data/data'
    import recent from '@/util/recent'

    export default {
        data () {
            return {
                moreTools: moreTools,
                recommendTools: recommendTools,
                recentUseTools: [],
                keyword: '',
                resultTools: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.recentUseTools = recent.getAll()
            },
            onRemove(item) {
                recent.remove(item)
                this.recentUseTools = recent.getAll()
            }
        }
    }
</script>

<style scoped>
    .search-box {
        padding: 16px 0;
        text-align: center;
    }
    .link-box {
        margin-top: 16px;
    }
</style>
