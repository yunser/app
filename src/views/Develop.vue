<template>
    <tool-page title="开发工具">
        <h2 class="big-title">开发</h2>
        <ui-tool-list :data="devTools"></ui-tool-list>

        <h2 class="big-title">网络</h2>
        <ui-tool-list :data="networkTools"></ui-tool-list>

        <h2 class="big-title">代码</h2>
        <ui-tool-list :data="codeTools"></ui-tool-list>

        <h2 class="big-title">前端</h2>
        <ui-tool-list :data="frontEndTools"></ui-tool-list>

        <h2 class="big-title">编码解码</h2>
        <ui-tool-list :data="encodeTools"></ui-tool-list>

        <h2 class="big-title">颜色</h2>
        <ui-tool-list :data="colorTools"></ui-tool-list>

        <h2 class="big-title">浏览器插件</h2>
        <ul class="tool-list">
            <li class="list-item">
                <a href="http://tool2.yunser.com/plugin/qrcode" target="_blank">
                    <img class="img" src="/static/img/app-qrcode.png">
                    <div class="info">
                        <h3 class="text">二维码生成</h3>
                        <div class="desc">支持多种配置</div>
                    </div>
                </a>
            </li>
            <li class="list-item">
                <a href="http://tool2.yunser.com/plugin/api" target="_blank">
                    <img class="img" src="/static/img/app-api.png">
                    <div class="info">
                        <h3 class="text">接口测试插件</h3>
                        <div class="desc"></div>
                    </div>
                </a>
            </li>
        </ul>
    </tool-page>
</template>

<script>
    import {devTools, networkTools, codeTools, frontEndTools, encodeTools, colorTools} from '@/data/data'

    export default {
        data () {
            return {
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
