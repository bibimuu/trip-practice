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
  
});