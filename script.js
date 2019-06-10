$(document).ready(function () {
// make your tripとバナーのホバー
  $('.btn').hover(function() {
    $(this).css('background-color', '#f89238');
  }, function() {
    $(this).css('background-color', '#f0a462a6');
  });

  $('.header-list li a').hover(function() {
    $(this).css('border-bottom', '#f89238 solid 2.5px');
  }, function() {
    $(this).css('border-bottom', 'none');
  });

// お知らせのスライダー
  $('.info').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: 20,
 　　arrows: false,
    dots: true,
    dotsClass: 'slide-dots',
    });

  // 検索
  $("#btn2").click(function() {
    if($("#search-query").val() == "") {
      alert("入力してください")
      return false;
    }
    const base_url = 'https://www.google.com/search?q='
    const search_query = $("#search-query").val()
    const result_url = base_url + search_query
    window.open(result_url, '_blank');
  });

  // バナー
  $('.js--main-info').waypoint(function(direction){
    if(direction=="down") {
      $('nav').addClass('stickynav');
    } else {
      $('nav').removeClass('stickynav');
    }
  },{
    offset: '60px;'
  }
  );

  // make your tripボタンスクロール
  $('.js--btn').click(function(){
    $('html, body').animate({scrollTop: $('.js--main-choice').offset().top},1000);
  });

  // a要素のスクロール
  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });

  // media queryのバナー
  $('.js--menu').click(function(){
    var nav = $('.js--header-list');
    var icon = $('.header-list');
    var name = $("#menu").prop("name");
    if(name=="menu")
    {
      $('ion-icon[name="menu"]').attr('name', 'close');
    } else {
      $('ion-icon[name="close"]').attr('name', 'menu');
    }
    nav.slideToggle(200);
  });
});


2
3
4
5
6
7
8
// 9
// <body>
//     <input type="text" name="user-name">
 
//     <script>
//         var value = $('input[name="user-name"]').attr('name', 'new-user');
 
//         console.log( value[0] );
//     </script>
// </body>