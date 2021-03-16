<template>
    <el-row class="tac">
        <el-col :span="24">
                <el-menu 
                    default-active="2" 
                    class="el-menu-vertical-demo" 
                    @open="handleOpen" 
                    @close="handleClose"
                    unique-opened 
                    router 
                    collapse-transition
                    background-color="#666" 
                    text-color="#fff" 
                    active-text-color="#ffd04b">

                    <!-- submenu下拉菜单 -->
                    <el-submenu v-for="item in menu" :index="item.id" :key="item.id"> 
                        <template slot="title">
                            <i :class="item.iclass"></i>
                            <span>{{ item.name }}</span>
                        </template>
                        <!-- 下拉菜单 key值是必须唯一的，如果重复就会报错可以把key值改为index
                        （其实就是用索引做key值），就可以避免这个情况 -->
                        <el-menu-item-group class="over-hide" v-for="(sub,index) in item.sub" :key="index">
                            <el-menu-item :index="sub.componentName" v-text="sub.name"></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
        </el-col>
    </el-row>
    
</template>

<script>
//@符号就是代表src路径， 所以@/components/NavMenu就是src/components/NavMenu。 这样webpack就知道如何引入文件了。
//这样做的好处是不必到处去写src了
import menu from '@/config/menu-config'

export default {
   data(){
       return{
           menu : menu
       }
   },
   methods:{
       handleOpen(key,keyPath){
            console.log(key,keyPath)
        },
        handleClose(key,keyPath){
            console.log(key,keyPath)
        }
   }
}
</script>

<style lang="scss">
h5{
    padding:15px 0;
    text-align:center;
}
.menu{
    background-color:"#545c64";
    color:#fff;
}

.over-hide{
    overflow: hidden;
}

//调整aside li列表
.el-submenu__title{
    background-color:#d81e29 !important;
    border-bottom:1px solid #000;
    i{
        color:#fff !important;
    }
}
.el-menu-item-group__title{
    border-bottom:1px solid #999;
    padding:0 !important;
}
</style>