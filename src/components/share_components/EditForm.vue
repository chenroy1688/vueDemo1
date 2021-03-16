<template>
    <div class="pc_wrap">
                {{ model }}
                <!-- 提取弹层组件 -->
                <el-dialog
                    :title="title"
                    :visible="visible"
                    @update="handleVisibleChange"
                >
                    <el-form ref="EditForm" :model="form" :rules="rules">
                        <el-form-item label="姓名" prop="name">
                            <el-input v-model="form.name"/>
                        </el-form-item>
                        <el-form-item label="身份证号码" prop="cid">
                            <el-input v-model="form.cid"/>
                        </el-form-item>
                        <el-form-item label="联系地址" prop="address">
                            <el-input v-model="form.address"/>
                        </el-form-item>
                    </el-form>

                    <!-- 控制项 -->
                    <template>
                        <el-button @click="handleVisibleChange(false)">取消</el-button>
                        <el-button type="primary" @click="handleSave">保存</el-button>
                    </template>
                </el-dialog>
      
    </div>
</template>

<script>
export default {
   name:'EditForm',
   props:{
       //是否显示表单
       visible:{
           type:Boolean,
           default:false
       },
       //弹层的title
       title:String,
       //回显数据
       model:{
           type:Object,
           default:null
       }
   },
   data(){
       return{
            // 新增_编辑共用弹匡 --------------------------------------------->
            form:{
                cid:'',
                name:'',
                address:''
            },
            rules:{
                name:{require:true,message:'请输入姓名',trigger:'blur'},
                cid:{require:true,message:'请输入身份证号',trigger:'blur'},
                address:{require:true,message:'请输入联系地址',trigger:'blur'}
            }
       }
   },
   watch:{ //监听 编辑时回显表单
        model(employeeInfo){
            this.form = { ...employeeInfo } //浅拷贝
        }
   },
   mounted(){
   },
   methods:{
            handleSave() {
                // 表单验证 返回父层数据
                this.$refs.EditForm.validate((valid) => {
                    console.log(valid)
                    if (valid) {
                        this.$emit('save', this.form) //将更新后数据回传给父层'save'
                    }
                })
            },
            handleVisibleChange(value) { //双向绑定父层:visible.sync 
                this.$emit('update:visible', value)
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
</style>