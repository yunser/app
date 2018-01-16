<template>
    <tool-page title="收藏">
        <h2 class="big-title">所有收藏</h2>
        <ui-tool-list :data="collections" :onRemove="onRemove" removeable />
        <div class="collection-empty" v-if="!collections.length">
            <div class="item">
                <div class="img"></div>
                <div class="info">
                    <h3 class="text"></h3>
                    <div class="desc"></div>
                </div>
                <i class="icon icon-heart"></i>
            </div>
            <p>收藏夹是空的</p>
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

<style lang="scss" scoped>
    $emptyColor: #f1f1f1;
    $emptyBorderColor: #dedede;

    .collection-empty {
        margin-top: 80px;
        text-align: center;
        color: #999;
        .item {
            position: relative;
            width: 260px;
            height: 96px;
            margin: 0 auto;
            padding: 8px;
            background-color: #fff;
            border: 1px solid $emptyBorderColor;
            .img {
                float: left;
                width: 72px;
                height: 72px;
                margin-right: 16px;
                background-color: $emptyColor;
                border: 1px solid $emptyBorderColor;
                border-radius: 8px;
            }
            .info {
                float: left;
            }
            .text {
                width: 80px;
                height: 24px;
                margin-bottom: 8px;
                background-color: $emptyColor;
                border: 1px solid $emptyBorderColor;
                border-radius: 4px;
            }
            .desc {
                width: 120px;
                height: 20px;
                background-color: $emptyColor;
                border: 1px solid $emptyBorderColor;
                border-radius: 4px;
            }
            .icon-heart {
                position: absolute;
                top: 8px;
                right: 8px;
                color: #f06868
            }
        }
    }
</style>
