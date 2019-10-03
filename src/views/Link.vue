<template>
    <tool-page title="友情链接">
        <div class="common-container">
            <ui-article class="article">
                <h2>友情链接</h2>
                <ul>
                    <li><a href="http://www.nicetool.net/" target="_blank">NiceTool 好工具</a> </li>
                    <li><a href="http://www.yunser.club/" target="_blank">云社</a> </li>
                    <li><a href="http://www.ofmonkey.com/" target="_blank">程序猿在线工具</a> </li>
                    <!--<li><a href="http://123.yunser.com" target="_blank">云设导航</a> </li>-->
                    <!--<li><a href="http://map.yunser.com" target="_blank">云设地图</a> </li>-->
                </ul>

                <h2>友链申请</h2>
                <p>要求：界面整洁、体验较好，能长期维护。</p>
                <div><router-link to="/link/apply">申请友链</router-link></div>
            </ui-article>


        </div>
    </tool-page>
</template>

<style lang="scss" scoped>
    .article {
        background-color: #fff;
        padding: 16px;
    }
</style>
