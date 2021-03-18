<template>
  <!-- 用户列表 -->
  <div class="pc_wrap">
      <!-- 主标题 -->
      <el-row>
          <el-col :span="24" class="contnet_main_topic topicOne NumberPosition3">
              <span>最新讯息</span>
              <span>Lastest News</span>
          </el-col>
      </el-row>
      <!-- 渲染用户数据 -->
      <el-row class="portTab">
          <el-col :span="24" class="css_tr trColor">
              <h1>用户列表 / user list</h1>
              <el-col :span="2" class="css_td">编号</el-col>
              <el-col :span="4" class="css_td">用户名称</el-col>
              <el-col :span="5" class="css_td">电话</el-col>
              <el-col :span="5" class="css_td">邮箱</el-col>
              <el-col :span="5" class="css_td">网站</el-col>
              <el-col :span="3" class="css_td">操作</el-col>
          </el-col>
          <el-col :span="24" class="css_tr" v-for="(item,index) in userData" :key="item.id">
              <el-col :span="2" class="css_td">{{ item.id }}</el-col>
              <el-col :span="4" class="css_td">{{ item.username }}</el-col>
              <el-col :span="5" class="css_td">{{ item.phone }}</el-col>
              <el-col :span="5" class="css_td">{{ item.email }}</el-col>
              <el-col :span="5" class="css_td">{{ item.website }}</el-col>
              <el-col :span="3" class="css_td">
                  <button type="button" @click="del(index)">删除</button>
              </el-col>
          </el-col> 
      </el-row>

      <!-- nextTick demo -->
      <el-row>
          <el-col :span="24" class="bsss">调用store.count数据 : {{ count }}</el-col>
          <el-col :span="24" class="bsss">调用store.gameText字串 : {{ gameText }}</el-col>
      </el-row>
      <el-row>
          <el-col :span="24" class="bsss">getters : {{ doneTodos }}</el-col>
          <el-col :span="24" class="bsss">getters : {{ doneTodesCount }}</el-col>
      </el-row>

      <busDemo></busDemo>
      <div class="el-div">{{ Foottxt }}</div>
      <!-- 图片 懒加载 载不到图片则载入err.gif -->
      <img class="testImg" v-lazy="imgSrc"/>
  </div>
</template>

<script>
//组件
import busDemo from './slot/busDemo.vue'
//引入mapState
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex' 
//引入数据接口 @根目錄 src/
import { userList } from '@/api/api'
//同层vue先建立bus实例 透过bus传值
import { bus } from '../bus.js' 

export default {
  components: {
      busDemo
  },
  data() {
    return {
      portTxt: "这是优惠讯息page",
      show: true,
      imgSrc:'../static/kobe.jpg',
      userData:[],
      Foottxt:''
    };
  },
  computed: {
    ...mapState( //数组 对应store传出的数据
          ["count","gameText"]
    ),
    ...mapGetters(
      ['doneTodos','doneTodesCount']
    )
  },
  created() { //尚未载入dmo时
      //串接接口
      userList()
        .then(res => {
          this.userData = res.data
        }),
      bus.$on('chgDemo',(data) => {
        this.Foottxt = data;
      })
  },
  methods:{
    del(index){ //删除数据
      this.userData.splice(index,1)
    }
  }
};
</script>

<style scoped lang="scss">
.testImg{
    margin-top:30px;
    width:550px;
}
  .pc_wrap .portTab {
    border: 1px solid #333;
    background-color: $white;
    padding: 25px;
    margin: 0 0 20px 0;
    .css_table{
      display: table;
      width: 100%;
      border-collapse: collapse;
      box-sizing:border-box;
    }
    h1{
      font-size: 16px;
      color: $white;
      text-align: center;
      padding: 13px 0;
      background-color: $black;
    }
    .css_tr{
      display: table-row;
    }
    .css_td{
      display: table-cell;
      height:50px;
      font-size: 14px;
      color:$gray999;
      line-height:50px;
      text-align: center;
      border: 1px solid $gray;
      -moz-box-sizing: border-box;
      box-sizing:border-box;
      // background-clip:padding-box;
    }
    button{
      width:60px;
      padding:10px 0;
      text-align:center;
      font-size:12px;
      color:#fff;
      background-color:$gray999;
    }
  }
  .trColor {
    background-color: #e2e0e0;
  }
  .countVal{
    padding:40px 0;
  }
  .bsss{
    margin:10px 0 0 0;
    padding:12px;
    border:1px solid #999;
  }


</style>