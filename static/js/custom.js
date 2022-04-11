(function ($) {

  "use strict";

    // PRE LOADER
    // setTimeout(() => {
    // }, 500);
    // $(window).load(function(){
    // });

    // $(function(){
    //   $('.preloader').fadeOut(1000); // set duration in brackets    
    // });

    //Navigation Section
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplay:true,
    })

    // PARALLAX EFFECT
    $.stellar();

    // SMOOTHSCROLL
    $(function() {
      $('.preloader.mainpre').fadeOut(1000); // set duration in brackets
      $('.navbar-default a, #home a, footer a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top - 49 }, 1000);
            event.preventDefault();
      });
    });  

    // WOW ANIMATION
    new WOW({ mobile: false }).init();

    $('.team-thumb').on('mouseenter',function () {
      $(this).stop().animate({'bottom':'10px'} , 350)
    }).on('mouseleave',function () { 
      $(this).stop().animate({'bottom':'0'},350)
    })

})(jQuery);