import $ from 'jquery';

function scroll() {
  // Grab elements
  const $section1 = $('#section1');
  const $scrollIcon = $('.header__scroll');
  const $document = $([document.documentElement, document.body]);

  // Handle load event
  $scrollIcon.on('click', () => {
    $document.animate({
      scrollTop: $section1.offset().top
    }, 600)
  })
}

export default scroll;