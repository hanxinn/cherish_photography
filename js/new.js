$(document).ready(() => {
    $('#switch-menu').click(function(e){
      //避免 a 標籤會觸發
      e.preventDefault();
      //展開或收起來
      $('.mb-menu').slideToggle(600);
      
    })
    $('.mb-menu li a').click(function(e){
      
      //收起來
      $('.mb-menu').slideUp(600);
     
    })
  });