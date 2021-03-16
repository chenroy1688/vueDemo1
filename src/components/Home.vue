<template>
    <!-- Home -->
    <div class="pc_wrap">
        <div class="right_box">
            <!-- 主标题 -->
            <el-row>
                <el-col :span="24" class="contnet_main_topic topicOne NumberPosition1">
                    <span>{{ TopicText.TopicTxt }}</span>
                    <span>{{ TopicText.engTxt }}</span>
                </el-col>
            </el-row>
            <!-- 新闻区块 组件 -->
            <el-row>
                <el-col :span="24">
                    <NewsArea :newsList="NewsData"></NewsArea>
                </el-col>
            </el-row>

            <!-- mixin 引入的數據都能直接用 -->
            <el-row>
                <el-col :span="24" class="mixinBox">
                    <h3 @click="toggleShow">
                        <span v-if="isshow">Mixin 带入的数据 -- 点击我 改变数据</span>
                        <span v-else>数据改变了！！</span>
                    </h3>
                </el-col>
            </el-row>
            
            <!-- 主标题 -->
            <el-row>
                <el-col :span="24" class="contnet_main_topic topicOne NumberPosition2">
                    <span>体育赛事直播</span>
                    <span>LIVE SPORTS</span>
                </el-col>
            </el-row>

            <!-- 接api按钮 -->
            <el-row>
                <el-col :span="24" class="el_div">
                    <button type="button" class="el-input" @click="getgameData">载入体育赛事</button>
                </el-col>
            </el-row>

            <!-- 体育赛事直播 子組件-->
            <Sportgame :gameData="gameDatas" :time="date">
                <p style="color:black">我是默认的 slot</p> <!-- 默認插槽 -->
                <template v-slot:hasName> <!-- 具名插槽 -->
                    <p style="color:black; padding:10px 0">我是具名slot</p>
                </template>
                <!-- 作用域插槽 slotProps接收子組件 name="father" :users="father1" -->
                <template v-slot:father="slotProps">  
                    <p style="color:black; padding:10px 0">作用域slot ++ {{ slotProps.users.name }}</p>
                </template>
            </Sportgame>
        </div> <!-- end of right_box -->
    </div>
</template>

<script>
//引入组件
import NewsArea from './News.vue'  //首页新闻区块
import Sportgame from './Sportgame.vue' //首页直播列表数据
//局部引入mixin 
import { toggle } from '../mixin/tooltip.js'
//引入封装api接口
import { getGameApi,getNewsApi } from '@/api/api'

export default {
    //注册各组件
    components:{
        NewsArea,
        Sportgame
    },
    //引入局部mixin
    mixins:[ toggle ],
    data(){
       return{
            gameDatas:[],
            NewsData:[],
            TopicText:{
                TopicTxt:'最新体育新闻',
                engTxt:'SPORTS NEWS'
            },
            date:{
                gameTime:'8月15日',
                week:'星期三'
            },
            fill:[
                {
                    name:'roy',
                    count:5
                },
                {
                    name:'lists',
                    count:10
                },
                {
                    name:'bank',
                    count:7
                }
            ]
       }
   },
   methods:{
       //获取赛事数据
        getgameData(){
            getGameApi()
                .then(res => {
                    this.gameDatas = res.data
                })
        },
        getNews(){ //取得新闻數據
            // this.$http.get("../static/newsDatas.json").then(response => {
            //     this.NewsData = response.data
            // }).catch((response) => {
            //     console.log('未取得新聞數據')
            // })

            //获取体育新闻数据
            getNewsApi()
                .then(res => {
                    this.NewsData = res.data
                })
        },
        altTxt(){
            alert('一载入就提示我呀');
        },
        tapAlt(){ //methods中的方法之间的互相调用 --- 调用altTxt()
            this.$options.methods.altTxt()
        }
   },
   mounted(){ //生命周期 -- DOM载入完就执行
        //调用methods的getNews() -- 新闻列表
        this.getNews();
        //使用setInterval调用methods方法  setInterval()调用不需要加() 
        // setInterval(this.getNews,30000)
    }
}
</script>

<style lang="scss">
.mixinBox{
    padding:20px;
    margin:30px 0;
    background-color:#eaeaea;
    p{
        font-size:18px;
        color:#999;
        padding:20px 0;
    }
}
.listStyle{
    font-size:20px;
}
</style>