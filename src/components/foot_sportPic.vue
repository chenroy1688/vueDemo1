<template>
    <div class="foot_sport">
    </div>
</template>

<script>
export default {
   data(){
       return{
           'isBg' : true
       }
   }
}
</script>

<style>
.foot_sport{
    clear:both; /* 清除浮动 */
    width:100%;
    height:250px;
    max-height:250px;
    background:url('../assets/image/foot_sport.jpg') 100% center no-repeat;
    background-size:cover;
}
</style>