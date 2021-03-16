<template>
    <!-- product -->
    <div class="contact_wrap">
       <div class="">
            <h1>隐私政策 / PRIVACY</h1>
            <p>
                中華隊在12強賽以第五名作收，讓獲得亞軍的勁敵南韓收下明年東京奧運門票，中華隊只能
                續戰明年4月的六搶一資格賽，由於屆時各國職棒已經開打，如何拼湊堅強的國家隊陣容成為
                難題，像是這次獲得大會最佳投手獎和防禦率王的張奕，母隊日職歐力士就透露放行有困難。
            </p>
            <p>
                中華隊在12強賽以第五名作收，讓獲得亞軍的勁敵南韓收下明年東京奧運門票，中華隊只能
                續戰明年4月的六搶一資格賽，由於屆時各國職棒已經開打，如何拼湊堅強的國家隊陣容成為
                難題，像是這次獲得大會最佳投手獎和防禦率王的張奕，母隊日職歐力士就透露放行有困難。
            </p>
            <p>
                中華隊在12強賽以第五名作收，讓獲得亞軍的勁敵南韓收下明年東京奧運門票，中華隊只能
                續戰明年4月的六搶一資格賽，由於屆時各國職棒已經開打，如何拼湊堅強的國家隊陣容成為
                難題，像是這次獲得大會最佳投手獎和防禦率王的張奕，母隊日職歐力士就透露放行有困難。
            </p>
        </div>
   </div>
</template>

<script>

export default {
   data(){
      return{
          content:'做个测试我来测试还是测试做个测试我来测试还是测试做个测试我来测试还是测试'
      }
   },
   methods:{
      
   }
}
</script>

<style scoped lang="scss">
   button{
      padding:15px;
      color:#000;
      font-size:16px;
      border:1px solid #000;
   }
   .content{
      background-color:#fff;
      padding:25px;
      margin: 0 0 20px 0;
      border:1px solid #999;
      box-shadow: 3px 3px 5px #999;
   }
   .contact_wrap h1{
      color:#ff0000;
      padding:0 0 20px 0;
   }
   .contact_wrap p{
       line-height:24px;
   }
   .contact_wrap p ~ p{
      margin-top:20px;
   }
   .content p{
      color:#999;
      padding:12px 0;
   }

   .fade-enter-active, .fade-leave-active {
   transition: opacity .5s;
   }
   .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
   opacity: 0;
   }
</style>