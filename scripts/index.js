var $ = require('jquery');
var loader = require('./loader');
var menuScroll = require('./menu_scroll');
var smoothScroll = require('./smooth_scroll');

$(document).ready(function () {
  loader($);
  menuScroll($);
  smoothScroll();
})