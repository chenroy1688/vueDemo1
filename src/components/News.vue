<template>
       <!-- content_新闻区块 -->
        <div :class="['right_news',{'bos' : newsCss.noNews}]">
            <el-row>
                <el-col :span="24">
                    <!-- 篮球新闻 -->
                    <ul class="ulcss basketball">
                        <!-- 赛事视频回放 主标题 -->
                        <el-row>
                            <el-col :span="24" class="top_topic">
                                <div class="top_topic_info">
                                    <div></div>
                                    <div>{{ SportNews.Bnews }}</div>
                                    <div class=""><a href="javascript:void(0)">more</a></div>
                                </div>
                                <span></span>
                            </el-col>
                        </el-row>
                        <!-- 渲染第一筆數據 -->
                        <li class="idx_li" v-for="(val,index) in newsList[0]" :key="index">
                            <a href="javascript:void(0)">
                                <img :src="val['picAdress']"/>
                                <span>{{ val["newsTxt"] }}</span>
                                <span>{{ val["time"] }}</span>
                            </a>
                        </li>
                    </ul>
                    <!-- 足球新闻 -->
                    <ul class="ulcss football">
                        <!-- 赛事视频回放 主标题 -->
                        <el-row>
                            <el-col :span="24" class="top_topic">
                                <div class="top_topic_info">
                                    <div></div>
                                    <div>{{ SportNews.Fnews }}</div>
                                    <div class=""><a href="javascript:void(0)">more</a></div>
                                </div>
                                <span></span>
                            </el-col>
                        </el-row>
                        <li class="idx_li" v-for="(val,index) in newsList[1]" :key="index">
                          <a href="javascript:void(0)">
                              <img :src="val.picAdress"/>
                              <span>{{ val.newsTxt }}</span>
                              <span>{{ val.time }}</span>
                          </a>
                        </li>
                    </ul>
                </el-col>
            </el-row>
            <!-- 接收同层数据 -->
            <div class="el_div">{{ Foottxt }}</div>
        </div>
</template>

<script>
//同层vue先建立bus实例 透过bus传值
import { bus } from '../bus.js' 

export default {
  //父層傳入數據
   props:{ 
     newsList:{ //新闻数据
        type:Array
     }
   },
   data(){
      return{
          Foottxt:'',
          SportNews:{
            Bnews:'最新篮球新闻',
            Fnews:'最新足球新闻'
          },
          newsCss:{
              isNews: true,
              noNews: false
          }
      }
   },
    created(){ //dom还没载入就运行
      //sportgame.vue 傳送过来的数据
      bus.$on('chgThesame',(data) => {
          this.Foottxt = data
      })
   }
}
</script>

<style lang="scss">
/* ------------------------------
   右侧选单區塊
------------------------------ */
.newsTxt{
    font-size:18px;
    color:$color1;
}
.right_news .idx_li{
  overflow:hidden;
  img{
    float:left;
    width:150px;
    padding:10px 0;
  }
  a{
    display:block;
    padding-left:0 !important;
    overflow:hidden;
  }
  span{
    display:block;
    float:left;
    font-size:$ft16 !important;
    margin-left:30px;
    padding:4px 0;
  }
}
.right_news h1{
    padding:20px 0;
  }
  .right_news ul.ulcss ~ ul.ulcss{ margin-left:30px; }
  .right_news ul.ulcss{
    display:inline-block;
    width:533px;
    overflow:hidden;
    h1{
      color:$black;
    }
    li{
      padding:5px 0;
      border-bottom:$lineGray;
      a{
        color:#999;
        font-size:$ft14;
        padding-left:15px;
        text-decoration: none;
        line-height:35px;
        transition:all 0.5s;
        &:hover{
          color:$red;
        }
        &:before{
          content:'';
          position:absolute;
          width:15px;
          height:15px;
          top:0;
          left:14px;
        }
      }
    }
  }

</style>