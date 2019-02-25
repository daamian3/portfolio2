function scroll() {
  const checkIfIsMobile = isMobile();
  let scrolling = false;
  const $buttons = $(".menu__button");
  const $headerScroll = $(".header__scroll");
  const $tech = $('#tech');
  const $techBlocks = $(".tech__block");

  // Add scroll listener on document
  $(document).on("scroll", function () {
    scrolling = true;
  });
  // Run a code after a delay to improve the performance
  setInterval(function () {
    if (scrolling) {
      scrolling = false;
      handleScroll();
    }
  }, 250);

  // Handle menu button click
  $buttons.on("click", function (e) {
    e.preventDefault();

    if (scrolling) return;
    scrolling = true;
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
      scrolling = false;
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
    let scrollPos = $(document).scrollTop();
    // When user scrolled to the bottom, add active class to contact menu button
    if ((window.innerHeight + document.documentElement.scrollTop) >= document.body.offsetHeight) {
      var $contactLink = $("a[href='#contact']");
      $contactLink.parent().siblings().removeClass("active");
      $contactLink.parent().addClass("active");
      return;
    }

    $buttons.each(function () {
      const currentButton = $(this);
      const refElement = $(currentButton.children().attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        currentButton.addClass("active");
      } else {
        currentButton.removeClass("active");
      }
    });

    if (checkIfIsMobile) {
      if ($tech.position().top <= scrollPos + $(window).height() && $tech.position().top + $tech.height() > scrollPos) {
        hoverOverOnScroll(scrollPos);
      }
    }
  }

  // Show tech cards on mobile when scrolling
  function hoverOverOnScroll(scrollPos) {
    $techBlocks.each(function () {
      const currentBlock = $(this);
      if (currentBlock.position().top - currentBlock.height() <= scrollPos + $(window).height() / 3 && currentBlock.position().top + currentBlock.height() > scrollPos + $(window).height() / 3.5) {
        currentBlock.find("p").css({ "transform": "translateY(-50%) scale(1)" })
        currentBlock.find("i").css("opacity", 0);
        console.log('show');
        return;
      } else {
        currentBlock.find("p").css({ "transform": "translateY(50%) scale(0)" });
        currentBlock.find("i").css("opacity", 1);
        console.log('hide');
        return;
      }
    })
  }
};
