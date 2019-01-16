<template>
    <div class="container">
        <div v-for="group in data">
            <h2 class="section-title">{{ group.name }}</h2>
            <div class="tool-list">
                <div class="mu-paper list-item mu-paper-round mu-paper-1" 
                    v-for="app in group.apps">
                    <router-link class="link" :to="app.to" :href="app.href" :target="app.target">
                        <img :src="app.icon" class="img">
                        <div class="info">
                            <h3 class="text">{{ app.name }}</h3>
                            <div class="desc">{{ app.desc }}</div>
                        </div>
                        <!-- <i class="icon icon-heart"></i> -->
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
            data: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        mounted() {
        },
        destroyed() {
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
@mixin clearfix {
    &:after {
        clear: both;
        content: '.';
        display: block;
        height: 0;
        line-height: 0;
        overflow: hidden;
    }
}

.container {
    max-width: 840px;
    margin: 0 auto;
}
.section-title {
    font-size: 24px;
    margin: 16px 0;
}
.tool-list {
    max-width: 840px;
    margin: 0 auto;
    @include clearfix;
    .list-item {
        position: relative;
        float: left;
        width: 260px;
        height: 96px;
        padding: 8px;
        margin: 2px 16px 16px 2px;
        background-color: #fff;
        cursor: pointer;
        //border: 1px solid #ccc;
        &:hover {
            background-color: #f9f9f9;
            // box-shadow: 0 3px 10px rgba(0,0,0,.156863), 0 3px 10px rgba(0,0,0,.227451);
            //border-color: #09c;
            .icon {
                display: block;
            }
        }
        &.active {
            border: 1px solid #f00;
        }
    }
    a {
        display: block;
        height: 100%;
        color: #666;
    }
    .img {
        float: left;
        width: 72px;
        height: 72px;
        margin-right: 16px;
        // border: 1px solid #e9e9e9;
        border-radius: 8px;
    }
    .info {
        float: left;
    }
    .text {
        font-size: 18px;
        color: #000;
    }
    .header {
        overflow: hidden;
    }
    .desc {
        max-width: 150px;
        margin-top: 8px;
    }
    .icon-heart {
        display: none;
        position: absolute;
        top: 8px;
        right: 8px;
        &:hover {
            color: #f00;
        }
    }
    .icon-close {
        display: none;
        position: absolute;
        top: 32px;
        right: 8px;
        &:hover {
            color: #f00;
        }
    }
}
@media all and (max-width: 400px){
    .tool-list {
        .list-item {
            width: 100%;
            margin-right: 0;
        }
    }
}
</style>
