<template>
    <tool-page title="便民工具">
        <h2 class="big-title">便民工具</h2>
        <ui-tool-list :data="liveTools"></ui-tool-list>

        <h2 class="big-title">便民工具 - 时间相关</h2>
        <ui-tool-list :data="timeTools"></ui-tool-list>

        <h2 class="big-title">便民工具 - 健康相关</h2>
        <ui-tool-list :data="healthTools"></ui-tool-list>

        <h2 class="big-title">便民工具 - 理财相关</h2>
        <ui-tool-list :data="moneyTools"></ui-tool-list>
    </tool-page>
</template>

<script>
    import {liveTools, timeTools, healthTools, moneyTools} from '@/data/data'

    export default {
        data () {
            return {
                liveTools: liveTools,
                timeTools: timeTools,
                healthTools: healthTools,
                moneyTools: moneyTools
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
</style>
