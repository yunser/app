<template>
    <ui-page name="home">
        <div class="container">
            <h2 class="big-title">数学工具</h2>
            <ui-tool-list :data="mathTools"></ui-tool-list>
            <h2 class="big-title">历史工具</h2>
            <ul class="tool-list">
                <li class="list-item">
                    <a href="http://tool2.yunser.com/history" target="_blank">
                        <img class="img" src="/static/img/app-history.png">
                        <div class="info">
                            <h3 class="text">历史朝代表</h3>
                            <div class="desc"></div>
                        </div>
                    </a>
                </li>
                <li class="list-item">
                    <a href="http://map.yunser.com" target="_blank">
                        <img class="img" src="/static/img/app-map.png">
                        <div class="info">
                            <h3 class="text">云设地图</h3>
                            <div class="desc">为地图爱好者而准备</div>
                        </div>
                    </a>
                </li>
                <!--<li class="list-item">
                    <a href="/history/today">
                        <img class="img" src="/static/img/app-history.jpg">
                        <div class="info">
                            <h3 class="text">历史上的今天</h3>
                            <div class="desc"></div>
                        </div>
                    </a>
                </li>-->
            </ul>
            <h2 class="big-title">化学工具</h2>
            <ul class="tool-list">
                <li class="list-item">
                    <a href="http://tool2.yunser.com/ptable" target="_blank">
                        <img class="img" src="/static/img/app-chemistry.png">
                        <div class="info">
                            <h3 class="text">元素周期表</h3>
                            <div class="desc"></div>
                        </div>
                    </a>
                </li>
            </ul>
            <h2 class="big-title">语文工具</h2>
            <ul class="tool-list">
                <li class="list-item">
                    <a href="http://tool2.yunser.com/pinyin" target="_blank">
                        <img class="img" src="/static/img/app-pinyin.png">
                        <div class="info">
                            <h3 class="text">拼音标调工具</h3>
                            <div class="desc"></div>
                        </div>
                    </a>
                </li>
                <!--<li class="list-item">
                    <a href="/dictionary">
                        <img class="img" src="/static/img/app-word.png">
                        <div class="info">
                            <h3 class="text">中文字典</h3>
                            <div class="desc">功能简单</div>
                        </div>
                    </a>
                </li>-->
            </ul>
            <h2 class="big-title">其他工具</h2>
            <ul class="tool-list">
                <li class="list-item">
                    <a href="http://tool2.yunser.com/draw/chalk" target="_blank">
                        <img class="img" src="/static/img/app-black-board.png">
                        <div class="info">
                            <h3 class="text">在线黑板</h3>
                            <div class="desc"></div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </ui-page>
</template>

<script>
    import mathTools from '@/data/math'

    export default {
        data () {
            return {
                mathTools: mathTools
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
