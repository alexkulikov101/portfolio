 var navMain = document.querySelector('.main-nav');
 var navToggle = document.querySelector('.main-nav__toggle');
 navMain.classList.remove('main-nav--nojs');
 navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--close')) {
    navMain.classList.remove('main-nav--close');
    navMain.classList.add('main-nav--open');
  } else {
    navMain.classList.add('main-nav--close');
    navMain.classList.remove('main-nav--open');
  }
});


/* var btn = document.querySelector(".feedback__btn");
 var modal  = document.querySelector(".modal");
 var close = document.querySelector(".modal__btn");
 btn.addEventListener("click", function(e){
  e.preventDefault();
  modal.classList.add("modal-show");
});

 close.addEventListener("click",function(e){
  e.preventDefault();
  modal.classList.add("modal-close");

});*/




