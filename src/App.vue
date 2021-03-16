<template>
    <!-- SPA 外层框架 -->
    <div id="app" class="total_wrap"> 
        <!-- header -->
        <transition name="fade" mode="out-in">
            <router-view name="header"></router-view>
        </transition>
        <!-- 右侧新闻资料区 -->
        <router-view name="rightmenu" style="display:none"></router-view>

        <!-- contnet & aside 中间content -->
        <div class="total_content">
            <!-- 左侧下拉选项 -->
            <transition name="fade" mode="out-in">
                <router-view name="leftAside" class="aside_wrap"></router-view>
            </transition>
            <!-- 主要content -->
            <!-- 所有match 到的组件 都能被缓存 -->
            <keep-alive exclude="Detail">
                <transition name="fade" mode="out-in">
                    <router-view class="total_content_inside" v-if="$route.meta.keepAlive"></router-view>
                </transition>
            </keep-alive>
            <transition name="fade" mode="out-in">
                <router-view class="total_content_inside" v-if="!$route.meta.keepAlive"></router-view> 
            </transition>
        </div>
        
        <!-- footer_体育图片区 -->
        <transition name="fade" mode="out-in">
            <router-view name="SportPic"></router-view>
        </transition>
        <!-- footer -->
        <transition name="fade" mode="out-in">
            <router-view name="foot"></router-view>
        </transition>
        <!-- back to top -->
        <transition name="fade" mode="out-in">
            <router-view name="gototop"></router-view>
        </transition>
    </div>
</template>

<script>
//@符号就是代表src路径， 所以@/components/navmenu就是src/components/navmenu。 这样webpack就知道如何引入文件了。
//这样做的好处是不必到处去写src了

//引入组件
// import Header from '@/components/Header.vue'

export default {
    name: 'app',
    data(){
      return{
        
      }
    },
    methods:{

    },
    components: {
      //注册组件
      // 'Header' : Header
    }
}
</script>

<style lang="scss">
// header{
//   height:400px !important;
//   padding: 0 !important;
// }
</style>
