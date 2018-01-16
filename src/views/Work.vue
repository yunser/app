<template>
    <tool-page title="学习工具">
        <h2 class="big-title">办公</h2>
        <div>暂无工具</div>

        <h2 class="big-title">在线制作</h2>
        <ui-tool-list :data="makeTools"></ui-tool-list>

        <h2 class="big-title">文字</h2>
        <ui-tool-list :data="textTools"></ui-tool-list>

        <h2 class="big-title">图片</h2>
        <ui-tool-list :data="imageTools"></ui-tool-list>
    </tool-page>
</template>

<script>
    import {textTools, imageTools, makeTools} from '@/data/data'

    export default {
        data () {
            return {
                textTools: textTools,
                imageTools: imageTools,
                makeTools: makeTools
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
</style>
