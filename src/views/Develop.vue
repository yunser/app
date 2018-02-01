<template>
    <tool-page title="开发工具">
        <h2 class="big-title">开发</h2>
        <ui-tool-list :data="devTools"></ui-tool-list>

        <h2 class="big-title">运维</h2>
        <ui-tool-list :data="operationTools"></ui-tool-list>

        <h2 class="big-title">网络</h2>
        <ui-tool-list :data="networkTools"></ui-tool-list>

        <h2 class="big-title">代码</h2>
        <ui-tool-list :data="codeTools"></ui-tool-list>

        <h2 class="big-title">前端</h2>
        <ui-tool-list :data="frontEndTools"></ui-tool-list>

        <h2 class="big-title">编码解码</h2>
        <ui-tool-list :data="encodeTools"></ui-tool-list>

        <h2 class="big-title">颜色</h2>
        <ui-tool-list :data="colorTools"></ui-tool-list>

        <!--<h2 class="big-title">浏览器插件</h2>-->
    </tool-page>
</template>

<script>
    import {devTools, networkTools, codeTools, frontEndTools, encodeTools, colorTools, operationTools} from '@/data/data'

    export default {
        data () {
            return {
                operationTools: operationTools,
                devTools: devTools,
                networkTools: networkTools,
                codeTools: codeTools,
                frontEndTools: frontEndTools,
                encodeTools: encodeTools,
                colorTools: colorTools
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
</style>
