<template>
    <tool-page title="友链申请">
        <div class="common-container container-home">
            <ui-text-field v-model="form.url" label="网站链接" />
            <br>
            <ui-text-field v-model="form.text" label="链接文本" />
            <br>
            <ui-text-field v-model="form.email" label="联系邮箱（可选）" />
            <br>
            <ui-text-field v-model="form.note" multiLine :rows="3" :rowsMax="6" label="备注（可选），比如申请理由、网站权重、联系方式等等" />
            <br>
            <ui-raised-button primary label="申请" @click="apply" />
        </div>
    </tool-page>
</template>

<script>
    /* eslint-disable */
    export default {
        data () {
            return {
                form: {
                    url: '',
                    text: '',
                    emai: '',
                    note: ''
                }
            }
        },
        mounted() {
        },
        methods: {
            apply() {
                if (!this.form.url) {
                    this.$message({
                        type: 'danger',
                        text: '请输入网站链接'
                    })
                    return
                }
                if (!this.form.text) {
                    this.$message({
                        type: 'danger',
                        text: '请输入链接文本'
                    })
                    return
                }
                this.$http.post('/cms/link_applies', {
                    ...this.form
                }).then(
                    response => {
                        let data = response.data
                        this.$message({
                            type: 'success',
                            text: '申请成功'
                        })
                        this.form = {
                            url: '',
                            text: '',
                            emai: '',
                            note: ''
                        }
                    },
                    response => {
                        console.log(response)
                        this.$message({
                            type: 'danger',
                            text: '服务器出错'
                        })
                    })
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
