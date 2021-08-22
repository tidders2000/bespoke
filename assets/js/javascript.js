

function fadeMyDiv() {
    $("#intro").fadeOut(4000)
    $("#test").slideUp( 300 ).delay( 4000 ).fadeIn( 400 );
 
 }
$(document).ready(function() {
 fadeMyDiv();

 }
)
