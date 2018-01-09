<template>
    <footer class="layout-footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-6"></div>
                <div class="col-sm-6"></div>
            </div>

            <div class="logo-box">
                <img src="/static/img/logo_64.png" alt="云设工具">
            </div>
            <div class="info">
                <ul class="meta-list">
                    <li class="meta-item">
                        <router-link to="/about">关于我们</router-link>
                    </li>
                    <li class="meta-item">
                        <router-link to="/about">联系我们</router-link>
                    <li class="meta-item">
                        <router-link to="/friend">友情链接</router-link>
                    </li>
                </ul>

                <!--<style type="text/css">-->
                    <!--.share_weixin{position:fixed;top:100px;left:50%;margin-left:-121px;padding:10px 20px;width:200px;border:1px solid #d9d9d9;background:#fff;text-align:center}-->
                    <!--.share_weixin .qrcode{margin:10px 0}-->
                    <!--.popup_close{position:absolute;top:5px;right:10px;display:block;width:20px;height:20px;font-size:20px}-->
                    <!--.full_screen_bg{position:fixed;top:0;right:0;bottom:0;left:0;background:#f1f1f1;background:rgba(0,0,0,0.39)}-->
                <!--</style>-->

                <!--<script>-->
                    <!--window._bd_share_config = {-->
                        <!--"common": {-->
                            <!--"bdSnsKey": {-->
                                <!--"tsina": "1250085586",-->
                                <!--"tqq": "Vk8EikNNx5myYfSX"-->
                            <!--},-->
                            <!--"bdText": "123", // 分享文案-->
                            <!--"bdMini": "2", // 分享图片-->
                            <!--"bdMiniList": false,-->
                            <!--"bdPic": "",-->
                            <!--"bdStyle": "1",-->
                            <!--"bdSize": "24"-->
                        <!--},-->
                        <!--"share": {},-->
                        <!--//"image": {"viewList": ["tsina", "tqq", "qzone", "renren"], "viewText": "分享云设工具到：", "viewSize": "16"}-->
                    <!--};-->
                    <!--with (document)0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=86835285.js?cdnversion=' + ~(-new Date() / 36e5)];-->
                    <!--//自动提交-->
                    <!--// (function(){-->
                    <!--//     var bp = document.createElement('script');-->
                    <!--//     bp.src = '//push.zhanzhang.baidu.com/push.js';-->
                    <!--//     var s = document.getElementsByTagName("script")[0];-->
                    <!--//     s.parentNode.insertBefore(bp, s);-->
                    <!--// })();-->
                <!--</script>-->
                <!-- 版权信息 -->
                <div class="copyright">© 2016-2018 <a href="https://yunser.com/" target="_blank">云设</a></div>
            </div>

            <!-- 百度分享 -->
            <div class="span five bdsharebuttonbox">
                <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
                <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
                <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
                <a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a>
                <a href="#" class="bds_douban" data-cmd="douban" title="分享到豆瓣网"></a>
                <a href="#" class="bds_bdhome" data-cmd="bdhome" title="分享到百度新首页"></a>
                <a href="#" class="bds_tieba" data-cmd="tieba" title="分享到百度贴吧"></a>
                <a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a>
                <!--<a href="#" class="bds_more" data-cmd="more"></a>-->
                <a class="bds_count" data-cmd="count"></a>
            </div>
        </div>
    </footer>
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
