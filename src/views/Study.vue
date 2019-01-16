<template>
    <tool-page title="学习工具">
        <ui-tool-list type="2"></ui-tool-list>
    </tool-page>
</template>

<script>
    import {mathTools, historyTools, chemistryTools, chineseTools, studOtherTools, englishTools} from '@/data/data'

    export default {
        data () {
            return {
                englishTools: englishTools,
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
