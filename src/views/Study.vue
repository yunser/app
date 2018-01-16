<template>
    <tool-page title="学习工具">
        <h2 class="big-title">数学</h2>
        <ui-tool-list :data="mathTools"></ui-tool-list>
        <h2 class="big-title">历史</h2>
        <ui-tool-list :data="historyTools"></ui-tool-list>
        <h2 class="big-title">化学</h2>
        <ui-tool-list :data="chemistryTools"></ui-tool-list>
        <h2 class="big-title">语文</h2>
        <ui-tool-list :data="chineseTools"></ui-tool-list>
        <h2 class="big-title">其他</h2>
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
