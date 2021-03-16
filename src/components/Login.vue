<template>
    <div class="login_wrap">
        <!-- 登入版块 -->
        <div :class="{login : isLogin}">
        <div class="login_text">{{ nameText }}</div>
        
        <!-- 登入区块 -->
        <form @submit.prevent="login">
            <div class="loginInput">
                    <label>姓名 :</label>
                    <input type="text" v-model="userName" placeholder="请输入帐号" required>
                    <br>
                    <label>密码 :</label>
                    <input type="password" v-model="password" placeholder="请输入密码" required>
                </div>
                <button type="submit">登入</button> 
            </form>
        </div>
    </div>
</template>

<script>
export default {
   data(){
      return{
          userName:'', //帐号
          password:'', //密码
          isLogin: true,
          nameText: '音速體育直播 / LOGIN'
      }
   },
   methods:{
       login(){
           //login登入 判断
           //登入成功，配发 token 給 user 保存 /  各路由间 user 的 token，失败就重新导向登入页面 token
           //token 无误不影响 routing  /  登出时删除 token
           if(this.userName === 'aaaa' && this.password === '9999'){
               localStorage.setItem('token','ImLogin') //登入存token
               this.$router.push('/') //导向首页
           }else{
               alert('帐号或密码错误!!请重新输入！');
           }
       }
   }
}
</script>

<style scoped lang="scss">
    .total_wrap .login_wrap{
        width:100vh !important;
        margin:0 auto !important;
        background:url('../assets/image/login_bg2.jpg') top center no-repeat;
        background-size:cover;
    }
    .total_wrap .login{
        position:relative;
        font-size:16px;
        padding:10px;
        width:400px !important;
        min-width:auto !important;
        min-height:auto !important;
        margin:0 auto !important;
        background:rgba(255,255,255,.2);
        -webkit-box-shadow: 3px 3px 6px #999;
        -moz-box-shadow: 3px 3px 6px #999;
        box-shadow: 3px 3px 6px #999;
        transform:translate(0,25%);
    }
    .login .loginInput{
        width:260px;
        margin:15px auto;
    }
    .login .loginInput input{
        font-size:14px;
        color:#000;
        padding:10px;
        margin:10px;
        border:1px solid #999;
    }
    .login button{
        width:100%;
        padding:10px;
        color:#fff;
        text-align:center;
        background:rgba(0,0,0,.5);
        border-style:none;
    }
    
    .login .login_text{
        text-align:center;
        font-size:16px;
        padding:15px 0;
        color:#fff;
        background-color:#d84555;
    }
</style>