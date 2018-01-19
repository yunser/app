<template>
    <tool-page title="办公工具">
        <h2 class="big-title">办公</h2>
        <ui-tool-list :data="makeTools"></ui-tool-list>

        <h2 class="big-title">文字</h2>
        <ui-tool-list :data="textTools"></ui-tool-list>

        <h2 class="big-title">图片</h2>
        <ui-tool-list :data="imageTools"></ui-tool-list>

        <h2 class="big-title">下载</h2>
        <ui-tool-list :data="otherTools"></ui-tool-list>
    </tool-page>
</template>

<script>
    import {textTools, imageTools, makeTools, otherTools} from '@/data/data'

    export default {
        data () {
            return {
                textTools: textTools,
                imageTools: imageTools,
                makeTools: makeTools,
                otherTools: otherTools
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
</style>
