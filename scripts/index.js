$(document).ready(function () {
  menuScroll($);
})

$('.menu__button').on('click', function(){
  if(isMobile()) $('#menu-shower').prop('checked', false);
});
