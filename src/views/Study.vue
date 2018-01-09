<template>
    <ui-page name="home">
        <div class="container">
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
        </div>
    </ui-page>
</template>

<script>
    import mathTools from '@/data/math'
    import {historyTools, chemistryTools, chineseTools, studOtherTools} from '@/data/data'

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
            this.$http.get('/version').then(
                response => {
                    let data = response.data
                    if (data.code === 200) {
                        console.log(data)
                        this.version = data.data
                    }
                },
                response => {
                    console.log(response)
                })
//            this.$http.post('/example', this.$qs.stringify({
//                param1: 'value1',
//                param2: 'value2'
//            })).then(
//                response => {
//                    let data = response.data
//                    if (data.code === 200) {
//                        console.log(data.data)
//                    }
//                },
//                response => {
//                    console.log(response)
//                })
        }
    }
</script>

<style scoped>
</style>
