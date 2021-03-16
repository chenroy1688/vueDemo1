<template>
    <!-- back to top -->
    <div class="pc_wrap">
        <el-row>
            <el-col :span="24" class="contnet_main_topic topicOne NumberPosition1">
                <span>所有组件功能</span>
                <span>All Components</span>
            </el-col>
        </el-row>

        <!-- 弹筐 --------------------------------- -->
        <EditForm
            title="新增数据"
            :visible.sync="showAddForm"
            @save="handleAddEmployee"
        />
        <EditForm
            :model="tableData2"
            title="编辑数据"
            :visible.sync="showEditForm"
            @save="handleEditEmployee"
        />
        <el-row class="searchBox">
            <el-col :span="4">
                <el-input v-model="txtInput" placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="20">
                <el-button type="success">查寻</el-button>
                <el-button type="primary" @click="addNew">新增</el-button>{{ txtInput }}
            <!-- <el-button type="primary" @click="editNew">编辑</el-button> -->
            </el-col>
        </el-row>
        <!-- <div>
            <ul class="dataUl">
                <li v-for="(value,index) in editFormData" :key="index">
                    <span>{{ index }}</span> -- {{ value }}
                </li>
            </ul>
        </div> -->
        <!-- 操作表格 -->
        <el-table :data="tableData2" :row-class-name="tableRowClassName">
            <el-table-column prop="cid" label="编号" width="250"></el-table-column>
            <el-table-column prop="name" label="姓名" width="220"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column label="操作" width="220">
                <el-button type="primary" @click="editNew(tableData2)">编辑</el-button>
                <el-button type="danger">删除</el-button>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
import EditForm from './EditForm' //弹层

export default {
    components:{
        EditForm
    },
   data(){
       return{
        // 新增_编辑共用弹匡 --------------------------------------------->
        showAddForm: false, // 是否显示编辑表单
        showEditForm: false, // 是否显示新增表单
        editFormData:{},
        txtInput:'',
        tableData2: [
            {
                cid: '1',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
            }, {
                cid: '2',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }
        ]
       }
   },
   mounted(){
   },
   methods:{
       //新增数据
       handleAddEmployee(employeeInfo){
            console.log('新增數據',employeeInfo)
            var {cid,name,address} = employeeInfo //解构
            //验证
            if(!cid || !name || !address){
                alert('請填入完整數據!!')
                return
            }

            this.tableData2.push(
                { 
                    cid : cid,
                    name : name,
                    address : address
                }
            )
            this.showAddForm = false
       },
       //编辑更新数据
       handleEditEmployee(employeeInfo){
           console.log('子组件传回的更新数据',employeeInfo)
            this.tableData2 = employeeInfo
            this.showEditForm = false
       },
       addNew(){
           this.showAddForm = true
       },
       editNew(tableData2){
           this.showEditForm = true
           var {cid,name,address} = tableData2
           console.log(tableData2)

           this.editFormData = {
               cid : cid,
               name: name,
               address:address
           }
           
       },
       tableRowClassName({row,rowIndex}){  //栏位表格颜色
           if(rowIndex === 1){
               return 'warning-row'
           }else if(rowIndex === 3){
               return 'success-row'
           }
           return ''
       }
   }
}
</script>

<style>
/* ------------------------------
        goto top 
------------------------------ */
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