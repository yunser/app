<template>
    <tool-page title="便民工具">
        <h2 class="big-title">便民</h2>
        <ui-tool-list :data="liveTools"></ui-tool-list>

        <h2 class="big-title">理财</h2>
        <ui-tool-list :data="moneyTools"></ui-tool-list>
    </tool-page>
</template>

<script>
    import {liveTools, entTools, timeTools, healthTools, moneyTools, queryTools} from '@/data/data'

    export default {
        data () {
            return {
                liveTools: liveTools,
                entTools: entTools,
                timeTools: timeTools,
                healthTools: healthTools,
                moneyTools: moneyTools,
                queryTools: queryTools
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
</style>
