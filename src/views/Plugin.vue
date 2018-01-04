<template>
    <ui-page name="home">
        <div class="container">
            <h2 class="big-title">浏览器插件</h2>
            <ul class="tool-list">
                <li class="list-item">
                    <a href="http://tool2.yunser.com/plugin/qrcode">
                        <img class="img" src="/static/img/app-qrcode.png">
                        <div class="info">
                            <h3 class="text">二维码生成</h3>
                            <div class="desc">支持多种配置</div>
                        </div>
                    </a>
                </li>
                <li class="list-item">
                    <a href="http://tool2.yunser.com/plugin/api">
                        <img class="img" src="/static/img/app-api.png">
                        <div class="info">
                            <h3 class="text">接口测试插件</h3>
                            <div class="desc"></div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </ui-page>
</template>

<script>
    export default {
        data () {
            return {
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
