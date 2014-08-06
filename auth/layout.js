
'use strict';

$(function(){
  var content = $('body').html();
  var $body = $('body');
  var menuActive = $body.data('menu-active');

  $body.load("layout.html", function() {
    $(content).prependTo('.row');
    $('.' + menuActive).children().addClass('active');
    if(!menuActive.match(/oauth2/)) {
      $('.menu-oauth2').find('ul').hide(0);
    }
  });
});
