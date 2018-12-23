module.exports = function loader($) {
  $(window).on("load", function () {
    $("#loading").fadeOut('fast');
  });
}

