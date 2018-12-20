import $ from 'jquery';
import loaded from './loaded';
import active from './active';
import scroll from './scroll';

$(window).on("load", function () {
  loaded();
  active();
  scroll();
  console.log('It works from here');
});