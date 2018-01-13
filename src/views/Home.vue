<template>
    <tool-page title="云设工具">
        <ui-text-field v-model="keyword" hintText="输入关键词搜索"/>
        <div v-if="keyword.length">
            <h2 class="big-title">搜索结果</h2>
            <ui-tool-list :data="resultTools"></ui-tool-list>
            <div v-if="!resultTools.length">
                <p>找不到你想要的工具，换个关键词试试？</p>
            </div>
        </div>

        <h2 class="big-title" v-if="recentUseTools.length">最近使用</h2>
        <ui-tool-list :data="recentUseTools" :onRemove="onRemove" v-if="recentUseTools.length"></ui-tool-list>

        <h2 class="big-title">推荐工具</h2>
        <ui-tool-list :data="recommendTools"></ui-tool-list>

        <h2 class="big-title">在线制作</h2>
        <ui-tool-list :data="makeTools"></ui-tool-list>

        <h2 class="big-title">便民工具</h2>
        <ui-tool-list :data="liveTools2"></ui-tool-list>

        <h2 class="big-title">便民工具 - 文字工具</h2>
        <ui-tool-list :data="textTools"></ui-tool-list>

        <h2 class="big-title">便民工具 - 图片工具</h2>
        <ui-tool-list :data="imageTools"></ui-tool-list>

        <h2 class="big-title">便民工具 - 查询</h2>
        <ui-tool-list :data="queryTools"></ui-tool-list>

        <h2 class="big-title">未分类</h2>
        <ui-tool-list :data="otherTools"></ui-tool-list>
    </tool-page>
</template>

<script>
    import {textTools, imageTools, queryTools, makeTools, otherTools, liveTools2, recommendTools, allTools} from '@/data/data'
    import recent from '@/util/recent'

    export default {
        data () {
            return {
                textTools: textTools,
                imageTools: imageTools,
                queryTools: queryTools,
                makeTools: makeTools,
                otherTools: otherTools,
                liveTools2: liveTools2,
                recommendTools: recommendTools,
                recentUseTools: [],
                keyword: '',
                resultTools: []
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.recentUseTools = recent.getAll()
            },
            onRemove(item) {
                recent.remove(item)
                this.recentUseTools = recent.getAll()
            }
        },
        watch: {
            keyword() {
                if (!this.keyword) {
                    this.resultTools = []
                    return
                }
                this.resultTools = []
                for (let tool of allTools) {
                    if (tool.name.indexOf(this.keyword) !== -1) {
                        this.resultTools.push(tool)
                    }
                }
            }
        }
    }
</script>

<style scoped>
</style>
