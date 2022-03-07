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
  }); //slider

  var slider = $('.top__slider');
  slider.slick({
    arrows: false,
    infinite: true,
    dots: true,
    fade: true,
    cssEase: 'ease-in-out',
    autoplay: true,
    autoplaySpeed: 5000
  }); //slider contact

  var contactSlider = $('.contact__slider');
  contactSlider.slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplfay: true,
    autoplaySpeed: 5000,
    slidesToShow: 10,
    slidesToScroll: 5
  });
  var contactSliderItem = $('.contact__slider-item');
  contactSliderItem.css('width', '170px'); //gallery

  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.category-bedroom' //default active tab

    }
  });
});