<template>
    <!-- 备忘列表 -->
    <li class="el_div">
            <input type="checkbox" >
            <!-- 备忘列表数据 -->
          
            <input type="text">
            <!-- 编辑及删除备忘 -->
            <el-button type="warning" icon="el-icon-edit">编辑</el-button>
            <el-button type="warning" icon="el-icon-delete">删除</el-button>
    </li>
</template>

<script>
export default {
  props:['todo','index','filter'],
   data(){
       return{
            zipCode:"最多测试页面测试页面"
       }
   },
   methods:{
    
   }
}
</script>

<style scoped lang="scss">
/* ------------------------------
         
------------------------------ */
.todolist_item{
    padding:15px 0; 
    border-bottom:1px solid #d3d3d3;
    &:first-child{
        padding:0 0 15px 0;
    }
}
.el-checkbox{
    /deep/ .el-checkbox__inner{
        width:18px;
        height:18px;
        border:1px solid #409eff;
    }
}
.completed{
  font-size:16px;
  font-weight: 600;
  color:#ff0000;
  text-decoration:line-through
  }
</style>