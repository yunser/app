<template>
    <ul class="tool-list">
        <li class="list-item" v-for="item in data">
            <a class="link" :href="item.href" target="_blank" @click="addToRecent(item)">
                <img class="img" :src="item.icon">
                <div class="info">
                    <h3 class="text">{{ item.name }}</h3>
                    <div class="desc">{{ item.description }}</div>
                </div>
                <i class="icon" :class="classes" @click.prevent="collection(item)"></i>
                <i class="icon icon-close" @click.prevent="removeCollection(item)"></i>
            </a>
        </li>
    </ul>
</template>

<script>
    import collection from '@/util/collection'
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
            }
        },
        mounted() {
        },
        methods: {
            addToRecent(item) {
                recent.add(item)
            },
            collection(item) {
                collection.add(item)
            },
            removeCollection(item) {
                console.log(this.onRemove)
                this.onRemove && this.onRemove(item)
            }
        }
    }
</script>
