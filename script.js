$(document).ready(function(){
    $(".fa-bars").click(function(){
      $("nav").slideToggle();
    });
    $("nav a").click(function(){
        $("nav a").removeClass("active");
        $(this).addClass("active");
        $("nav").slideUp();
    });
})

var swiper = new Swiper(".courseSwiper", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
  });