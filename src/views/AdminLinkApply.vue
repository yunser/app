<template>
    <tool-page title="友链申请">
        <ui-article>
            <table>
                <tr>
                    <th>网站链接</th>
                    <th>网站文本</th>
                    <th>IP</th>
                    <th>申请时间</th>
                    <th>邮箱</th>
                    <th>备注</th>
                </tr>
                <tr v-for="item in data">
                    <td>{{ item.url }}</td>
                    <td>{{ item.text }}</td>
                    <td>{{ item.ip }}</td>
                    <td>{{ item.createTime | time }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.note }}</td>
                </tr>
            </table>
        </ui-article>
    </tool-page>
</template>

<script>
    /* eslint-disable */
    const moment = window.moment

    export default {
        data () {
            return {
                data: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.$http.get('/cms/link_applies').then(
                    response => {
                        let data = response.data
                        this.data = data
                    },
                    response => {
                        console.log(response)
                    })
            }
        },
        filters: {
            time(value) {
                return moment(value).format('YYYY-MM-DD HH:mm')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .article {
        background-color: #fff;
        padding: 16px;
    }
</style>
