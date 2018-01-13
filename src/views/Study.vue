<template>
    <tool-page title="学习工具">
        <h2 class="big-title">数学工具</h2>
        <ui-tool-list :data="mathTools"></ui-tool-list>
        <h2 class="big-title">历史工具</h2>
        <ui-tool-list :data="historyTools"></ui-tool-list>
        <h2 class="big-title">化学工具</h2>
        <ui-tool-list :data="chemistryTools"></ui-tool-list>
        <h2 class="big-title">语文工具</h2>
        <ui-tool-list :data="chineseTools"></ui-tool-list>
        <h2 class="big-title">其他工具</h2>
        <ui-tool-list :data="studOtherTools"></ui-tool-list>
    </tool-page>
</template>

<script>
    import {mathTools, historyTools, chemistryTools, chineseTools, studOtherTools} from '@/data/data'

    export default {
        data () {
            return {
                mathTools: mathTools,
                historyTools: historyTools,
                chemistryTools: chemistryTools,
                chineseTools: chineseTools,
                studOtherTools: studOtherTools
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
</style>
