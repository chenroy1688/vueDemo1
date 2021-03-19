<template>
    <!-- header区块 -->
    <header class="header overFlow">
        <!-- 主选单 -->
        <div class="header_login">
            <div class="login_wrap">
                <router-link to="/">简</router-link>
                <router-link to="/">立即注册</router-link>
                <router-link to="/">登陆</router-link>
                <router-link to="/">微信注册</router-link>
                <a href="javascript:void(0)" class="mirror">
                    <img src="../assets/image/mirror.png">
                </a>
                <input type="text" placeholder="请在这里输入内容"/>
            </div>
            <!-- 语系切换 -->
            <ul class="lang_active none">
                <li><a href="javascript:void(0)">简</a></li>
                <li><a href="javascript:void(0)">繁</a></li>
                <li><a href="javascript:void(0)">en</a></li>
            </ul>
        </div> <!-- end header_login -->

        <!-- header 主选单 -->
        <div class="header_menu">
                <!-- header logo -->
                <div class="header_logo">
                    <router-link to="/"></router-link>
                </div>
                <!-- header 主选单 -->
                <div class="menu nav lightseagreenish">
                    <ul>
                        <li>
                            <a href="javascript:void(0)" @click.prevent="logout" class="logoutBtn">登出</a>
                        </li>
                        <li><router-link to="/products">联系我们</router-link></li>
                        <li><router-link to="/forecast">赛事预测</router-link></li>
                        <li><router-link to="/portFolio">最新信习</router-link></li>
                        <li><router-link to="/gamePlay">赛事直播</router-link>
                            <div class="sublevel megamenu">
                                <div class="holder-1">
                                    <ul v-for="item in submenu" :key="item.id">
                                        <li><h3>{{ item.name }}</h3></li>
                                        <li v-for="sub in item.sub" :key="sub.id">
                                            <a :href="sub.href">{{ sub.name }}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><router-link to="/aboutUs">关于我们</router-link></li>
                        <!-- 下拉子选单 -->
                        <!-- <el-row class="sublevel megamenu bos">
                            <el-col :span="24" class="holder-1">
                                <el-menu>
                                    <el-menu-item>選單AA</el-menu-item>
                                    <el-menu-item>選單AA</el-menu-item>
                                    <el-menu-item>選單AA</el-menu-item>
                                </el-menu>
                            </el-col>
                        </el-row> -->
                        <li><router-link to="/">首页990</router-link></li>
                    </ul>
                </div>
        </div>

        <!-- banner area -->
        <div class="header_app">
            <ul>
                <li class="app_download"><a href="javascript:void(0)">App Store 下载</a></li>
                <li class="app_download"><a href="javascript:void(0)">Android 下载</a></li>
            </ul>
        </div>
    </header>
</template>

<script>
//Header 下拉选单数据
import subMenu from '@/config/subMenu'

export default {
   data(){
      return{
          submenu : subMenu, //submenu 渲染
          msg:''
      }
   },
   methods:{
       //登出
       logout(){
           var _this = this;
           //登出确认
           this.$confirm('确认退出吗?','提示',{

           }).then(() => {
                localStorage.removeItem('token'); //登出時 刪除token
                
                this.$router.push('/login');      //导回登入页
           }).catch(() => {

           });
       }
   },
   components:{

   }
}
</script>

<style scoped lang="scss">
/* ------------------------------
   header区块
------------------------------ */
header{
  width:100%;
  height:400px;
  margin:0 auto;
  overflow:hidden;
  .header_login{
    position:relative;
	height:45px;
    background:rgba(0,0,0,0.7);
    .login_wrap{
        width:850px;
        height:45px;
        margin-right:85px;
        float:right;
        a{
            display:block;
            width:120px;
            height:45px;
            text-align:center;
            color:#fff;
            line-height:45px;
            float:right;
            border-left:1px solid #66656a;
            text-decoration: none;
            &:nth-child(1){
                width:50px;
                border-right:1px solid #66656a;
                background-color:#d81e29;
                &:hover{
                    background-color:#000;
                    border-top:4px solid #d81e29;
                }
            }
            &:nth-child(5){
                width:80px;
            }
        }
        input{
            font-size:16px;
            width:300px;
            height:45px;
            color:#fff;
            text-align:right;
            padding-right:15px;
            background:rgba(0,0,0,0);
            border-style:none;
            float:right;
        }
    }
  }
}

/* 语系设定 */
.header{
    .header_login{
        ul{
            position:absolute;
            top:30px;
            right:85px;
            z-index:99;
            li{
                a{
                    display:block;
                    width:50px;
                    height:45px;
                    color:#fff;
                    text-align:center;
                    line-height:45px;
                    text-decoration: none;
                    border:1px solid #66656a;
                    background-color:#d81e29;
                    transition:all 0.5s;
                    &:hover{
                        background-color:#000;
                        border-top:4px solid #d81e29;
                    }
                }
            }
        }
    }
}

/* header_主选单 */
.header_menu{
	position:relative;
	height:89px;
	border-top:1px solid #878684;
	border-bottom:1px solid #878684;
    background:rgba(0, 0, 0, 0.7);
    .menu{
        position:absolute;
        top:0;
        right:0;
        float:right;
    }
    .header_logo{
        float:left;
    }
    .header_logo{
        a{
            display:block;
            width:304px;
            height:89px;
            margin-left:100px;
            background:url('../assets/image/logo.png') top center no-repeat;
        }
    }
}
// .header_menu .header_logo{
// 	float:left;
// }
// .header_menu .menu{
// 	position:absolute;
// 	top:0;
// 	right:0;
// 	float:right;
// }
// .header_menu .header_logo a{
// 	display:block;
// 	width:304px;
// 	height:89px;
// 	margin-left:100px;
// 	background:url('../assets/image/logo.png') top center no-repeat;
// }
.header_login .mirror img{
	width:20px;
	height:20px;
	margin:14px 0 0 0;
}

 /* header_banner app 下载区块 */
 .header_app{
	width:1070px;
	height:218px;
	margin:20px auto 0 auto;
 }
 .header_app ul{
	margin:65px auto 0 auto;
 }
 .header_app ul li.app_download{
	width:228px;
	height:53px;
	text-align:center;
	line-height:53px;
	background-color:#d81e29;
 }
 .header_app ul li.app_download:first-child{
	margin-bottom:20px;
 }
 .header_app ul li.app_download a{
	color:#fff;
	display:block;
	text-decoration: none;
 }

</style>