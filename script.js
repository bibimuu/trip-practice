$(document).ready(function () {
  $('.btn').hover(function() {
    $(this).css('background-color', '#f89238');
  }, function() {
    $(this).css('background-color', '#f0a462a6');
  });

  $('.header-list li').hover(function() {
    $(this).css('border-bottom', '#f89238 solid 3px');
  }, function() {
    $(this).css('border-bottom', 'none');
  });

  
  $('.info').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: 20,
 　　arrows: false,
    dots: true,
    dotsClass: 'slide-dots',
    });

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
});