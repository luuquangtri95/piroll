// Slick slider
$(document).ready(function () {
  $('.quote__inner').slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          arrows: false,
          dots: true,
        },
      },
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

// menu-mobile
const toggleMenu = document.querySelector('.header__toggle-menu');
const menuList = document.querySelector('.header__menu-list');
const classExpand = 'is-active';

toggleMenu.addEventListener('click', function () {
  toggleMenu.classList.add(classExpand);
  menuList.classList.add(classExpand);
});
