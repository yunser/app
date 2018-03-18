<template>
    <tool-page title="搜索">
        <div class="search-bar">
            <input class="input" v-model="keyword" placeholder="输入名称、分类快速搜索工具" />
            <ui-icon-button icon="close" color="#999" v-if="keyword.length" @click="keyword = ''" />
        </div>
        <!--<div class="search-box">-->
            <!--<ui-text-field v-model="keyword" hintText="输入名称、分类快速搜索工具"/>-->
        <!--</div>-->
        <div class="search-result" v-if="keyword.length">
            <h2 class="big-title">搜索结果</h2>
            <ui-tool-list :data="resultTools"></ui-tool-list>
            <div v-if="!resultTools.length">
                <p>找不到你想要的工具，你可以：</p>
                <ol class="subject-list">
                    <li>换个关键词试试。</li>
                    <li>在线 <a href="http://link.yunser.com/" target="_blank">定制</a> 属于自己的工具</li>
                    <li>给我们 <a href="http://feedback.yunser.com/" target="_blank">留言</a>。</li>
                </ol>
            </div>
        </div>
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

<style lang="scss" scoped>
    .subject-list {
        padding-left: 16px;
        li {
            margin-bottom: 8px;
            list-style: decimal;
        }
    }
</style>
