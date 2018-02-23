<template>
    <tool-page title="云设工具">
        <div class="search-box">
            <ui-text-field v-model="keyword" hintText="输入名称、分类快速搜索工具"/>
        </div>
        <div v-if="keyword.length">
            <h2 class="big-title">搜索结果</h2>
            <ui-tool-list :data="resultTools"></ui-tool-list>
            <div v-if="!resultTools.length">
                <p>找不到你想要的工具，换个关键词试试？</p>
            </div>
        </div>

        <h2 class="big-title" v-if="recentUseTools.length">最近使用</h2>
        <ui-tool-list :data="recentUseTools" :onRemove="onRemove" v-if="recentUseTools.length"></ui-tool-list>

        <h2 class="big-title">推荐</h2>
        <ui-tool-list :data="recommendTools"></ui-tool-list>
        <!--<div class="my-container">-->
            <!---->
        <!--</div>-->
    </tool-page>
</template>

<script>
    import {recommendTools, allTools} from '@/data/data'
    import recent from '@/util/recent'

    export default {
        data () {
            return {
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
                    if (tool.name.toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1) {
                        this.resultTools.push(tool)
                    }
                    if (tool.description.toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1) {
                        this.resultTools.push(tool)
                    }
                    if (tool.tags) {
                        for (let tag of tool.tags) {
                            if (this.keyword.toLowerCase().indexOf(tag.toLowerCase()) !== -1) {
                                this.resultTools.push(tool)
                            }
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .search-box {
        padding: 16px 0;
        text-align: center;
    }
</style>
