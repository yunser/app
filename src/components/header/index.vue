<template>
    <div>
        <!--[if lt IE 9]>
        <div>您的浏览器版本<strong>很旧很旧</strong>，为了正常地访问网站，请升级您的浏览器</div>
        <![endif]-->
        <ui-appbar title="云设工具">
            <ui-icon-button icon="menu" slot="left"/>
            <ui-flat-button color="white" label="首页" to="/" slot="right"/>
            <!--<ui-flat-button color="white" label="所有工具" to="/all" slot="right"/>-->
            <ui-flat-button color="white" label="我的收藏" to="/like" slot="right"/>
            <ui-flat-button color="white" label="便民工具" to="/live" slot="right"/>
            <ui-flat-button color="white" label="学习工具" to="/study" slot="right"/>
            <ui-flat-button color="white" label="开发者工具" to="/develop" slot="right"/>
            <ui-flat-button color="white" label="插件" to="/plugin" slot="right"/>
            <ui-flat-button color="#777" label="实验室" to="/lab" slot="right"/>
            <ui-flat-button color="white" label="关于" to="/about" slot="right"/>
        </ui-appbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>
