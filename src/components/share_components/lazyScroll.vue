<template>
   <div class="pc_wrap">
                    <el-row>
                        <el-col :span="24" class="el_div">
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
                                                <el-button type="warning">详情</el-button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="24">
                            <div v-if="moreShowBoolen" class="marTop">tips：滚动加载更多</div>
                            <div v-else class="noMoreData">已无更多数据</div>
                        </el-col>
                    </el-row>
   </div><!-- end of pc_wrap -->
</template>

<script>
//引入封装api接口
import { LazyLoadApi } from '@/api/api' 

export default {
    components:{
    },
   data(){
       return{
            moreShowBoolen:false,
            nowPage:1,
            scrollHeight:0,
            lazyData:[],
            delView:{ //删除弹层 chk
               jmp:false, 
               chkDel:1 //谭层及删除值
            },
       }
   }, 
   computed:{
   },
   methods:{
      lazyScroll(){
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
      scrollMore(){
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
   mounted(){
        this.lazyScroll() 
        // screen.availHeight表示屏幕高度
        // document.documentElement.scrollTop表示当前页面滚动条的位置,documentElement对应的是html标签,body对应的是body标签
        // document.compatMode用来判断当前浏览器采用的渲染方式,CSS1Compat表示标准兼容模式开启

        //绑定scroll事件
        window.addEventListener('scroll',() => {
            // 滚动条在Y轴上的滚动距离
            const scrollY = document.documentElement.scrollTop || document.body.scrollTop 
            const vh = document.compatMode === 'CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight
            //页面的可视高度(能看见的)
            const allHeight = Math.max(document.body.scrollHeight,document.documentElement.scrollHeight) //页面的总高度(所有的)
            console.log(allHeight)

            //当滚动条划到页面底部
            if(scrollY + vh >= allHeight) this.scrollMore()
        })
   }
}
</script>

<style scoped lang="scss">
</style>