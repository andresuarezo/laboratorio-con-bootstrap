(function($) {
  "use strict";

$('#cuerpo').scrollspy({
  target: '#mainNav',
  offset: 0
});

// Collapse Navbar
var navbarCollapse = function() {
  if ($("#mainNav").offset().top > 0) {
    $("#mainNav").addClass("mia");
    
  }else{
    $('#mainNav').removeClass("mia");
    
   
  } 
};

var navbarCollapseSecond = function() {
  if ($("#mainNav").offset().top > 155) {
    
    $("#mainNav").addClass("final");
    $('#mainNav').removeClass("inicial");

   
   
  }
  else {
   
    $('#mainNav').addClass('inicial');
    $("#mainNav").removeClass("final");
  }
  };




  navbarCollapse();

navbarCollapseSecond();
$(window).scroll(navbarCollapseSecond);

$(window).scroll(navbarCollapse);




// Collapse now if page is not at top

// Collapse the navbar when page is scrolled


})(jQuery);



