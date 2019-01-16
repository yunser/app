<template>
    <tool-page title="开发工具">
        <h2 class="big-title">前端</h2>
        <ui-tool-list :data="frontEndTools"></ui-tool-list>
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
