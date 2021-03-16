$(function() {
  // var _leftLi = $('ul.live_list li'),
      var _len = $('.idx_li a'),
      // _aside = $('.page-main > aside'),
      fixedTop = $('#gotop'),
      $overBtn = $('.data_box:first-child .date_icon button');

  //back to top
  // fixedTop.on('click', function () {
  //     $('html, body').animate({scrollTop: '0'}, 500);
  // });
  // //top button fadeOut
  // $(window).on('scroll',function(){
  //     $(window).scrollTop() > 200 ? fixedTop.fadeIn() : fixedTop.fadeOut();
  // })

  //左侧主选单 ----------------------------------------
  // $('.live_pic').hide().slideDown();

  // _leftLi.hide().each(function (index) {
  //   $(this).delay(300 * index).fadeIn(300);
  // }); 

//新闻－截断字串 ----------------------------------------
$.each(_len, function () {
  var txtLen = $(this).text().length,
      len = 20;

  if (txtLen > len) {
    $(this).text($(this).text().substring(0, len));
    $(this).html($(this).html() + '.....');
  }
}); 

// 右边新闻区收合 ----------------------------------------
// var $asidButton = _aside.find('.qq').on('click', function () {
//     _aside.toggleClass('open');

//     if (_aside.hasClass('open')) {
//       _aside.stop(true).animate({right: '-70px'}, 300, 'easeOutBack');
//       $asidButton.find('img').attr('src', 'arrow_right.png');
//     } else {
//       _aside.stop(true).animate({right: '-350px'}, 300, 'easeInBack');
//       $asidButton.find('img').attr('src', 'arrow_left.png');
//     };
// });

//开启 隐藏结束赛事 ----------------------------------------
    // $overBtn.click(function () {
    //   var alOver = $('.already_over').parents('.css_table');

    //   if (alOver.hasClass('is_over')) {
    //     alOver.fadeIn(300).removeClass('is_over');
    //     $overBtn.text('隱藏已結束賽事').css('background-color', '#0060ff');
    //   } else {
    //     alOver.fadeOut(300).addClass('is_over');
    //     $overBtn.text('開啟已結束賽事').css('background-color', 'red');
    //   }
    // }); 

});