(function(){
  const width = {
    desktop: '64vw',
    tablet: '45vw',
    phone: '36vw',
  };

  const height = {
    desktop: '36vw',
    tablet: '60vw',
    phone: '64vw',
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

  function resize(device){
    $rwd.animate({
      width: width[device],
      height: height[device],
    }, 1000);

    $rwd_double.animate({
      width: width_double[device],
    }, 500);

    $rwd_triple.animate({
      width: width_triple[device],
    }, 500);
  }

  $rwd_button.on("click", function () {
    $(this).prop('disabled', true);

    $rwd.fadeIn(1000).css('display', 'flex');
    $rwd_sign.fadeIn(1000);

    setTimeout(function(){
      resize('tablet');
      $rwd_sign.text('Tablet');

      setTimeout(function(){
        resize('phone');
        $rwd_sign.text('Smartphone');

        setTimeout(function(){
          resize('desktop');
          $rwd_sign.text('Komputer');

          $rwd_button.prop('disabled', false);
        }, 2000);
      }, 2000);
    }, 2000);

  });
})();
