<template>
    <div class="tool-list">
        <ui-paper class="list-item" v-for="item in data" :key="item.id" :zDepth="1">
            <a class="link" :href="item.href" target="_blank" @click="addToRecent(item)">
                <img class="img" :src="item.icon">
                <div class="info">
                    <h3 class="text">{{ item.name }}</h3>
                    <div class="desc">{{ item.description }}</div>
                </div>
                <i class="icon" :class="classes" @click.prevent="collection(item)"></i>
                <i class="icon icon-close" @click.prevent="removeCollection(item)" v-if="removeable"></i>
            </a>
        </ui-paper>
    </div>
</template>

<script>
    import recent from '@/util/recent'

    export default {
        data() {
            return {
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
        },
        methods: {
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
