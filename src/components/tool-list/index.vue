<template>
    <div class="tool-list" v-if="displayData">
        <ui-paper class="list-item" v-for="item in displayData" :key="item.id" :zDepth="1">
            <a class="link" :href="item.href || item.url" target="_blank" @click="addToRecent(item)">
                <img class="img" :src="getIcon(item)">
                <div class="info">
                    <h3 class="text">{{ item.name }}</h3>
                    <div class="desc">{{ item.description }}</div>
                </div>
                <!-- <i class="icon" :class="classes" @click.prevent="collection(item)"></i> -->
                <!-- <i class="icon icon-close" @click.prevent="removeCollection(item)" v-if="removeable"></i> -->
            </a>
        </ui-paper>
    </div>
</template>

<script>
    import recent from '@/util/recent'

    export default {
        data() {
            return {
                displayData: []
            }
        },
        computed: {
            classes() {
                return ['icon-heart']
            }
        },
        props: {
            data: {
                type: Array,
                default: function () {
                    return []
                }
            },
            type: {
                type: String,
                require: false
            },
            onRemove: {
                type: Function,
                require: false
            },
            removeable: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            if (this.data.length) {
                this.displayData = this.data
            }
            if (this.type) {
                this.$http.get(`/tools?type=${this.type}`).then(
                    response => {
                        let data = response.data
                        console.log(data)
                        this.displayData = data
                        this.loading = false
                    },
                    response => {
                        console.log('错误')
                        this.error = '没有相关记录!'
                        console.log(response)
                        this.loading = false
                    })
            }
        },
        methods: {
            getIcon(item) {
                if (this.type) {
                    return 'https://img1.yunser.com' + item.icon
                }
                return item.icon
            },
            addToRecent(item) {
                recent.add(item)
            },
            collection(item) {
                console.log(location)
                console.log(item)
                // collection.add(item)
                let icon = location.origin + item.icon
                window.open('http://nav.yunser.com?add=true&title=' + item.name +
                    '&url=' + item.href + '&icon=' + icon)
            },
            removeCollection(item) {
                console.log(this.onRemove)
                this.onRemove && this.onRemove(item)
            }
        }
    }
</script>
