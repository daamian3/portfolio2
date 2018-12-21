import $ from 'jquery';

function active() {
  const $menuButtons = $('.menu__button');

  $menuButtons.each(function () {
    $(this).on('click', function () {
      // remove class "active" from all siblings
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    })
  })
}

export default active;