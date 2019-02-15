function scroll() {
  // Add scroll listener on document
  $(document).on("scroll", handleScroll);
  var $buttons = $(".menu__button");
  var $headerScroll = $(".header__scroll");

  var going = false;
  // Handle menu button click
  $buttons.on("click", function () {
    event.preventDefault();
    if (going) return;
    going = true;
    // Off scroll event when the menu button is clicked
    $(document).off("scroll");
    var link = $(this).children().attr("href");
    var height = 600 + ($(link).offset().top / 10);

    // Remove active class from siblings and add it to clicked button
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    // Scroll to corresponding element
    $("html, body").animate({
      scrollTop: $(link).offset().top
    }, height, function () {
      going = false;
      $(document).on("scroll", handleScroll);
    }); // Call cb function when scrolling animation is finished
  });

  // Arrow in header clicked, scroll to intro section
  $headerScroll.on("click", function () {
    $("html, body").animate({
      scrollTop: $("#intro").offset().top
    })
  });

  // Handle scroll
  function handleScroll() {
    var scrollPos = $(document).scrollTop();
    // When user scrolled to the bottom, add active class to contact menu button
    if ((window.innerHeight + document.documentElement.scrollTop) >= document.body.offsetHeight) {
      var $contactLink = $("a[href='#contact']");
      $contactLink.parent().siblings().removeClass("active");
      $contactLink.parent().addClass("active");
      return;
    }

    $buttons.each(function () {
      var currentButton = $(this);
      var refElement = $(currentButton.children().attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        currentButton.addClass("active");
      } else {
        currentButton.removeClass("active");
      }
    });

    // Show tech cards on mobile when scrolling
    if (isMobile()) {
      var $techBlocks = $(".tech__block");
      $techBlocks.each(function () {
        var currentBlock = $(this);
        if (currentBlock.position().top - currentBlock.height() <= scrollPos + $(window).height() / 3 && currentBlock.position().top + currentBlock.height() > scrollPos + $(window).height() / 3.5) {
          currentBlock.find("p").css({ "transform": "translateY(-50%) scale(1)" })
          currentBlock.find("i").css("opacity", 0);
        } else {
          currentBlock.find("p").css({ "transform": "translateY(50%) scale(0)" });
          currentBlock.find("i").css("opacity", 1);
        }
      })
    }
  }
};
