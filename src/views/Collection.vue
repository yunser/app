<template>
    <tool-page title="收藏">
        <h2 class="big-title">我的收藏</h2>
        <ui-tool-list :data="collections" :onRemove="onRemove"></ui-tool-list>
        <div v-if="!collections.length">
            <p>暂无收藏</p>
            <p>你可以把喜欢的工具收藏到这里</p>
        </div>
    </tool-page>
</template>

<script>
    import collection from '@/util/collection'

    export default {
        data () {
            return {
                collections: []
            }
        },
        mounted() {
            this.collections = collection.getAll()
        },
        methods: {
            onRemove(item) {
                collection.remove(item)
                this.collections = collection.getAll()
            }
        }
    }
</script>

<style scoped>
</style>
