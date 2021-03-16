import VueRouter from "vue-router"

const route = Object.create(null)
VueRouter.install = function(vue){
  // 第一个字符串是 组件名，第二个是组件路径，第三个是包名(如果不指定则已1.js,2.js....n.js命名)
  vue.component('aboutInfo',(resolve) => {require.ensure([],() => resolve(require('@/components/InfoList/aboutInfo.vue')),'aboutInfo')})
  vue.component('adInfo',(resolve) => {require.ensure([],() => resolve(require('@/components/InfoList/adInfo.vue')),'adInfo')})
  vue.component('listInfo',(resolve) => {require.ensure([],() => resolve(require('@/components/InfoList/listInfo.vue')),'listInfo')})
}

export default route