<template>
    <!-- product -->
    <div class="pc_wrap">
       <div id="demo" class="content row mb-5 over_flow">
           <!-- 主标题 -->
            <el-row>
                <el-col :span="24" class="contnet_main_topic topicOne NumberPosition1">
                    <span>關於音速</span>
                    <span>ABOUT US</span>
                </el-col>
            </el-row>
            <!-- 选单区 -->
            <el-row class="">
                 <el-col :span="3" class="list-group mb-5" v-for="(list,index) in btnObj" :key="index">
                    <router-link tag="li" class="nav-link" :to="{name:list.link}">
                        <a class="list-group-item list-group-item-action">
                            {{ list.tittle }}
                        </a>
                    </router-link>
                </el-col>
            </el-row>
            <!-- 資料區塊 -->
            <el-row>
                <el-col :span="24" class="cardTab_txt">
                    <router-view></router-view>
                </el-col>
            </el-row>
        </div>
   </div>
</template>
<script>

export default {
   data(){
      return{
          selected:1,
          //按鈕數據
          btnObj:[
              {
                  id     : 1,
                  tittle : '關係音速',
                  link   : 'aboutLink'
              },
              {
                  id     : 2,
                  tittle : '歷史沿革',
                  link   : 'beforeLink'
              },
              {
                  id     : 3,
                  tittle : '體育服務',
                  link   : 'serverLink'
              }
          ]
      }
   },
   methods:{
    //   choose(index){
    //       console.log('987987',index)
    //       this.selected = index
    //   }
   },
   mounted(){ //DOM载入完就执行
    //    this.showActive()
   }
}
</script>

<style scoped lang="scss">

/* 产品展示 -- 左侧选单 */
.list-group-item{
    display:block;
    height: 50px;
    color:#666;
    text-align:center;
    line-height:50px;
    background-color:#ebe8e8;
    border:1px solid #cdcbcb;
}
.list-group-item:hover{
    background-color:#bab8b8;
    color:#fff;
}
</style>