$(document).ready(function () {
  $('.menu__button').on('click', function () {
    if (isMobile()) $('#menu-shower').prop('checked', false);
  });

  scroll();
  rwd();

  $('#services').flickity({
    cellAlign: 'left',
    contain: true
  });
});


