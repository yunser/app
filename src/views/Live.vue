<template>
    <ui-page name="home">
        <div class="container">
            <h2 class="big-title">便民工具</h2>
            <ui-tool-list :data="liveTools"></ui-tool-list>

            <h2 class="big-title">便民工具 - 时间相关</h2>
            <ui-tool-list :data="timeTools"></ui-tool-list>

            <h2 class="big-title">便民工具 - 健康相关</h2>
            <ui-tool-list :data="healthTools"></ui-tool-list>

            <h2 class="big-title">便民工具 - 理财相关</h2>
            <ui-tool-list :data="moneyTools"></ui-tool-list>
        </div>
    </ui-page>
</template>

<script>
    import {liveTools, timeTools, healthTools, moneyTools} from '@/data/data'

    export default {
        data () {
            return {
                liveTools: liveTools,
                timeTools: timeTools,
                healthTools: healthTools,
                moneyTools: moneyTools,
                version: ''
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
