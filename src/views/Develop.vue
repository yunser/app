<template>
    <ui-page name="home">
        <div class="container">
            <h2 class="big-title">开发工具</h2>
            <ui-tool-list :data="devTools"></ui-tool-list>

            <h2 class="big-title">网络相关</h2>
            <ui-tool-list :data="networkTools"></ui-tool-list>

            <h2 class="big-title">代码工具</h2>
            <ui-tool-list :data="codeTools"></ui-tool-list>

            <h2 class="big-title">前端工具</h2>
            <ui-tool-list :data="frontEndTools"></ui-tool-list>

            <h2 class="big-title">编码解码</h2>
            <ui-tool-list :data="encodeTools"></ui-tool-list>
        </div>
    </ui-page>
</template>

<script>
    import {devTools, networkTools, codeTools, frontEndTools, encodeTools} from '@/data/data'

    export default {
        data () {
            return {
                devTools: devTools,
                networkTools: networkTools,
                codeTools: codeTools,
                frontEndTools: frontEndTools,
                encodeTools: encodeTools
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
</style>
