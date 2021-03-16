import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router' //引入路由
// import VueResource from 'vue-resource'  //已停用
import { routes } from './router/routes'   //导入router规则
import axios from 'axios'
import ElementUI, { Header } from 'element-ui' //导入element-Ui
import Mock from './mock' //导入mock.js
import Icon from 'vue-awesome/components/Icon'
//引入store储存库
import store from './store'
//引入懒加载
import VueLazyload from 'vue-lazyload' 
//引入echarts图表
import echarts from 'echarts'

//引入css
import './assets/css/reset.css' //css reset
import './assets/css/common.css' //通用设定
import './assets/css/nav.css' //主选单设定
import './assets/css/icon.css' //iconmoon
import './assets/css/main-versions.css'
import './assets/css/animations-3.css' //导览动效
import 'element-ui/lib/theme-chalk/index.css' //element ui 类

//element基于断点的隐藏类
import 'element-ui/lib/theme-chalk/display.css' 

//全局 -- 引入外部scss档案
import './assets/style/total.scss' 

//引入js
import './assets/js/jquery-3.2.1.min.js'
import './assets/js/jquery-ui.min.js'

//使用router
Vue.use(Router)
//使用element ui
Vue.use(ElementUI)
//使用icon
Vue.component('icon',Icon)
//配置懒加载
Vue.use(VueLazyload,{
  preLoad: 1.3, //预加载的高度比例
  attempt:2, //尝试加载的图片数量
  listenEvents:['scroll','resize','animationend'], //监听 - 触发事件
  error:'../../static/icons/err.gif', //加载图片错误
  loading:'../../static/icons/loading.gif' //加载中显示图
})
//全局定义echarts
Vue.prototype.$echarts = echarts

// 将axios绑定给$axios属性(全局注册axios)
// axios.defaults.baseURL = 'localhost:8080'
Vue.prototype.$http = axios

//创建路由设置
const router = new Router({
  routes,
  mode: 'history' //采用历史模式 网址路径不用hash
})

//全局登入导航守卫
router.beforeEach((to, from, next) => {
  //取localstorage value(模拟登入数据)
  const isLogin = localStorage.getItem('token') == 'ImLogin'

  /* 路由发生变化修改页面title to为前往的目标页 */
  if(to.meta.title){
    document.title = to.meta.title
  }
  next();

//登入判断
  if( isLogin ){
    next(); //导向下一页
  } else {
    if( to.path !== '/login') //判断路径不为/login
      next('/login'); //一律导回login page
    else
      next(); 
  }
});

Vue.config.productionTip = false

new Vue({
  router, //注册路由
  store, //注册vuex的store 所有组件都多个$store属性
  render: h => h(App),
}).$mount('#app')
