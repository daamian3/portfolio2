(function () {
  // Grab elements
  const $section1 = $('#section1');
  const $scrollIcon = $('.header__scroll');
  const $document = $([document.documentElement, document.body]);

  // Handle load event
  $(window).on('load', () => {
    $scrollIcon.on('click', () => {
      $document.animate({
        scrollTop: $section1.offset().top
      }, 600)
    })
  });

})();