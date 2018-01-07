<template>
    <ul class="tool-list">
        <li class="list-item" v-for="item in data">
            <a :href="item.href" target="_blank">
                <img class="img" :src="item.icon">
                <div class="info">
                    <h3 class="text">{{ item.name }}</h3>
                    <div class="desc">{{ item.description }}</div>
                </div>
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
            data: function () {
                return []
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>
