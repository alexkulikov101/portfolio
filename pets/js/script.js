var navMain = document.querySelector('.nav__main');
var navToggle = document.querySelector('.nav__button');

navMain.classList.remove('nav__main--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav__main--close')) {
    navMain.classList.remove('nav__main--close');
    navMain.classList.add('nav__main--open');
  } else {
    navMain.classList.add('nav__main--close');
    navMain.classList.remove('nav__main--open');
  }
});



$('.slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
  {
    breakpoint: 1048,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 935,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 628,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
