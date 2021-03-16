<template>
    <!-- right 直播列表 -->
				<div class="content">
            <div class="el_div">
                <button class="el-input" @click="slotClick">slot傳給同層</button>
            </div>
				</div>
</template>

<script>
//同层vue先建立bus实例 透过bus传值
import { bus } from '../../bus.js' 

export default {
	//父层绑定的v-bind资料
	props:{
	},
  data(){
    return{
        demo:{
            data:'来自busDemo.vue的子组件数据!!',
            count:20
        }
    }
   },
   methods:{    
     slotClick(){
       bus.$emit('chgDemo',this.demo.data)
     }
   },
   mounted(){ //Dom载入完成运行

   }
}
</script>

<style scoped lang="scss">
/* ------------------------------
   content
------------------------------ */
button.el-input{
  background-color:#ff0000;
}

</style>