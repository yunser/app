<template>
    <ui-page name="home">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="article-box">
                        <article class="article">
                            <h2>关于</h2>
                            <p><a href="http://tool.yunser.com">云设工具</a>是一个在线工具网站。</p>
                            <p>平时工作、生活或学习中，有时会用到一些小工具。最好无需安装，用完即走。正好我也是也是学编程的，平时学习一些新的框架或库，需要做一些demo练手。于是我做了这个网站，把常用的工具放到网站上，既方便了自己，也方便了网友。后来，应网友的要求，又添加了一些生活小工具。</p>
                            <p>既然做了，那就干脆把这个网站做好。我给网站定了几个目标：</p>
                            <ul>
                                <li>功能尽可能齐全，涵盖生活、学习等各个方面。</li>
                                <li>界面美观、简洁易用，能提高效率。</li>
                                <li>逐步把网站相关功能代码开源出去。</li>
                            </ul>
                            <p>我会尽可能把常用的一些工具全部集成到这个网站上，省得大家需要某些工具时到处找，浪费时间。希望大家能给我提出宝贵意见。</p>
                            <p>如果大家觉得这个工具站好用的话，可以添加到收藏夹，或推荐给身边的朋友，谢谢大家。</p>

                            <h2>联系我们</h2>
                            <p>官方邮箱：admin@yunser.com</p>
                            <p>站长 QQ：1418503647</p>
                            <p>官方 QQ 交流群：642481431（粉丝交流、源码分享）</p>

                            <h2>意见及建议</h2>
                            <p>有什么意见或建议，可以在下面留言，或进群讨论。</p>

                            <h2>更新日志</h2>
                            <table class="table table-bordered">
                                <tr>
                                    <th width="100">版本</th>
                                    <th width="100">时间</th>
                                    <th>内容</th>
                                </tr>
                                <tr>
                                    <td>v17.5.4</td>
                                    <td>2017-06-13</td>
                                    <td>

                                        <ul>
                                            <li>增加工具若干。</li>
                                            <li>部分工具手机端浏览优化。</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>v17.5.3</td>
                                    <td>2017-05-22</td>
                                    <td>
                                        <ul>
                                            <li>增加工具若干。</li>
                                            <li>部分工具手机端浏览优化。</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>v17.5.2</td>
                                    <td>2017-05-22</td>
                                    <td>新增特殊字符搜索、文件MD5查询功能。</td>
                                </tr>
                                <tr>
                                    <td>v17.5.1</td>
                                    <td>2017-05-21</td>
                                    <td>新增单位转换、颜文字等 10 个小工具。</td>
                                </tr>

                                <tr>
                                    <td>v17.4.5</td>
                                    <td>2017-05-03</td>
                                    <td>
                                        <ul>
                                            <li>修复画板工具某些bug。</li>
                                            <li>修复二维码工具某些bug。</li>
                                        </ul>
                                    </td>
                                </tr>

                                <tr>
                                    <td>...</td>
                                    <td>...</td>
                                    <td>...</td>
                                </tr>
                            </table>
                        </article>
                    </div>
                </div>
            </div>

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
