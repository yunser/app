<template>
    <ui-page :title="title || page.title" :page="page" :backable="backable" ref="page" :containerMaxWidth="containerMaxWidth">
        <div slot="drawer">
            <ui-appbar class="side-appbar" title="">
            </ui-appbar>
            <!--<ui-appbar class="side-appbar" title="云设工具">-->
                <!--<ui-icon value="build" slot="left" />-->
            <!--</ui-appbar>-->
            <ui-list @itemClick="toggle()">
                <ui-list-item title="首页" to="/">
                    <ui-icon value="home" slot="left" />
                </ui-list-item>
                <ui-list-item title="办公" to="/work">
                    <ui-icon class="ic" value="folder" slot="left" />
                </ui-list-item>
                <ui-list-item title="便民" to="/live">
                    <ui-icon class="ic" value="folder" slot="left" />
                </ui-list-item>
                <ui-list-item title="学习" to="/study">
                    <ui-icon class="ic" value="folder" slot="left" />
                </ui-list-item>
                <ui-list-item title="开发" to="/develop">
                    <ui-icon class="ic" value="folder" slot="left" />
                </ui-list-item>
                <ui-list-item title="站外" to="/site">
                    <ui-icon class="ic" value="folder" slot="left" />
                </ui-list-item>
                <!--<ui-list-item title="实验室" to="/lab" />-->
            </ui-list>
            <ui-list class="ui-position-bottom" @itemClick="toggle()">
                <ui-list-item title="友情链接" to="/links">
                    <ui-icon value="link" slot="left" />
                </ui-list-item>
                <ui-list-item title="关于" to="/about">
                    <ui-icon value="info" slot="left" />
                </ui-list-item>
            </ui-list>
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
                            {
                                type: 'icon',
                                icon: 'search',
                                to: '/search'
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
</style>
