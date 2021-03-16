<template>
    <!-- 左側下拉選單 -->
    <div class="">
        <el-row>
            <el-col :span="24" class="aside_tab">
                <div class="aside_head">
                    <h1>- 功能列表 -</h1>
                </div>
                <ul><!-- 第一层大选单 -->
                    <li class="aside_item" v-for="(list,index) in asideMenu" :key="index">
                        <a class="item_title selected" @click="n = index" :class="n == index ? 'isSelected':''">
                            <span :class="list.icon"></span>
                            {{ list.name }}
                            <span class="arrow" :class="n == index ? 'chk_down':'chk_right'">{{ list.arrow }}</span>
                        </a>
                        <!-- 内容子选单 -->
                        <ul class="aside_second_item" v-show="n == index">
                            <li v-for="(sub,secIndex) in list.subItems" :key="secIndex">
                                <a :href="sub.href">
                                    <span :class="list.icon"></span>
                                    {{ sub.name }}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>

<script>
//@符号就是代表src路径， 所以@/components/NavMenu就是src/components/NavMenu。 这样webpack就知道如何引入文件了。
//这样做的好处是不必到处去写src了
import asideM from '@/config/aside-menu' //引入左側選單的數據

export default {
   data(){
       return{
           n:null,
           asideMenu:asideM, //载入侧边选单js
           menuArr:[]
       }
   },
   methods:{
       //取得侧边选单JSON
    //    getMenu(){ 
    //        this.$http.get("./config/aside-menu.js").then(res => {
    //            console.log(res);
    //        }).catch(res => {
    //            console.log('error')
    //        })
    //    }

    //左侧 子选单开关
//     flagChg(item){
//         //子选单开关
//         this.asideMenu.forEach(function(v){
//             v.flag = false
//         })
//         //当下元素展开子选单
//         item.flag = !item.flag
//     }
   },
   mounted(){
    // console.log('9999',this.asideMenu);
    //载入DOM取得侧边选单JSON
    // this.getMenu();
   }
}
</script>

<style scoped lang="scss">

  
</style>