$(".menu__button").on("click", function () {
  var link = $(this).children().attr("href");
  event.preventDefault();

  var height = 600 + ($(link).offset().top / 10);

  $('html, body').animate({
    scrollTop: $(link).offset().top
  }, height);
});

$('.header__scroll').on('click', function () {
  $('html, body').animate({
    scrollTop: $('#intro').offset().top
  })
})
