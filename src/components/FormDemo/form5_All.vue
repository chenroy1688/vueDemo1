<template>
   <div class="pc_wrap">
            <div class="">
                <!-- 主标题 -->
                    <el-row>
                        <el-col :span="24" class="contnet_main_topic topicOne NumberPosition1">
                            <span>懒加载(滚动加载)</span>
                            <span>Lazy Load</span>
                        </el-col>
                    </el-row>
                    <!-- 計畫head -->
                    <el-row>
                        <el-col :span="24" class="panel-heading">
                            <!-- 功能說明 -->
                            <el-row class="el_row">
                                <el-col :span="8" class="el-div">
                                    <h1 class="topic">
                                        <span class="icon-display"></span>
                                        滚动加载功能
                                    </h1>
                                </el-col>
                                <el-col :span="16" class="el-div topic_info">
                                    <ul>
                                        <li>> 功能練習 : 表单实现懒滚动加载功能</li>
                                        <li>> 功能練習 : HTML5,CSS3,axios</li>
                                    </ul>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                    <!-- 懒加载 数据组件 -->
                    <el-row>
                        <LazyScroll></LazyScroll>
                    </el-row>
            </div>
   </div><!-- end of pc_wrap -->
</template>
<script>
//共用组件
import LazyScroll from '@/components/share_components/lazyScroll'
//引入封装api接口
import { LazyLoadApi } from '@/api/api' 

export default {
    components:{
        LazyScroll
    },
   data(){
       return{
            inputVal:'', //v-model绑定
            delView:{ //删除弹层 chk
               jmp:false, 
               chkDel:1 //谭层及删除值
            },
            lazyData:[]
       }
   }, 
   computed:{ //计算属性
      
   },
   methods:{
      
   },
   mounted(){
   }
}
</script>

<style scoped lang="scss">

</style>