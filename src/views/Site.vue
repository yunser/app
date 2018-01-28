<template>
    <tool-page title="站外工具">
        <h2 class="big-title">未分类</h2>
        <ui-tool-list :data="siteTools"></ui-tool-list>
    </tool-page>
</template>

<script>
    import {siteTools} from '@/data/data'

    export default {
        data () {
            return {
                siteTools: siteTools
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
</style>
