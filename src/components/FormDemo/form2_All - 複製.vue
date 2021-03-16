<template>
   <div class="pc_wrap">
        <!-- 主标题 -->
            <el-row>
                <el-col :span="24" class="contnet_main_topic topicOne NumberPosition1">
                    <span>表单实现分页</span>
                    <span>Form_two</span>
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
                                表单实现分页功能
                            </h1>
                        </el-col>
                        <el-col :span="16" class="el-div topic_info">
                            <ul>
                                <li>> 功能练习 : 表单实现分页功能 (新增 / 编辑 / 删除 / 查询)</li>
                                <li>> 数据调用 : 使用Mock模擬api数据</li>
                                <li>> 练习 : HTML5,CSS3,Scss,axios,Vuex,Mock</li>
                            </ul>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

        <!-- 分頁列表 --------------------------------- -->
        <div class="c-main auth userControl">
            <!-- 头部信息 Start -->
            <el-row>
                <el-col :span="6" v-show="setShow">
                    <el-input size="mini" v-model="searchTxt" placeholder="请输入查询内容"></el-input>
                </el-col>
                <!-- <el-col :span="3">
      
                    <a @click="showSeach" class="searchA">
                        {{ setShowMsg }}
                        <i :class="{
                        'el-icon-arrow-down el-icon--right': styleArrow ,
                        'el-icon-arrow-up el-icon--right': setShow}"
                        ></i>
                    </a>
                </el-col> -->
                <el-col :span="4">
                    <el-button type="primary" size="small" >&nbsp;查询&nbsp;</el-button>
                    <el-button type="success" size="small" @click="addNew">&nbsp;新增&nbsp;</el-button>
                </el-col>
            </el-row>
            
                
            <!-- 表格 分页 -->
            <div class="c-earch-table">
                <!-- 分页 Start -->
                <el-table :data="list.slice((currentPage - 1) * pagesize, currentPage * pagesize)">
                    <el-table-column prop="id" label="序"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="birthday" label="出生日期"></el-table-column>
                    <el-table-column prop="system" label="设备名称"></el-table-column>
                    <el-table-column prop="vender" label="公司地址"></el-table-column>
                    <el-table-column prop="city" label="所在地区"></el-table-column>
                    <el-table-column label="查看">
                        <template slot-scope="scope">
                            <div>
                                <!-- <el-button type="warning">查看</el-button> -->
                                <el-button type="primary" @click="editNew">编辑</el-button>
                                <!-- scope.$index 传入索引, scope.row传入数组 -->
                                <el-button type="danger" @click="Del(scope.$index,scope.row)">删除</el-button>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div><!-- 列表 End -->

            <!-- 分页 按钮 -->
            <div class="t-center mt-15 paginationBox">
                <el-pagination
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage" 
                    :page-sizes="[5,10,20,50]"
                    :page-size="pagesize"
                    layout="total, sizes, prev, pager, next, jumper"
                    prev-text="上一页"
                    next-text="下一页"
                    :total="list.length">
                </el-pagination>
            </div>
            <!-- 分页 End -->
        </div> 

        <!-- 弹筐组件 (新增) -->
        <Dialog :visible.sync="showAddForm">
            <NewEditForm ref="EditForm"/>
            <template #footer>
                <ElButton @click="showAddForm = false">取消</ElButton>
                <ElButton type="primary" @click="handleAddEmployee">保存</ElButton>
            </template>
        </Dialog>

        <!-- 弹筐组件 (编辑) -->
        <ElDialog :visible.sync="showEditForm">
            <NewEditForm ref="AddForm" :model="editFormData"/>
            
            <template #footer>
                <ElButton @click="showEditForm = false">取消</ElButton>
                <ElButton type="primary" @click="handleEditEmployee">保存</ElButton>
            </template>
        </ElDialog>
        
         <!-- <EditForm
            title="新增数据"
            :visible.sync="showAddForm"
            @save="handleAddEmployee" 
        ></EditForm> -->
        <!-- <EditForm
            title="編輯數據"
            :visible.sync="showEditForm"
            @save="handleEditEmployee"
        ></EditForm> -->

   </div><!-- end of pc_wrap -->
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
import NewEditForm  from '@/components/share_components/EditForm02'
//引入mock模拟数据
import Mock from '../../mock'
//引入封装api接口
import { usersPage } from '@/api/api' 

export default {
    components:{
        NewEditForm  //弹筐组件
    },
   data(){
       return{
            //分页数据 -------------------------- >
            list:[],
            searchTxt:'',
            currentPage:1, //当前的页数 
            pagesize:5, //每页展示笔数
            setShow:false, 
            styleArrow:true, 
            setShowMsg:'开启查询',
            setContent:'',
            setTitle:'',

            // 新增_编辑共用弹匡 ----------------- >
            showAddForm:false, // 控制显示编辑弹筐
            showEditForm:false, // 控制显示新增弹筐
            editFormData:{},
            txtInput:''
       }
   }, 
   computed:{
    
   },
   methods:{
    //取得用户数据
        gUser(){ //取得分页数据
            this.$http.get('/api/paginationData')
            .then(res => {
                console.log(res.data)
                this.list = res.data.list
            })
            .catch(res => {
                console.log('error')
            })
        },
        //新增一笔数据
        handleAddEmployee() {
            this.$refs.AddForm.getValue()
            .then((employeeInfo) => {
                // 调用添加接口
                console.log('addddd',employeeInfo)
            })
            .catch((error) => {
                // 处理表单验证失败
                console.log('error')
            })
        },
        //编辑一笔数据
        handleEditEmployee() {
            this.$refs.NewEditForm.getValue()
            .then((employeeInfo) => {
                // 调用编辑接口
                console.log('editttt',employeeInfo)
            })
            .catch((error) => {
                // 处理表单验证失败
                console.log('error')
            })
        },
        //每页显示的数据笔数
        handleSizeChange(size){ 
            this.pagesize = size
            console.log(`每页${size}条`)
        },
        //切换页数 显示当下页数
        handleCurrentChange(currentPage){
            this.currentPage = currentPage
            console.log(`当前页${currentPage}`)
        },
        //编辑数据
        // handleShowEditDialog(){ 
        //     this.$router.push({
        //         path:'/edit'
        //     })
        // },
        editNew(){
            this.showEditForm = true
        },
        addNew(){
            this.showAddForm = true
        },
        //删除数据
        // Del(index,row){ 
        //     console.log('indexxxx',index,row.id)

        //     this.setContent = '删除后数据将无法恢复,是否继续?'
        //     this.setTitle = '提示'

        //     //验证删除提示
        //     this.$confirm(this.setContent, this.setTitle, {
        //             confirmButtonText: '确定',
        //             cancelButtonText: '取消',
        //             type: 'warning'
        //         //确认后执行
        //         }).then(() => { 
        //             this.$message({
        //                 type: 'success',
        //                 showClose: true,
        //                 message: '恭喜您，' + this.setTitle + '成功！'
        //             });
        //             //删除该笔数据
        //             this.list.splice((row.id - 1),1)
        //         }).catch(() => { //取消
        //             this.$message({
        //                 type: 'info',
        //                 message: '已取消'
        //             });
        //         });
        // },
        // showSeach(){ //更多条件查询
        //     const msg = this.setShowMsg;

        //     if(msg === '开启查询'){
        //         this.setShow = true
        //         this.styleArrow = false
        //         this.setShowMsg = '关闭查询'
        //     }else{
        //         this.setShow = false
        //         this.styleArrow = true
        //         this.setShowMsg = '开启查询'
        //     }
        // }
   },
   mounted(){ //DOM载入完成调用
    this.gUser()
   }
}
</script>

<style scoped lang="scss">
/* ------------------------------
        goto top 
------------------------------ */
.userControl{
    margin-top:25px;
}
.c-earch-table{
    margin-top:20px;
    .show-underline{
        padding:4px;
        border:1px solid #999;
    }
}
.paginationBox{
    margin:30px auto;
    text-align:center;
}
a.searchA{
    display:block;
    padding:8px;
    text-align:center;
    color:#ff0000;
    cursor:pointer;
}
a.searchA:hover{
    color:#0000ff;
}
.el-pagination .btn-next span,
.el-pagination .btn-prev span{
    color:#ff0000; 
    border:1px solid #ff0000;
}


.commons h1{
    position:relative;
    font-size:16px;
    padding:0 0 20px 20px;
}
.commons h1:before{
    content:'+';
    position:absolute;
    top:-3px;
    left:0;
    font-size:20px;
    color:#ff0000;
}

.searchBox{ margin-bottom:20px; }
.dataUl{
    margin-top:40px;
}
.dataUl li{
    display:block;
    height:40px;
    font-size:14px;
    line-height: 40px;
    border-bottom:1px solid var( --main-bosGray );
}
.dataUl li span{
    color:#ff0000;
}

.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>