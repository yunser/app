<template>
    <div class="page page-home" :class="'page-' + name">
        <ui-header :title="page.title"></ui-header>
        <main class="page-body">
            <slot></slot>
        </main>
        <div>
            <div class="container">
                <!-- 友情链接 -->
                <section class="link-box">
                    <h3 class="link-title">友情链接：</h3>
                    <ul class="link-list">
                        <li class="link-item"><a href="http://123.yunser.com" target="_blank">云设导航</a> </li>
                        <!--<li class="link-item"><a href="http://miduapp.cn" target="_blank">鲸鱼书单</a> </li>-->
                        <li class="link-item"><a href="http://map.yunser.com" target="_blank">云设地图</a> </li>
                    </ul>
                </section>
            </div>
        </div>
        <ui-footer></ui-footer>
    </div>
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
                default: {
                    title: '云设'
                }
            },
            name: {
                type: String,
                default: ''
            },
            backable: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
        },
        methods: {
            toggle(flag) {
                this.open = !this.open
                this.docked = !flag
            }
        }
    }
</script>

<style lang="scss" scoped>

    .ui-page {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .page-body {
        min-height: 500px;
    }
    .admin-container {
        padding: 16px;
    }
</style>
