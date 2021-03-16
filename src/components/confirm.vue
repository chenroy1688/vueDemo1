<template>
    <div>
        <transition name="vue-dialog">
            <!-- check mask area -->
            <div class="vue-dialog-mask" v-if="isShow">
                <div class="vue-dialog-wrapper">
                    <!-- 确认视窗 -->
                    <div class="vue-dialog">
                              <!-- checkBar head -->
                              <div v-if="options.title" class="vue-dialog-title" :style="options.title.isStyle">
                                  <h5>{{ options.title.text }}</h5>
                                  <!-- 视窗右上角 关闭 -->
                                  <i class="vue-icon" @click="cancel">Ｘ</i>
                              </div>
                              <!-- checkBar tip area -->
                              <div v-if="!!options.content" class="vue-dialog-content" :style="options.content.style" v-html="options.content.text"></div>
                              <!-- checkBar tip area -->
                              <div v-if="options.btns" class="vue-dialog-btns">
                                  <button v-for="(item,index) in options.btns" @click="callback(index)">{{ item }}</button>
                              </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
   props:['isShow','options','callback'],
   data(){
       return{
            mig:""
       }
   },
   methods:{
     cancel(){
       this.$emit("update:isShow", false)
     }
   },
   mounted(){

   }
}
</script>

<style>
/* ------------------------------
        confirm setting
------------------------------ */
.bosss {
  border: 1px solid #ff0000;
}


/* 确认弹窗设定 */
.vue-dialog-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity 0.3s ease;
}

.vue-dialog-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.vue-dialog {
  width: 30%;
  margin: 0px auto;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: "microsoft yahei";
}

.vue-dialog-title {
  height: 40px;
  padding: 0px 10px;
  line-height: 40px;
  color: #fff;
  background-color: #000;
}

.vue-dialog-title h5 {
  margin: 0;
  padding: 0;
  float: left;
}

.vue-dialog-title i {
  float: right;
  font-size: 20px;
}

.vue-dialog-content {
  font-size: 15px;
  padding: 30px 15px;
}

.vue-dialog-btns {
  display: flex;
  flex-flow: row;
  text-align: center;
}

.vue-dialog-btns button {
  flex: 1;
  border: none;
  outline: none;
  padding: 10px 0px;
  background-color: #fff;
  border-top: 1px solid hsl(0, 0%, 92%);
  border-right: 1px solid hsl(0, 0%, 92%);
}

.vue-dialog-btns button:active {
  background: #ecf0f1;
}

.vue-dialog-btns button:last-child {
  border-right: none;
}
/*过渡效果*/
.vue-dialog-enter,
.vue-dialog-leave {
  opacity: 0;
}

.vue-dialog-enter .vue-dialog,
.vue-dialog-leave .vue-dialog {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.vue-icon,..vue-dialog-btns button{
  cursor: pointer;
}

.cofirmTxt{
  color:#0000ff;
}

</style>