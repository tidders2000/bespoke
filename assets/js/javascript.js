// 

function fadeMyDiv() {
    
    $("#intro").fadeOut(5000)
    $("#test").slideUp( 300 ).delay( 6000 ).fadeIn( 100 );
 
 };
        //  function showPage() {
        //   document.getElementById("loader").style.display = "none";
        //   document.getElementById("main").style.display = "block";
        // }
  
        $(window).scroll(function() {
          if ($(this).scrollTop()>100)
           {
              $('.myDiv').hide();
           }
          else
           {
            $('.myDiv').show();
           }
       });
 var $animation_elements = $('.animation-element');
 var $window = $(window);
 
 function check_if_in_view() {
   var window_height = $window.height();
   var window_top_position = $window.scrollTop();
   var window_bottom_position = (window_top_position + window_height);
  
   $.each($animation_elements, function() {
     var $element = $(this);
     var element_height = $element.outerHeight();
     var element_top_position = $element.offset().top;
     var element_bottom_position = (element_top_position + element_height);
  
     //check to see if this current container is within viewport
     if ((element_bottom_position >= window_top_position) &&
         (element_top_position <= window_bottom_position)) {
       $element.addClass('scale-in-top');
     } else {
       $element.removeClass('scale-in-top');
     }
   });
 }
 
 $window.on('scroll resize', check_if_in_view);
 $window.trigger('scroll');

$(document).ready(function() {
  setTimeout(() => {fadeMyDiv(); }, 1000);


 });
