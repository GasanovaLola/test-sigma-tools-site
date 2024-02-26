$('.responsive').slick({
    dots: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(document).ready(function(){
    $('.slider').slick({
        dots: true, // Add Dots to Bottom of Slide
        autoplay: true, // Makes Slide Auto-Slide
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
    });
  });

$(window).ready(function() {
    $(".div-hero").fadeIn('slow');
});
const toggle = document.getElementsByClassName("navbar-toggle");
  
toggle[0].addEventListener("click", function(event) {
    event.preventDefault();
    this.classList.toggle("is-active");
});
const closeNavbarMobile = document.getElementsByClassName("close");