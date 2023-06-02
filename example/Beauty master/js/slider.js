$(document).ready(function(){
    $('.gallery-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots:true,
  arrows: false,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  pauseOnFocus: true,
  swipe: true,
//   touchThreshold:2,
  touchMove: true,
  responsive:[
    {
        breakpoint: 850,
        settings:{
            slidesToShow: 2,
  slidesToScroll: 2,
        }
    },
    {
        breakpoint: 533,
        settings:{
            slidesToShow: 1,
  slidesToScroll: 1,
        }
    }
  ]
});
     });

    $(document).ready(function(){
    $('.testimonials-slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots:true,
  arrows: false,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  pauseOnFocus: true,
  swipe: true,
  touchThreshold:2,
  touchMove: true,
  responsive:[
   {
        breakpoint: 1024,
        settings:{
            slidesToShow: 1,
  slidesToScroll: 1,
        }
    }
  ]
});
     });
