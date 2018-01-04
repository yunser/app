<template>
    <header class="layout-header navbar navbar-light">
        <div class="container">
            <!--[if lt IE 9]>
            <div>您的浏览器版本<strong>很旧很旧</strong>，为了正常地访问网站，请升级您的浏览器</div>
            <![endif]-->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse"
                        data-target="#navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link class="navbar-brand" to="/"><h1>云设工具</h1></router-link>
            </div>
            <div id="navbar-collapse" class="collapse navbar-collapse">
                <ul class="nav navbar-nav" id="menu-layoutit">
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="/" target="_blank">首页</a>
                    </li> -->
                    <!--<li class="nav-item">-->
                        <!--<a class="nav-link" href="http://app.yunser.com" target="_blank" style="color: #f00;" rel="nofollow">新版</a>-->
                    <!--</li>-->
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">首页</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/live">便民工具</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/study">学习工具</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/develop">开发者工具</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/plugin">插件</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/lab" style="color: #ddd;" rel="nofollow">实验室</router-link>
                    </li>
                </ul>
                <ul class="nav navbar-nav pull-right">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/friend">友情链接</router-link>
                    </li>
                    <!--<li class="nav-item">
                        <a class="nav-link" href="http://yunser.com/8.html" target="_blank">留言</a>
                    </li>-->
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">关于</router-link>
                    </li>
                </ul>

            </div>
        </div>
    </header>
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
