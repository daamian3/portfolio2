function rwd() {
  const width = {
    desktop: '64vw',
    tablet: '30vw',
    phone: '18vw',
  };

  const height = {
    desktop: '36vw',
    tablet: '40vw',
    phone: '32vw',
  };

  const width_double = {
    desktop: '40%',
    tablet: '40%',
    phone: '75%',
  };

  const width_triple = {
    desktop: '23.33%',
    tablet: '30%',
    phone: '50%',
  };

  const $rwd = $("#rwd-container");
  const $rwd_button = $('#rwd-button');
  const $rwd_sign = $('#rwd-sign');
  const $rwd_double = $(".rwd__block--double");
  const $rwd_triple = $(".rwd__block--triple");
  // overlay constants
  const $overlay = $("#rwd-overlay");
  const $overlay_content = $(".rwd__overlay-content");
  const $overlay_close_button = $(".overlay__close-btn")

  function resize(device, cb) {
    $rwd.animate({
      width: width[device],
      height: height[device],
    }, 1000, () => {
      if (cb) {
        setTimeout(cb, 500);
      }
    });

    $rwd_double.animate({
      width: width_double[device],
    }, 500);

    $rwd_triple.animate({
      width: width_triple[device],
    }, 500);
  }

  let timeouts = [];

  function closeOverlay() {
    $overlay_content.fadeOut(500);
    $overlay.fadeOut(500);
  }

  function handleCloseButton() {
    // clear timeouts
    timeouts.forEach(timeout => clearTimeout(timeout));
    $rwd.stop();
    closeOverlay();
    // reset css given by animation
    $rwd.css({
      width: width['desktop'],
      height: height['desktop']
    })
    $rwd_double.css(width, width_double['desktop']);
    $rwd_triple.css(width, width_triple['desktop']);
    $rwd_sign.text('Komputer');

    $rwd_button.attr('disabled', false);
  }

  $overlay_close_button.on("click", handleCloseButton);

  $rwd_button.on("click", function () {
    $(this).prop('disabled', true);

    // show the overlay
    $overlay.fadeIn(500).css('display', 'block');
    $overlay_content.fadeIn(1000);

    function resizeRwd(cb) {
      timeouts[0] = setTimeout(function () {
        resize('tablet');
        $rwd_sign.text('Tablet');

        timeouts[1] = setTimeout(function () {
          resize('phone');
          $rwd_sign.text('Smartphone');

          timeouts[2] = setTimeout(function () {
            resize('desktop', cb);
            $rwd_sign.text('Komputer');

            $rwd_button.prop('disabled', false);
          }, 2000);
        }, 2000);
      }, 2000);
    }

    resizeRwd(closeOverlay);
  });
}
