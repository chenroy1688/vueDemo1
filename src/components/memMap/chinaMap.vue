<template>
    <!-- 快递讯息 -->
    <div class="pc_wrap">
         <!-- 主标题 -->
         <el-row>
            <el-col :span="24" class="contnet_main_topic topicOne NumberPosition1">
                  <span>音速直播</span>
                  <span>ChinaMap</span>
            </el-col>
         </el-row>
         <el-row>
            <!-- 計畫head -->
            <el-col :span="24" class="panel-heading">
                  <!-- 功能說明 -->
                  <el-row class="el_row">
                     <el-col :span="8" class="el-div">
                        <h1 class="topic">
                              <span class="icon-star-full"></span>
                              中国疫情地图
                        </h1>
                     </el-col>
                     <el-col :span="16" class="el-div topic_info">
                        <ul>
                              <li>> 功能练习 : 中国疫情地图</li>
                              <li>> 数据调用 : eCharts套件,JSONP使用get跨域请求即时数据</li>
                              <li>> 使用 : JSONP使用get跨域请求即时数据</li>
                        </ul>
                     </el-col>
                  </el-row>
            </el-col>
         </el-row>
         <!-- eCharts 引用地图 -->
         <Map/>
    </div> <!-- end of pc_wrap -->
</template>
<script>
//引入疫情地图组件
import Map from './Map.vue'
//引入封装api接口
// import { chinaMap } from '@/api/api'


export default {
   components:{
      Map
   },
   data(){
      return{
          content:'',
          //疫情数据数组
          mapData:[]
      }
   },
   methods:{
      
   },
   mounted(){
      
   }
}
</script>

<style scoped lang="scss">
   .contact_wrap h1{
      color:#ff0000;
      padding:0 0 20px 0;
   }
   .contact_wrap p{
       line-height:24px;
   }
   .contact_wrap p ~ p{
      margin-top:20px;
   }
</style>