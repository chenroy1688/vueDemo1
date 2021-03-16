<template>
    <!--  体育新闻侧边标签 -->
    <div class="page-main" role="main">
        <aside>
            <div class="sport_topic">
              <div class="content-trigon-zhijiao">
                  <span><i></i></span>
              </div>
              <h1>籃 | 球 | 新 | 聞</h1>
            </div>
            <div class="btn_data">
                <ul>
                  <li><a href="#">NBA新闻</a></li>
                  <li><a href="#">CBA新闻</a></li>
                </ul>
            </div>
            <div class="sport_topic">
                <div class="content-trigon-zhijiao">
                  <span><i></i></span>
                </div>
                <h1>足 | 球 | 新 | 聞</h1>
            </div>
            <div class="btn_data">
                <ul>
                  <li><a href="#">最新消息</a></li>
                  <li><a href="#">中超新闻</a></li>
                  <li><a href="#">英超新闻</a></li>
                  <li><a href="#">西甲新闻</a></li>
                  <li><a href="#">德甲新闻</a></li>
                  <li><a href="#">意甲新闻</a></li>
                </ul>
            </div>
            <button class="qq">
              <img src="../assets/image/arrow_left.png">
            </button>
			  </aside>
    </div>
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
                info:'Copyright@ 2019 测试页面 soniclive.cn  ALL Rights Reserved',
                areaCode:'+86',
                mail:"3217324595@qq.com",
                QQ:'3217324595'
            },
            zipCode:"最多测试页面测试页面"
       }
   },
   mounted(){
      // 右边新闻区收合 ----------------------------------------
      let _aside = $('.page-main > aside');

      let $asidButton = _aside.find('.qq').on('click', function () {
          _aside.toggleClass('open');

      if (_aside.hasClass('open')) {
        _aside.stop(true).animate({right: '-70px'}, 300, 'easeOutBack');
        $asidButton.find('img').attr('src', 'arrow_right.png');
      } else {
        _aside.stop(true).animate({right: '-350px'}, 300, 'easeInBack');
        $asidButton.find('img').attr('src', 'arrow_left.png');
      };
});
   }
}
</script>

<style scoped>
/* ------------------------------
        rightMenu 区块
------------------------------ */
aside img{
  width: 55px;
  height: auto;
  z-index: 111111;
}
.page-main {
  position: relative;
}
.page-main .sport_topic{
  position: relative;
  border-top:1px solid #8e8e8e;
  border-bottom:1px solid #8e8e8e;
}
.page-main .sport_topic h1{
  font-size:16px;
  color:#fff;
  padding:15px 0 15px 50px;
}
.content-trigon-zhijiao{
  position:absolute;
  width:0px;
  height:0px;
  border-color:transparent #d74554;
  border-width:0 0 45px 45px;
  border-style:solid;
}
.page-main .btn_data{
  width:280px;
  margin:0;
}
.page-main ul li{
  display:inline-block;
  overflow:hidden;
}
.page-main ul li a{
  position:relative;
  display:block;
  width:110px;
  height:40px;
  line-height:40px;
  color:#fff;
  text-align:center;
  text-decoration: none;
  border:1px solid #8e8e8e;
  transition: color .5s;
  overflow:hidden;
}
.page-main ul li a:before{
  content:'';
  position:absolute;
  top:0; 
  left:0;
  width:140%;
  height:100%;
  background-color: #d74554;
  z-index:-1;
  transform-origin:0 0 ;
  transform:translateX(-100%) skewX(-45deg);
  transition: transform .5s;
}
.page-main ul li a:hover{
  color:#fff;
  text-decoration: none;
}
.page-main ul li a:hover:before{
  transform: translateX(10%) skewX(-45deg);
}
.page-main > aside {
  background-color: rgba(0,0,0,0.8);
  width: 350px;
  height: 100%;
  top: 0;
  right: -350px;
  position: fixed;
}
.page-main > aside ul {
  margin: 25px 25px;
  padding: 0;
}
.page-main > aside li {
  width:110px;
  height:40px;
  margin: 0 0 20px;
  list-style: none;
}
.page-main > aside li:nth-last-child(2),.page-main > aside li:last-child{
  margin:0;
}
.page-main > aside button {
  background-color: rgba(0,0,0,0);
  display: block;
  position: absolute;
  top: 150px;
  right: 350px;
  width: 100px;
  height: 50px;
  margin: 0;
  padding: 0;
  border: none;
}
.page-main > aside button::before {
  content:'体育新闻';
  position:absolute;
  bottom:50px;
  right:15px;
  width:80px;
  font-size:16px;
  color:#000;
  margin-bottom:10px;
}
</style>