$(document).foundation();

// $('.carousel').slick( {
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: false,
//   dots: true,
//   speed: 500,
//   autoplaySpeed: 10000,
//   cssEase: 'ease'
// });

$(document).ready(function(){

  // Scroll
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  $('.img-slider').slick( {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    speed: 500,
    autoplaySpeed: 10000,
    cssEase: 'ease'
    // centermode: true,
    // variableWidth: true

  });
});
