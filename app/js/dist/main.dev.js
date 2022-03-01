"use strict";

$(function () {
  //burger
  var openBtn = $('.header__btn');
  var closeBtn = $('.rightside-menu__close');
  var burgerMenu = $('.rightside-menu');
  openBtn.on('click', function () {
    burgerMenu.addClass('--active');
  });
  closeBtn.on('click', function () {
    burgerMenu.removeClass('--active');
  });
});