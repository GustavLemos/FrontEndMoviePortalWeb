//carousel    
$(document).ready(function(){
    var slideNum = $('.carousel-inner .carousel-item').length;
    var randomNum = Math.floor(Math.random() * slideNum) + 1;
    var randomNumIndex = randomNum - 1;
    $('.carousel').carousel( randomNumIndex );
    $('.carousel-item').removeClass('transparent');
});
//remove video carousel in mobile screen 
$(document).ready(function(){
  if ($(window).width() <= 750){
      
    $('#video').remove();
    $('#video-1').remove();
    $('#video-2').remove();

      }
    });
