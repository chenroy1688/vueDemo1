<template>
    <!-- right 直播列表 -->
				<div class="content">
            <div class="el_div">
                <!-- <button type="button" @click="sendFather">传递给父层数据</button> -->
                <button class="el-input" @click="chgMsg">传给同层的数据</button>
                <div class="">
                    <slot>slot没有数据就用这里的数据</slot> <!-- 默認 插槽 -->
                    <slot name="hasName"></slot> <!-- 具名 插槽 -->
                    <slot name="father" :users="father1"></slot> <!-- 作用域插槽 -->
                </div>
            </div>
            
            <div class="data_box">
                <div class="date_icon">
                    <h1>{{ time.gameTime }} {{ time.week }}</h1>
                </div>
                <!-- <slot><span>父元件没数据没数据</span></slot> -->
                <!-- 渲染表格 -->
                <div class="css_table" v-for="gamelist in gameData" :key="gamelist.id">
                    <div class="css_tr already_over">
                        <div class="css_td">{{ gamelist.time }}</div>
                        <div class="css_td"><span class="team">{{ gamelist.home }}</span></div>
                        <div class="css_td2 nba_logo"><img :src="gamelist.homeImg"></div>
                        <div class="css_td"><span class="gold">{{ gamelist.homeScore }}</span></div>
                        <div class="css_td3"><span class="game_type">{{ gamelist.gameType }}</span></div>
                        <div class="css_td"><span class="gold">{{ gamelist.cusScore }}</span></div>
                        <div class="css_td2 nba_logo"><img :src="gamelist.cusImg"></div>
                        <div class="css_td"><span class="team">{{ gamelist.custom }}</span></div>
                        <div class="css_td3 btn_Noplay" v-if="gamelist.playType === 0"><a href="javascript;void(0)">尚未开播</a></div>
                        <div class="css_td3 btn_play" v-else><a href="javascript;void(0)">进入直播</a></div>
                    </div>
                </div>
            </div> <!-- end of data_box -->
				</div>
</template>

<script>
//同层vue先建立bus实例 透过bus传值
import { bus } from '../bus.js' 

export default {
	//父层绑定的v-bind资料
	props:{
    name:String,
    type:{
      validator (value){
        //这个值必须匹配下列字符串中的一个
        return ['success','warning','danger'].includes(value)
      }
    },
    // list:{
    //   type:Array, //对象或数组默认值必须从一个工厂函数获取
    //   default: () => []
    // },
    // isVisible:{
    //   type: Boolean,
    //   default : false
    // },
    // change:{
    //   type: Function,
    //   default: () => {}
    // },
		gameData:{ //父組件Home.vue 傳入的數據
			type:Array
		},
		time:{
			type:Object
    },
	},
  data(){
    return{
        footerStyle:{
            bg:true,
            txt:true
        },
        footInfo:{
            info:'Copyright@ 2019 测试页面 soniclive.cn  ALL Rights Reserved',
            areaCode:'+86',
            mail:"3217324595@qq.com",
            QQ:'3217324595'
        },
        father1:{
          name:'我是作用域slot001數據',
          age:20
        },
        father2:{
          name:'作用域slot002',
          age:26
        }
    }
   },
   methods:{
	   //传数据给父层
	  //  sendFather(){
		//       this.$emit('sendInfo',this.footInfo.mail)
    //  },
    
	   //传数据给同层 News.vue
      chgMsg(){
          bus.$emit('chgThesame',this.footInfo.info)
      }
   },
   mounted(){ //Dom载入完成运行

   }
}
</script>

<style scoped lang="scss">
.block {
  background: #999;
  width: 100px;
  height: 100px;
  margin-top: 10px;
}
.fade-enter-active {
  animation: go 1s;
}
.fade-leave-active {
  animation: back 1s;
}
@keyframes go {
  from { background: #fff; }
  to {background: #999;}
}

@keyframes back {
  from { background: #999; }
  to { background: #fff; }
}

button:last-child{
	margin-left:10px;
}

/* ------------------------------
   content
------------------------------ */
.css_table{ /* table */
  display:table;
  border-collapse: collapse;
  border-spacing:5px;
  width:100%;
  margin:20px 0;
  .nba_logo{
    width:60px;
    height:60px;
  }
  .btn_play{ //开播 button
    a{
      position:relative;
      display:block;
      width:120px;
      height:45px;
      background: rgb(255,107,66);
      background: -moz-linear-gradient(top, rgba(255,107,66,1) 8%, rgba(251,29,137,1) 89%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top, rgba(255,107,66,1) 8%,rgba(251,29,137,1) 89%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom, rgba(255,107,66,1) 8%,rgba(251,29,137,1) 89%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff6b42', endColorstr='#fb1d89',GradientType=0 ); /* IE6-9 */
      transition: all .5s;
      border-radius:10px;
      margin:0 auto;
      color:#fff;
      line-height:45px;
      padding-left:43px;
      &:hover{
        width:135px;
        height:45px;
        text-decoration:none;
        background: rgb(255,107,66);
        background: -moz-linear-gradient(top, rgba(255,107,66,1) 8%, rgba(251,29,137,1) 89%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgba(255,107,66,1) 8%,rgba(251,29,137,1) 89%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgba(255,107,66,1) 8%,rgba(251,29,137,1) 89%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff6b42', endColorstr='#fb1d89',GradientType=0 ); /* IE6-9 */
        transition: all .5s;
        margin:0 auto;
      }
      &:before{
        content:'';
        position:absolute;
        top:12px;
        left:10px;
        width:35px;
        height:21px;
        background:url("../assets/image/play_icon.png") top center no-repeat;
      }
    }
  }
  .btn_Noplay{ //未开播 button
    a{
      position:relative;
      display:block;
      width:120px;
      height:45px;
      background-color: #999;
      transition: all .5s;
      border-radius:10px;
      margin:0 auto;
      color:#fff;
      line-height:45px;
      padding-left:43px;
      &:before{
        content:'';
        position:absolute;
        top:12px;
        left:10px;
        width:35px;
        height:21px;
        background:url("../assets/image/Noplay_icon.png") top center no-repeat;
      }
    }
  }
}
.css_tr{ /* tr */
  display:table-row;
  border:1px solid #999;
}
.css_td{ /* td */
  display:table-cell;
  width:60px;
  color:#666;
  text-align:center;
  vertical-align:middle;
  border-right: 1px dotted #c9c8c8;
  border-top:2px solid #000;
  background:rgba(255,255,255,1);
  .gold{
    font-size:22px;
    font-weight:600;
    color:#ff0000;
  }
  .game_type{
    font-size:16px;
  }
}
.css_td2{
  display:table-cell;
  width:90px;
  color:#666;
  text-align:center;
  vertical-align:middle;
  padding:15px;
  border-right: 1px dotted #c9c8c8;
  border-top:2px solid #000;
  background:rgba(255,255,255,1);
}
.css_td3{
  display:table-cell;
  width:90px;
  color:#666;
  text-align:center;
  vertical-align:middle;
  padding:8px;
  border-right: 1px dotted #c9c8c8;
  border-top:2px solid #000;
  background:rgba(255,255,255,1);
}

</style>