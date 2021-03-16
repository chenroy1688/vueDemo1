<template>
   <div class="pc_wrap">
            <div class="">
                <!-- 主标题 -->
                    <el-row>
                        <el-col :span="24" class="contnet_main_topic topicOne NumberPosition1">
                            <span>增删改查</span>
                            <span>Form_Two</span>
                        </el-col>
                    </el-row>

                    <!-- <div id="demo">
                        <el-button type="success" @click="show = !show">toggle</el-button>
                        <transition name="fade">
                            <p v-if="show">Hello</p>
                        </transition>
                    </div> -->

                    <!-- 计划head -->
                    <el-row>
                        <el-col :span="24" class="panel-heading">
                            <!-- 功能说明 -->
                            <el-row class="el_row">
                                <el-col :span="8" class="el-div">
                                    <h1 class="topic">
                                        <span class="icon-display"></span>
                                        表单实现增删改查功能
                                    </h1>
                                </el-col>
                                <el-col :span="16" class="el-div topic_info">
                                    <ul>
                                        <li>> 功能练习 : 表单实现增删改查功能</li>
                                        <li>> 数据调用 : Mock模拟api数据</li>
                                        <li>> 使用功能 : HTML5,CSS3,scss,封装axios,Mock,vuex</li>
                                    </ul>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>

                    <!-- 表格 新增输入 -->
                    <el-row class="form_head">
                        <el-col :span="24" class="S_introduce_div">
                            <input type="text" placeholder="标题" class="s_introduce_input" v-model="form.formTitle"/>
                            <input type="text" placeholder="发布人" class="s_introduce_input" v-model="form.formUser"/>
                            <!-- elm ui dataPicker -->
                            <template> <!-- value-format 返回的日其格式 -->
                                <div class="TimePicker">
                                    <el-date-picker
                                    v-model="form.formTime"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="年/月/日">
                                    </el-date-picker>
                                </div>
                            </template>
                            <el-button type="primary" @click="addNew()">新增</el-button>
                        </el-col>
                    </el-row>
                    <!-- 表格 -->
                    <div class="data_div">
                        <table class="data_tab comminTab bosGreay">
                            <thead>
                                <th width="7%">序号</th>
                                <th width="">标题</th>
                                <th width="15%">发布人</th>
                                <th width="15%">发布时间</th>
                                <th width="20%">操作</th>
                            </thead>
                            <tbody>
                                <tr v-for="(item,index) in trueLists" :key="index">
                                    <td>{{ index + 1}}--{{item.id}}</td>
                                    <td>{{ item.title }}</td>
                                    <td>{{ item.user }}</td>
                                    <td>{{ item.date }}</td>
                                    <td>
                                        <el-button type="success" @click="btnEdit(item)">编辑</el-button> <!-- 参数传入整比对象数据 -->
                                        <el-button type="danger" @click="delData(index)">删除</el-button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- 编辑数据 chk弹层 -->
                    <div role="dialog" class="mask" id="layer" v-if="delView.jmp">
                        <!-- 编辑 -->
                        <div class="del-dialog jmpView bosss">
                            <div class="del-content">
                                <div class="del-header">
                                    <h4 class="del-title">编辑数据</h4>
                                </div>
                                <div class="edit_content">
                                    <!-- 绑定编辑数据 -->
                                    <input type="text" placeholder="标题" v-model="editData.title">
                                    <input type="text" placeholder="发布人" v-model="editData.user"/>
                                    <!-- elm ui dataPicker -->
                                    <template>
                                            <el-date-picker
                                            v-model="editData.date"
                                            type="date"
                                            value-format="yyyy-MM-dd"
                                            placeholder="年/月/日">
                                            </el-date-picker>
                                    </template>
                                </div>
                                <div class="del-body text-right">
                                    <el-button type="primary" icon="el-icon-delete-solid" data-dismiss="modal" @click="update()">更新</el-button>
                                    <el-button type="primary" icon="el-icon-edit-outline" data-dismiss="modal" @click="btnCencel()">取消</el-button>
                                </div>
                            </div>
                        </div> <!-- end of 编辑 -->
                    </div> <!-- end of chk弹层 -->

            </div>
   </div><!-- end of pc_wrap -->
</template>

<script>
//请求分页数据 https://jsonplaceholder.typicode.com/posts/1/comments
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
//引入mock模拟数据
import Mock from '../../mock'

export default {
    components:{
    },
   data(){
       return{
            show:false,
            newTodoText:'',
            inputVal:'', //v-model绑定
            isComplete:true,
            delView:{ //删除弹层 chk
               jmp:false, 
               chkDel:1 //谭层及删除值
            },
            checkAll:false, //全选状态
            form:{ //input输入值绑定
                formTitle:'',
                formUser:'',
                formTime:''
            },
            trueLists:[
                {id:1,title:'NBA即将重新开赛',user:'王大哥',date:'2020-05-29'},
                {id:2,title:'乔丹宣布复出。之后，乔丹带领公牛再次实现三连冠',user:'陈伟',date:'2020-05-29'}
            ],
            editData:{} //弹层编辑数据
       }
   }, 
   computed:{
        ...mapState( //store.state数据
            ["todoLists","newLists","curVal","residence","tableData"],
        )
   },
   methods:{
       //获取mock模拟接口数据
       getMockApi(){ 
           this.$http.get('/api/users')
           .then(res => {
               console.log('res',res.data)
           })
           .catch(res => {
               console.log('请求错误!!')
           })
       },
       //新增数据
       addNew(){
           if(!this.form.formTitle || !this.form.formUser || !this.form.formTime) return 
           //取出当前数据id最大值在+ 1
           var _id = Math.max(...this.trueLists.map(item => item.id)) + 1
           console.log('_id',_id)

           this.trueLists.unshift(
               {
                   id: _id, 
                   title: this.form.formTitle,
                   user: this.form.formUser,
                   date: this.form.formTime
               }
           )
           this.form = {} //清空
       },
       delData(index){ //删除
           this.trueLists.splice(index,1)
       },
       btnEdit(item){ //编辑弹层
        this.delView.jmp = true //打开弹层
        //因为浅拷贝 原始数据会被同步更改 需重新赋值解决...
        var {title,user,date,id} = item
        this.editData = { 
            id    : id,
            title : title,
            user  : user,
            date  : date
        }
       },
       btnCencel(){ //取消弹层
            this.delView.jmp = false
       },
       update(){ //更新数据
            for(var i = 0; i < this.trueLists.length; i++){
                //判断id是否相同
                if(this.trueLists[i].id == this.editData.id){
                    this.trueLists[i] = this.editData;
                    this.delView.jmp = false
                }
            }
       }
   },
   mounted(){ //DOM载入完成调用
    this.getMockApi() //mock接口
   }
}
</script>

<style scoped lang="scss">

</style>