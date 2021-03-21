<template>
   <div class="pc_wrap">
            <div class="">
                <!-- 主标题 -->
                    <el-row>
                        <el-col :span="24" class="contnet_main_topic topicOne NumberPosition1">
                            <span>数据交互(全选)</span>
                            <span>Form1_One</span>
                        </el-col>
                    </el-row>

                    <el-row>
                        <!-- 計畫head -->
                        <el-col :span="24" class="panel-heading">
                            <!-- 功能說明 -->
                            <el-row class="el_row">
                                <el-col :span="8" class="el-div">
                                    <h1 class="topic">
                                        <span class="icon-display"></span>
                                        axios前后数据交互_实现全选功能
                                    </h1>
                                </el-col>
                                <el-col :span="16" class="el-div topic_info">
                                    <ul>
                                        <li>> 功能練習 : axios前后数据交互_实现全选功能</li>
                                        <li>> 數據調用 : 接json数据 -> 更新VueX数据</li>
                                        <li>> 功能練習 : HTML5,CSS3,axios,Vuex</li>
                                    </ul>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>

                    <!-- 功能技术 -->
                    <el-row class="S_introduce" style="display:none">
                        <el-col :span="6" class="S_introduce_div">使用技术</el-col>
                        <el-col :span="18" class="S_introduce_div">
                            <p>Html5</p>
                            <p>Css3</p>
                            <p>Vuex</p>
                        </el-col>
                    </el-row>

                    <!-- form practice demo el-table -->
                    <!-- <el-main class="">
                        <el-table :data="tableData" class="commonTab">
                            <el-table-column prop="id" label="编号" width="80"></el-table-column>
                            <el-table-column width="60">
                                <input type="checkbox"/>
                            </el-table-column>
                            <el-table-column prop="date" label="日期" width="120"></el-table-column>
                            <el-table-column prop="name" label="用户性别" width="120"></el-table-column>
                            <el-table-column prop="add
                            ress" label="地址" width="450"></el-table-column>
                            <el-table-column label="操作">
                                <a href="javascript:void(0)" class="delBtn">删除</a>

                            </el-table-column>
                        </el-table>
                    </el-main> -->
                    <div class="data_div ">
                        <table class="data_tab comminTab bosGreay">
                            <thead>
                                <th width="10%">编号</th>
                                <th width="10%">
                                    全选
                                    <input type="checkbox" v-model="checkAll" @change="changAll()"/>
                                </th>
                                <th width="15%">用户姓名</th>
                                <th width="15%">用户性别</th>
                                <th width="40%">所在地址</th>
                                <th width="10%">操作</th>
                            </thead>
                            <tbody>
                                <tr v-for="(item,index) in tableData" :key="index">
                                    <td>{{ item.id }}</td>
                                    <td>
                                        <input type="checkbox" v-model="item.check" @change="changeChk()"/>
                                    </td>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.gender }}</td>
                                    <td>{{ item.address }}</td>
                                    <td>
                                        <el-button type="danger">删除</el-button>
                                    </td>
                                </tr>
                                <!-- <tr>
                                    <td colspan="6">{{ tableData }}</td>
                                </tr> -->
                            </tbody>
                        </table>
                    </div>
            </div>
   </div><!-- end of pc_wrap -->
</template>

<script>
//引入Vuex
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
//引入封装api接口
import { getTableData } from '@/api/api'

export default {
    components:{

    },
   data(){
       return{
            newTodoText:'',
            inputVal:'', //v-model绑定
            isComplete:true,
            delView:{ //删除弹层 chk
               jmp:false
            },
            chkDel:1, //谭层及删除值
            checkAll:false //全选状态
       }
   }, 
   computed:{
        ...mapState( //store.state数据
            ["todoLists","newLists","curVal","residence","tableData"],
        )
   },
   methods:{
    //请求表单数据
    //  getLists(){ 
    //      this.$http.get("../static/tableData.json")
    //      .then(res => {
    //          console.log('res.data',res.data)
    //         this.$store.dispatch({
    //             type    :'getTabData',
    //             TabData : res.data
    //         })
    //      })
    //      .catch(res => {
    //          console.log("请求数据错误")
    //      })
    //  },
     getLists(){ 
         getTableData()
        .then(res => {
            console.log('res.data',res.data)
            this.$store.dispatch({
                type:'getTabData',
                TabData : res.data
            })
        })
     }
     //全选功能
     changAll(){
         this.$store.dispatch({
             type : 'chkAll',
             val  : this.checkAll
         })
     },
     //子选项当前选中
     changeChk(){
         //筛选子选项当前选中 filter 返回满足条件数组
        //  var _len = this.tableData.filter(function(item,index){
        //      return item.check
        //  }).length
        // _len == this.tableData.length ? this.checkAll = true : this.checkAll = false

        //every 一个没满足条件为false
        this.checkAll = this.tableData.every(item => item.check)

     }
   },
   mounted(){ //DOM载入完成调用
        //第一次进来 载入初始数据
        this.getLists()
   }
}
</script>

<style scoped lang="scss">


</style>