<template>
    <ui-page :title="title || page.title" ref="page" :containerMaxWidth="containerMaxWidth">
        <div slot="drawer">
            <ui-appbar title=""></ui-appbar>
            <ui-list @itemClick="toggle()">
                <ui-list-item title="首页" to="/">
                    <ui-icon value="home" slot="left" />
                </ui-list-item>
                <!--<ui-list-item title="所有工具" to="/all" />-->
                <ui-list-item title="我的收藏" to="/like">
                    <ui-icon value="star" slot="left" />
                </ui-list-item>
                <ui-divider />
                <ui-list-item title="办公工具" to="/work">
                    <ui-icon class="ic" value="folder" slot="left" />
                </ui-list-item>
                <ui-list-item title="便民工具" to="/live">
                    <ui-icon class="ic" value="folder" slot="left" />
                </ui-list-item>
                <ui-list-item title="学习工具" to="/study">
                    <ui-icon class="ic" value="folder" slot="left" />
                </ui-list-item>
                <ui-list-item title="开发工具" to="/develop">
                    <ui-icon class="ic" value="folder" slot="left" />
                </ui-list-item>
                <ui-list-item title="站外工具" to="/site">
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
                        title: '云设'
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
