$(function(){
  'use strict';

  var content = $('body').html();
  var $body = $('body');
  var menuActive = $body.data('menu-active');

  $body.load('./layout.html', function() {
    $(content).prependTo('.row');
    $('.' + menuActive).addClass('active');
    if(!/oauth2/.test(menuActive)) {
      $('.submenu-oauth2').hide();
    }
  });
});
