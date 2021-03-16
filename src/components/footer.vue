<template>
    <footer :zip-code.sync="zipCode" :class="['foot',{'foot_bg':footerStyle.bg}]">
        <!-- 底部 QRcode 主选项 -->
        <div class="foot_mainInfo">
            <div class="foot_logo">
                    <a href="javascript:void(0)"></a>
            </div>
            <div class="foot_menuList">
                <ul>
                    <li>
                        首頁
                    </li>
                    <li>
                        赛事直播
                        <a href="javascript:void(0)">足球直播</a>
                        <a href="javascript:void(0)">篮球直播</a>
                        <a href="javascript:void(0)">其他直播</a>
                    </li>
                    <li>
                        体育新闻
                        <a href="javascript:void(0)">NBA新闻</a>
                        <a href="javascript:void(0)">CBA新闻</a>
                        <a href="javascript:void(0)">中超新闻</a>
                        <a href="javascript:void(0)">英超新闻</a>
                        <a href="javascript:void(0)">西甲新闻</a>
                        <a href="javascript:void(0)">德甲新闻</a>
                        <a href="javascript:void(0)">意甲新闻</a>
                    </li>
                    <li>
                        赛事数据
                        <a href="javascript:void(0)">篮球数据</a>
                        <a href="javascript:void(0)">足球数据</a>
                        <a href="javascript:void(0)">其他直播</a>
                    </li>
                    <li>
                        体育社区
                        <a href="javascript:void(0)">体育社区数据</a>
                    </li>
                    <li>
                        赛事预测
                        <a href="javascript:void(0)">大神预测红榜</a>
                        <a href="javascript:void(0)">所有预测榜</a>
                    </li>
                </ul>
            </div>
            <div class="foot_qrCode">
                <a href="javascript:void(0)"></a>
            </div>
        </div> <!-- end foot_mainInfo -->
        <!-- 底部 联系我们 -->
        <div class="footer_info">
            <span>{{ footInfo.info }}</span>
            <span>联系我们 ｜ 合作邮箱 ： {{ footInfo.mail }} ｜ QQ客服 ： {{ footInfo.QQ }}</span>
        </div>
    </footer>
</template>

<script>
export default {
   data(){
       return{
            footerStyle:{
                bg:true,
                txt:true
            },
            footInfo:{
                info:'Copyright@ 2017 音速直播 soniclive.cn ALL Right Reserved',
                areaCode:'+86',
                mail:"3217324595@qq.com",
                QQ:'3217324595'
            },
            zipCode:'1111'
       }
   }
}
</script>

<style scoped>
/* ------------------------------
        footer 底部区块
------------------------------ */
.foot_bg{
  border-top:2px solid #d81e2b;
}
footer{
  position:relative;
  width:100%;
  height:290px;
  box-sizing:border-box;
  background-color:#333;
  overflow:hidden;
  z-index:1;
}
/*  底部 logo 主选单  */
footer .foot_mainInfo{
        width:1200px;
        height:170px;
        margin:25px auto 0 auto;
		overflow:hidden;
}
footer .foot_mainInfo .foot_logo{
	float:left;
}
footer .foot_mainInfo .foot_logo a{
	display:block;
	width:188px;
	height:170px;
	background:#fff url('../assets/image/footer_logo.jpg') top center no-repeat;
}
/*  底部 中间主选单  */
footer .foot_mainInfo .foot_menuList{
	float:left;
	width:750px;
	height:170px;
	margin-left:50px;
	border-left:1px solid #767676;
	border-right:1px solid #767676;
}
footer .foot_mainInfo .foot_menuList ul{
	width:650px;
	margin:0 auto;
}
footer .foot_mainInfo .foot_menuList ul li{
	display:block;
	float:left;
	width:106px;
	font-size:16px;
	color:#fff;
	text-align:center;
}
footer .foot_mainInfo .foot_menuList ul li a{
	display:block;
	height:25px;
	line-height:25px;
	font-size:14px;
	text-align:center;
	color:#fff;
	text-decoration: none;
}
footer .foot_mainInfo .foot_menuList ul li a:first-child{
	padding-top:8px;
}
footer .foot_mainInfo .foot_menuList ul li a:hover{
	color:#888787;
}

footer .foot_mainInfo .foot_qrCode{
	float:right;
}
footer .foot_mainInfo .foot_qrCode a{
	display:block;
	width:162px;
	height:164px;
	background:#333 url('../assets/image/qrcode.jpg') top center no-repeat;
}


footer .footer_info{
	position:absolute;
	bottom:0;
	width:100%;
	height:62px;
	background-color:#d81e2b;
	overflow:hidden;
}
footer .footer_info span{
	color:#fff;
	font-size:14px;
	line-height:62px;
}
footer .footer_info span:first-child{
	padding-left:40px;
}
footer .footer_info span:last-child{
	padding-right:40px;
	float:right;
}

</style>