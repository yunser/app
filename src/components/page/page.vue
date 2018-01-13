<template>
    <ui-page :title="title || page.title" ref="page">
        <div slot="drawer">
            <ui-appbar title=""></ui-appbar>
            <ui-list @itemClick="toggle()">
                <ui-list-item title="首页" to="/"/>
                <!--<ui-list-item title="所有工具" to="/all" />-->
                <ui-list-item title="我的收藏" to="/like" />
                <ui-list-item title="便民工具" to="/live" />
                <ui-list-item title="学习工具" to="/study" />
                <ui-list-item title="开发者工具" to="/develop" />
                <!--<ui-list-item title="实验室" to="/lab" />-->
                <ui-list-item title="关于" to="/about" />
            </ui-list>
        </div>
        <slot></slot>
        <ui-footer></ui-footer>
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
            backable: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
        },
        methods: {
            toggle() {
                console.log(this.$refs.page)
                this.$refs.page.hideDrawerIfMobile()
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
