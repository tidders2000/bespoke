
//control opening animation
function fadeMyDiv() {
    
    $("#intro").fadeOut(5000)
    $("#test").slideUp( 300 ).delay( 6000 ).fadeIn( 50 );
 
 };
     
  
        $(window).scroll(function() {
          if ($(this).scrollTop()>10)
           {
              $('.myDiv').hide();
              $('.carousel').hide();
           }
          else
           {
            $('.myDiv').show(600);
            $('.carousel').show(600);
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
//tooltip for scroll circle
var exampleEl = document.getElementById('example')
var tooltip = new bootstrap.Tooltip(exampleEl)
