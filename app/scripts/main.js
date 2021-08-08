// Slick slider
$(document).ready(function () {
  $('.quote__inner').slick({
    prevArrow: false,
    nextArrow: false,
    dots: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $('.brand__list').slick({
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
        },
      },
    ],
  });
});
// menu-mobile
const toggleMenu = document.querySelector('.header__toggle-menu');
const menuList = document.querySelector('.header__menu-list');
const classExpand = 'is-active';

toggleMenu.addEventListener('click', function () {
  toggleMenu.classList.toggle(classExpand);
  menuList.classList.toggle(classExpand);
});
// window.addEventListener('click', function (e) {
//   menuList.classList.remove(classExpand);
// });
