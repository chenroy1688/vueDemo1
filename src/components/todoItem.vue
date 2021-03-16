<template>
   <li>
       <input type="checkbox" v-model="checked">
       <slot name="itemss" v-bind="{ checked }"></slot>
       <slot name="title" v-bind="{ value }"></slot>
   </li>
</template>

<script>
export default {
   data(){
       return{
          checked : false,
          value : '说明title'
       }
   }
}
</script>

<style scoped>
    .item{
        color:#ff0000;
    }
    input[type="checkbox"]{
        width:20px;
        height:20px;
    }
</style>