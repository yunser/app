<template>
    <ui-page name="home">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="article-box">
                        <article class="article">
                            <h2>关于</h2>
                            <p><strong>云设工具</strong>是一个在线工具集合网站。我们相信，好的工具，不仅能提高生活的质量，也能提高工作的效率。基于这个理念，我们开发了这个网站。</p>
                            <p>我们提供了平时工作、生活或学习中，会用到的一些小工具。尽量无需安装，无需注册，用完即走。</p>
                            <p>如果大家觉得这个工具站好用的话，可以添加到收藏夹，或推荐给身边的朋友、同事。</p>
                            <p>网站目标：</p>
                            <ul>
                                <li>功能尽可能齐全，涵盖生活、学习等各个方面。</li>
                                <li>界面美观、简洁易用，能提高效率。</li>
                                <li>逐步把网站相关功能代码开源出去。</li>
                            </ul>

                            <!--<h2>帮助</h2>-->
                            <!--<p></p>-->

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

<style lang="scss" scoped>
    .article {
        h2 {
            font-size: 30px;
        }
    }
</style>
