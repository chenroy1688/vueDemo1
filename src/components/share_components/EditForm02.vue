<template>
    <div class="pc_wrap">
        {{ model }}
        <!-- 提取弹层组件 -->
        <!-- <el-dialog
            :title="title"
            :visible="visible"
            @update="handleVisibleChange"> -->
        
            <el-form ref="EditForm" :model="form" :rules="rules">
                <el-form-item label="序号" prop="id">
                    <el-input v-model="form.id"/>
                </el-form-item>
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="form.name"/>
                </el-form-item>
                <el-form-item label="出生日其" prop="birthday">
                    <el-input v-model="form.birthday"/>
                </el-form-item>
                <el-form-item label="设备名称" prop="system">
                    <el-input v-model="form.system"/>
                </el-form-item>
                <el-form-item label="公司地址" prop="vender">
                    <el-input v-model="form.vender"/>
                </el-form-item>
                <el-form-item label="所在地区" prop="city">
                    <el-input v-model="form.city"/>
                </el-form-item>
            </el-form>
            
            <!-- 控制项 -->
            <!-- <template>
                <el-button @click="handleVisibleChange(false)">取消</el-button>
                <el-button type="primary" @click="handleSave">保存</el-button>
            </template> -->
        <!-- </el-dialog> -->
      
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
       // 回显数据
        model: {
            type: Object,
            default: null
        }
   },
   data(){
       return{
            // 新增_编辑共用弹匡 --------------------------------------------->
            form:{
                id:'',
                name:'',
                birthday:'',
                system:'',
                vender:'',
                city:''
            },
            rules:{
                id:{require:true,message:'请输入序号',trigger:'blur'},
                name:{require:true,message:'请输入姓名',trigger:'blur'},
                birthday:{require:true,message:'请输入出生日其',trigger:'blur'},
                system:{require:true,message:'请输入设备名称',trigger:'blur'},
                vender:{require:true,message:'请输入公司地址',trigger:'blur'},
                city:{require:true,message:'请输入所在地区',trigger:'blur'},
            }
       }
   },
   watch:{ //监听 编辑时回显表单
      model(employeeInfo) {
        this.form = {...employeeInfo} // 简单的浅克隆
      }
   },
   mounted(){
   },
   methods:{
            // handleSave() {
            //     // 表单验证 返回父层数据 返回true or false
            //     this.$refs.EditForm.validate((valid) => { 
            //         if (valid) {
            //             this.$emit('save', this.form) //将更新后数据回传给父层'save'
            //             this.form = {} //清空数据
            //         }
            //     })
            // },
            // handleVisibleChange(value) { //双向绑定父层:visible.sync 
            //     // console.log('val',value)
            //     this.$emit('update:visible', value)
            // },
            
            // 对外暴露获取数据的方法，内部进行表单的校验，父组件中通过refs调用
            getValue() {
                return new Promise((resolve, reject) => {
                    this.$refs.EditForm.validate((valid) => {
                        if (valid) {
                            resolve({...this.form})
                        } else {
                            reject('表单校验没通过，可以抛出一个异常')
                        }
                    })
                })
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