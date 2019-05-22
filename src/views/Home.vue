<template>
    <tool-page title="应用">
        <div class="common-container container-home">
            <h2 class="big-title" v-if="recentUseTools.length">最近使用</h2>
            <ui-tool-list :data="recentUseTools" :onRemove="onRemove" v-if="recentUseTools.length"></ui-tool-list>

            <h2 class="big-title">推荐</h2>
            <ui-tool-list :data="recommendTools"></ui-tool-list>

            <h2 class="big-title">系统</h2>
            <ui-tool-list :data="moreTools"></ui-tool-list>

            <h2 class="big-title">其他</h2>
            <ui-tool-list :data="otherTools"></ui-tool-list>
            <!--<div class="my-container">-->
                <!---->
            <!--</div>-->
            <div class="link-box">友情链接：<a href="https://www.toolfk.com/lang-zh-CN" target="_blank">在线工具箱</a></div>
            <div><router-link to="/link/apply">申请友链</router-link></div>
        </div>
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
                resultTools: [],
                otherTools: [
                    {
                        href: 'https://www.yunser.com/',
                        icon: '/static/img/build.svg',
                        name: '云设',
                        description: '',
                    },
                    {
                        href: 'https://about.yunser.com/',
                        icon: 'https://about.yunser.com/static/img/about.svg',
                        name: '关于',
                        description: '',
                    },
                    {
                        href: 'https://donation.yunser.com/',
                        icon: 'https://donation.yunser.com/static/img/donate.svg',
                        name: '捐赠',
                        description: '',
                    },
                    {
                        href: 'https://feedback.yunser.com/',
                        icon: '/static/img/feedback.svg',
                        name: '意见反馈',
                        description: '对云设工具有什么意见，在这里留言',
                    },
                    {
                        href: 'https://open.yunser.com/',
                        icon: '/static/img/build.svg',
                        name: '开放平台',
                        description: '',
                    },
                    {
                        href: 'https://lab.yunser.com/',
                        icon: 'https://lab.yunser.com/static/img/edu.svg',
                        name: '实验室',
                        description: '',
                    },
                    {
                        href: 'https://wallpaper.yunser.com/',
                        icon: '/static/img2/wallpaper.svg',
                        name: '壁纸',
                        description: '',
                        tags: ['生活']
                    },
                ]
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
    .container-home {
        width: 1000px;
    }
    .search-box {
        padding: 16px 0;
        text-align: center;
    }
    .link-box {
        margin-top: 16px;
    }
</style>
