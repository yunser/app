<template>
    <tool-page title="应用">
        <div class="common-container container-home">
            <img class="festival" src="/static/festival/duanwu.jpg" @click="hello" v-if="isDuanwu">
            <!-- <a href="#">
            </a> -->
            <app-list :data="groups" />

            <!-- <h2 class="big-title" v-if="recentUseTools.length">最近使用</h2>
            <ui-tool-list :data="recentUseTools" :onRemove="onRemove" v-if="recentUseTools.length"></ui-tool-list> -->

            <!-- <h2 class="big-title">推荐</h2>
            <ui-tool-list :data="recommendTools"></ui-tool-list> -->

            <!-- <h2 class="big-title">系统</h2>
            <ui-tool-list :data="moreTools"></ui-tool-list> -->

            <!-- <h2 class="big-title">其他</h2>
            <ui-tool-list :data="otherTools"></ui-tool-list> -->
            <!--<div class="my-container">-->
                <!---->
            <!--</div>-->
            <!-- <div class="link-box">友情链接：<a href="https://www.toolfk.com/lang-zh-CN" target="_blank">在线工具箱</a></div> -->
        </div>
    </tool-page>
</template>

<script>
    export default {
        data () {
            return {
                isDuanwu: false,
                groups: [
                    // {
                    //     name: '推荐',
                    //     apps: [
                    //         {
                    //             icon: 'https://icons.yunser.com/icons/nicetool.svg',
                    //             name: '好工具',
                    //             description: '在线工具大全',
                    //             to: 'xxx',
                    //             href: 'http://www.nicetool.net?from=yunser',
                    //             target: '_blank',
                    //             tags: ['生活']
                    //         },
                    //     ]
                    // },
                    {
                        name: '分类',
                        apps: [
                            {
                                href: 'https://work.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/work.png',
                                name: '办公',
                                description: '',
                                tags: ['生活']
                            },
                            {
                                href: 'https://life.yunser.com/',
                                target: '_blank',
                                to: 'xxx',
                                icon: 'https://icons.yunser.com/icons/life.png',
                                name: '生活',
                                description: '',
                                tags: ['生活']
                            },
                            {
                                to: 'xxx',
                                href: 'https://edu.yunser.com/',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/edu.svg',
                                name: '学习',
                                description: '',
                                tags: ['生活']
                            },
                            {
                                to: 'xxx',
                                href: 'https://dev.yunser.com/',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/dev.png',
                                name: '开发',
                                description: '',
                                tags: ['生活']
                            },
                            {
                                to: 'xxx',
                                href: 'https://me.yunser.com/',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/contacts.svg',
                                name: '个人助理',
                                description: '',
                                tags: ['生活']
                            },
                        ]
                    },
                    {
                        name: '内容',
                        apps: [

                            {
                                href: 'https://blog.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/blog.svg',
                                name: '博客',
                                description: '',
                                tags: ['生活']
                            },
                            {
                                href: 'https://news.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/news.svg',
                                name: '资讯',
                                description: '',
                                tags: ['生活']
                            },
                            {
                                href: 'https://ask.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/ask.svg',
                                name: '问答',
                                description: '',
                                tags: ['生活']
                            },
                            {
                                href: 'https://hub.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/hub.svg',
                                name: '社区',
                                description: '',
                            },
                            {
                                href: 'https://group.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/team.svg',
                                name: '小组',
                                description: '',
                            },
                            {
                                href: 'https://home.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/home-page.png',
                                name: '主页',
                                description: '',
                            },
                        ]
                    },
                    {
                        name: '其他',
                        apps: [
                            {
                                href: 'https://wiki.yunser.com/',
                                to: 'xxx',
                                target: '_blank',
                                icon: 'https://icons.yunser.com/icons/wiki.svg',
                                name: '百科',
                                description: '',
                                tags: ['生活']
                            },
                        ]
                    }
                ],
                keyword: '',
            }
        },
        mounted() {
            this.init()
            let today = new Date()
            console.log('today', today.getMonth(), today.getDate())
            this.isDuanwu = (today.getMonth() + 1) === 6 && today.getDate() === 7
        },
        methods: {
            init() {
            },
            hello() {
                this.$message({
                    type: 'info',
                    text: '端午节快乐！'
                })
            }
        }
    }
</script>

<style scoped>
    .festival {
        display: block;
        max-width: 160px;
        margin: 0 auto;
    }
    .container-home {
        /* max-width: 960px; */
        /* width: 1000px; */
    }
    .search-box {
        padding: 16px 0;
        text-align: center;
    }
    .link-box {
        margin-top: 16px;
    }
</style>
