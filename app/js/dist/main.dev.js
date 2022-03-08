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
  }); //slider home

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
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 10,
    slidesToScroll: 5
  });
  var contactSliderItem = $('.contact__slider-item');
  contactSliderItem.css('width', '170px'); //slider blog

  var blogSlider = $('.article-slider__box');
  blogSlider.slick({
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    prevArrow: '<button type="button" class="article-slider__arrow-left"><img src="images/slider__arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="article-slider__arrow-right"><img src="images/slider__arrow-right.svg" alt=""></button>'
  }); //gallery

  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.category-bedroom' //default active tab

    }
  });
});