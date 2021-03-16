<template>
    <!-- back to top -->
    <div id="gotop">
        <div class="circle"><span></span></div>
    </div>
</template>

<script>
export default {
   data(){
       return{
            zipCode:"最多测试页面测试页面"
       }
   },
   mounted(){
     //back to top
      let fixedTop = $('#gotop');
      fixedTop.on('click', function () {
          $('html, body').animate({scrollTop: '0'}, 500);
      });
      
      //top button fadeOut
      $(window).on('scroll',function(){
          $(window).scrollTop() > 200 ? fixedTop.fadeIn() : fixedTop.fadeOut();
      })

   }
}
</script>

<style>
/* ------------------------------
        goto top 
------------------------------ */
#gotop {
  position: fixed;
  top:800px;
  right:100px;
  /* margin-left: -36px; */
  cursor: pointer;
}
#gotop .circle {
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  margin: 0 auto;
}
#gotop .circle span {
  position: absolute;
  background-color: white;
  background-image: url("../../assets/image/tops.png");
  width: 58px;
  background-repeat: repeat-y;
  height: 58px;
  background-position: 50% -2px;
  background-size: 58px;
  border: 3px solid #c0bebe;
  border-radius: 50%;
  top: 6px;
  left: 6px;
  /* transform: rotate(0); */
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
#gotop:hover .circle span {
  background-position: 50% -46px;
  border: 3px solid #000;
}
#gotop:hover .circle span {
  width: 86px;
  height: 86px;
  top: -8px;
  left: -8px;
}
</style>