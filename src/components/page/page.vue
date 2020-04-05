<template>
    <ui-page :title="title || page.title" :page="page" :backable="backable" ref="page" :containerMaxWidth="containerMaxWidth">
        <div slot="drawer">
            <div class="header">
                <img class="logo" src="https://icons.yunser.com/icons/app.svg">
            </div>
            <!--<ui-appbar class="side-appbar" title="云设工具">-->
                <!--<ui-icon value="build" slot="left" />-->
            <!--</ui-appbar>-->
            <ui-list @itemClick="toggle()">
                <ui-list-item title="首页" to="/">
                    <ui-icon value="home" slot="left" />
                </ui-list-item>
                <!-- <ui-list-item title="便民" to="/live">
                    <ui-icon class="ic" value="folder" slot="left" />
                </ui-list-item> -->
                <!-- <ui-list-item title="开发" to="/develop">
                    <ui-icon class="ic" value="folder" slot="left" />
                </ui-list-item> -->
                <!--<ui-list-item title="实验室" to="/lab" />-->
                <ui-list-item title="云设" href="https://www.yunser.com/" target="_blank">
                    <ui-icon value="start" slot="left" />
                </ui-list-item>
                <!-- <ui-list-item title="联系我们" to="/contact">
                    <ui-icon value="info" slot="left" />
                </ui-list-item> -->
                <!-- <ui-list-item title="友情链接" to="/links">
                    <ui-icon value="link" slot="left" />
                </ui-list-item> -->
                <ui-list-item title="帮助" href="https://project.yunser.com/products/c4ac25905cf111e89644ffa213749598" target="_blank">
                    <ui-icon value="help" slot="left" />
                </ui-list-item>
            </ui-list>
            <!-- <ui-list class="ui-position-bottom" @itemClick="toggle()">
            </ui-list> -->
        </div>
        <slot></slot>
    </ui-page>
</template>

<script>
    export default {
        data() {
            return {
                open: false,
                docked: true
            }
        },
        props: {
            page: {
                type: Object,
                default: function () {
                    return {
                        title: '云设',
                        menu: [
                            // {
                            //     type: 'text',
                            //     text: 'NiceTool',
                            //     href: 'http://www.nicetool.net?utm_source=yunser',
                            //     target: '_blank'
                            // },
                            {
                                type: 'icon',
                                icon: 'search',
                                href: 'https://search.yunser.com?utm_source=app',
                                target: '_blank',
                                title: '搜索'
                            }
                        ]
                    }
                }
            },
            title: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: '11'
            },
            containerMaxWidth: {
                type: Number,
                default: 1000
            },
            backable: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
        },
        methods: {
            toggle() {
                this.$refs.page.hideDrawerIfMobile()
            }
        }
    }
</script>

<style lang="scss" scoped>
.ic {
    color: #009688;
}
.header {
    padding: 40px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.logo {
    display: block;
    width: 80px;
    margin: 0 auto;
}
</style>