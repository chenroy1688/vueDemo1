<template>
   <div class="pc_wrap">
            <div>
                <!-- 主标题 -->
                    <el-row>
                        <el-col :span="24" class="contnet_main_topic topicOne NumberPosition1">
                            <span>备忘录</span>
                            <span>TodoList</span>
                        </el-col>
                    </el-row>

                    <el-row>
                        <!-- 計畫head -->
                        <el-col :span="24" class="panel-heading">
                            <!-- 功能說明 -->
                            <el-row class="el_row">
                                <el-col :span="8" class="el-div">
                                    <h1 class="topic">
                                        <span class="icon-users"></span>
                                        定制体育计划
                                    </h1>
                                </el-col>
                                <el-col :span="16" class="el-div topic_info">
                                    <ul>
                                        <li>> 功能练习 : 备忘录todoList</li>
                                        <li>> 数据调用 : VueX</li>
                                        <li>> 使用 : 备忘录todoList</li>
                                    </ul>
                                </el-col>
                            </el-row>

                            <div class="panel-heading-info">
                                <a>目前共有 <span class="circle">{{ todoLists.length }}</span>个计划</a>
                                <a> / 已经完成 <span class="circle">{{ completeNum }}</span>个</a>
                                <a> / 未完成 <span class="circle">{{ todoLists.length - completeNum }}</span>个</a>
                            </div>
                        </el-col>

                        <!-- 按钮切换 -->
                        <el-col :span="24">
                            <ul class="item_w3">
                                <li><a :class="{'isActive' : curVal == 1}" @click="filterList(1)">所有计划</a></li>
                                <li><a :class="{'isActive' : curVal == 2}" @click="filterList(2)">已完成</a></li>
                                <li><a :class="{'isActive' : curVal == 3}" @click="filterList(3)">未完成</a></li>
                            </ul>
                        </el-col>

                        <!-- 全部完成 -->
                        <el-col :span="24" class="panel-body">
                            <!-- 输入input -->
                            <div class="input-group">
                                <input type="text" class="form-control text-keyword"
                                placeholder="输入计画项目后,按确认新增计画" @keyup.enter="addListItem" v-model="inputVal">
                                <div class="input-group-btn">
                                    <el-button type="primary" @click="addListItem" :disabled="!inputVal">添加计画</el-button>
                                </div>
                            </div>
                            <!-- 计画区 -->
                            <ul class="list-group"> <!-- status:true 已经完成 -->
                                <li class="list-group-item" v-for="(item,index) in newLists" :key="index">
                                    <div class="list-item">
                                        <span class="list-group-Num">{{ index + 1 }}</span>
                                        <input type="checkbox" v-model="item.status"><!-- status选取状态 -->
                                        <span :class="{'line-trough' : item.status === true}">{{ item.name }}</span>
                                        <a class="badge" @click="openDialig( index )">删除</a>
                                    </div>
                                </li>
                            </ul>
                            <div class="isComplete" style="display:none">
                                恭喜你已完成所有计划事项!!
                            </div>
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
            </div>

            <!-- delete chk弹层 -->
            <div role="dialog" class="mask" id="layer" v-if="delView.jmp">
                <div class="del-dialog jmpView">
                    <div class="del-content">
                        <div class="del-header">
                            <h4 class="del-title">是否要删除这笔数据?</h4>
                        </div>
                        <div class="del-body text-right">
                            <el-button type="primary" icon="el-icon-delete-solid" data-dismiss="modal" @click="del()">删除</el-button>
                            <el-button type="primary" icon="el-icon-edit-outline" data-dismiss="modal" @click="cancel()">取消</el-button>
                        </div>
                    </div>
                </div>
            </div>
   </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'

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
           chkDel:1 //谭层及删除值
       }
   },
   computed:{
        ...mapState( //store.state数据
            // ["todoLists"],
            {
                newLists   : state => state.newLists, //新的计划数据
                todoLists  : state => state.todoLists, //原有计划数据
                curVal     : state => state.curVal, //选项判定值
                residence  : state => state.residence
            }
        ),
        completeNum(){ //已经完成的计划数量
            return this.todoLists.filter(item => {
                return item.status //status为true的数量
            }).length
        }
   },
   methods:{
       //( 添加计划数据 )
       addListItem(){
           if(!this.inputVal){
               alert('未輸入計畫')
               return
           }
           this.$store.dispatch({ //分发给vuex actions
                type:'addListItem',
                input:this.inputVal //传入input输入值
           })
           this.inputVal = ''
       },
       //删除按钮 打开弹层
       openDialig(index){ 
           this.delView.jmp = true //打开删除mask
           this.chkDel = index //分发索引给chkDel
       },
       ...mapActions({
           //删除该笔数据
            del(){ 
                this.delView.jmp = false //关闭删除mask
                    console.log('9999',this.chkDel)

                this.$store.dispatch({
                    type  :'reduceList',
                    index : this.chkDel
                })
            }
       }),
       filterList(val){ //判断所有/已完成/未完成 切换
             this.$store.dispatch({
                type    :'chgList',
                keys  : val
            })
       },
       cancel(){ //取消删除
           this.delView.jmp = false //关闭删除mask
       }
   },
   mounted(){ //DOM载入完成调用
       //第一次进来 载入初始数据
       this.filterList(this.curVal)
   }
}
</script>

<style scoped lang="scss">
ul.item_w3 li{
    display:inline-block;
    width:33.3333%;
    height:40px;
    line-height:40px;
}
ul.item_w3 li a{
    display:block;
    color:#fff;
    text-align:center;
    background-color:#999;
}
ul.item_w3 li a:hover{
    background-color:#666;
}
.panel-body{
    border:1px solid #cdcbcb;
}
.input-group-btn{
    width:20%;
    margin:18px 0 0 0;
    float:right;
}
.input-group input{
    margin:20px 0 20px 30px;
    width:75%;
    height:48px;
}
ul.list-group{
    overflow:hidden;
}
ul.list-group li{
    margin:0 25px;
    border-bottom:1px solid #cdcbcb;
    padding:25px 0;   
}
ul.list-group li:last-child{
    margin:0 25px 30px 25px;
}
ul.list-group li input{
    float:left;
    width:18px;
    height:18px;
    margin-left:30px;
}
ul.list-group li a{
    float:right;
    width:100px;
    height:30px;
    text-align:center;
    color:#fff;
    line-height: 30px;
    margin-right:30px;
    background-color:#000;
    cursor:pointer;
}
ul.list-group .list-group-Num{
    font-size:18px;
    padding: 0 15px 0 0;
}
ul.item_w3 li{
    border:1px solid #fff;
}
.line-trough{
    color:#ff0000;
    font-weight:600;
    text-decoration:line-through;
}
</style>