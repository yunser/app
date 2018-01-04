<template>
    <ui-page name="home">
        <div class="container">
            <h2 class="big-title">实验室</h2>
            <p>这里的工具处于开发阶段、功能什么时候可以用取决于站长的心情。</p>
            <h2 class="big-title">办公</h2>
            <ul class="tool-list">
                <li class="list-item">
                    <a href="/docs">
                        <img class="img" src="/static/img/app-doc.png">
                        <div class="info">
                            <h3 class="text">文档</h3>
                            <div class="desc"></div>
                        </div>
                    </a>
                </li>
                <li class="list-item">
                    <a href="http://tool2.yunser.com/tables">
                        <img class="img" src="/static/img/app-table.png">
                        <div class="info">
                            <h3 class="text">表格</h3>
                            <div class="desc"></div>
                        </div>
                    </a>
                </li>
                <li class="list-item">
                    <a href="http://tool2.yunser.com/slides">
                        <img class="img" src="/static/img/app-slides.png">
                        <div class="info">
                            <h3 class="text">PPT在线制作</h3>
                            <div class="desc"></div>
                        </div>
                    </a>
                </li>
                <li class="list-item">
                    <a href="http://tool2.yunser.com/markdown">
                        <img class="img" src="/static/img/app-tool.png">
                        <div class="info">
                            <h3 class="text">Markdown编辑器</h3>
                            <div class="desc"></div>
                        </div>
                    </a>
                </li>
                <li class="list-item">
                    <a href="http://tool2.yunser.com/ace">
                        <img class="img" src="/static/img/app-tool.png">
                        <div class="info">
                            <h3 class="text">Markdown编辑器</h3>
                            <div class="desc">（ACE版）</div>
                        </div>
                    </a>
                </li>
                <li class="list-item">
                    <a href="http://tool2.yunser.com/gif">
                        <img class="img" src="/static/img/app-tool.png">
                        <div class="info">
                            <h3 class="text">gif</h3>
                            <div class="desc"></div>
                        </div>
                    </a>
                </li>
                <li class="list-item">
                    <a href="http://tool2.yunser.com/chart">
                        <img class="img" src="/static/img/app-tool.png">
                        <div class="info">
                            <h3 class="text">chart</h3>
                            <div class="desc"></div>
                        </div>
                    </a>
                </li>
                <li class="list-item">
                    <a href="http://tool2.yunser.com/jtopo">
                        <img class="img" src="/static/img/app-tool.png">
                        <div class="info">
                            <h3 class="text">jtopo</h3>
                            <div class="desc"></div>
                        </div>
                    </a>
                </li>
                <li class="list-item">
                    <a href="http://tool2.yunser.com/resume">
                        <img class="img" src="/static/img/app-tool.png">
                        <div class="info">
                            <h3 class="text">简历制作平台</h3>
                            <div class="desc"></div>
                        </div>
                    </a>
                </li>
                <li class="list-item">
                    <a href="http://tool2.yunser.com/topo">
                        <img class="img" src="/static/img/app-tool.png">
                        <div class="info">
                            <h3 class="text">拓扑图制作</h3>
                            <div class="desc"></div>
                        </div>
                    </a>
                </li>
                <li class="list-item">
                    <a href="http://tool2.yunser.com/topo">
                        <img class="img" src="/static/img/app-tool.png">
                        <div class="info">
                            <h3 class="text">图表制作</h3>
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
