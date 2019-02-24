$(document).ready(function () {
  $('.menu__button').on('click', function () {
    if (isMobile()) $('#menu-shower').prop('checked', false);
  });

  scroll();
  rwd();

  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
  });
});
