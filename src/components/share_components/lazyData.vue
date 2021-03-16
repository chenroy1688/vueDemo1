<template>
   <div class="pc_wrap">
            <div class="">
                    <!-- 数据区 -->
                    <el-row>
                        <el-col :span="24" class="el_div">
                            <h3>懒加载功能</h3>
                            <div>
                                <table class="data_tab comminTab bosGreay">
                                    <thead>
                                        <th width="7%">序号</th>
                                        <th width="15%">标题</th>
                                        <th width="45%">发布内容</th>
                                        <th width="10%">操作</th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item,index) in lazyData" :key="index">
                                            <td>{{ item.id }}</td>
                                            <td>{{ item.title }}</td>
                                            <td>{{ item.body }}</td>
                                            <td>
                                                <el-button type="info">详情</el-button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </el-col>
                        <!-- 查询按钮 -->
                         <el-col :span="24">
                             <el-button type="primary" v-if="moreShowBoolen" @click="moreShow" class="marTop">载入更多数据</el-button>
                             <div v-else class="noMoreData">已无更多数据</div>
                        </el-col>
                    </el-row>
            </div>
   </div><!-- end of pc_wrap -->
</template>

<script>
//引入vuex
// import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
//引入封装api接口
import { LazyLoadApi } from '@/api/api' 

export default {
    components:{
    },
    props:{
    },
   data(){
       return{
            moreShowBoolen:false,
            nowPage:1, //数据page
            delView:{ //删除弹层 chk
               jmp:false, 
               chkDel:1 //谭层及删除值
            },
            lazyData:[]
       }
   }, 
   computed:{
   },
   methods:{
      init(){
        //请求api jsonplaceholder数据
        LazyLoadApi()
            .then(res => {
                if(res.data.length <= 10){ //数据少于10条
                    this.lazyData = res.data
                    this.moreShowBoolen = false //已无数据
                }else{
                    this.lazyData = res.data.slice(0,10) //先取10条数据
                    this.moreShowBoolen = true //查询更多
                }
            })
      },
      moreShow(){ //每次点击载入下10条数据
        LazyLoadApi()
            .then(res => {
                //每次载入倍数为10的数据 合并至数组
                this.lazyData = this.lazyData.concat(res.data.slice(this.nowPage * 10, (this.nowPage + 1) *10))
                this.nowPage++

                //判断是否还有数据可载入
                if(res.data.length >= this.nowPage * 10){ 
                    this.moreShowBoolen = true 
                }else{ 
                    this.moreShowBoolen = false
                }
            })
      }
   },
   mounted(){ //DOM载入完成调用
        this.init()
   }
}
</script>

<style scoped lang="scss">

</style>