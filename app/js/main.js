$(function () { 

    //burger
    $('.header__btn-menu').on('click', function() {
        $('.menu').toggleClass('menu--active');
        $('.header__btn-menu').toggleClass('header__btn-menu--active');
    });

    //rightside-menu
    var openBtn = $('.header__btn');
    var closeBtn = $('.rightside-menu__close');
    var burgerMenu = $('.rightside-menu');
    openBtn.on('click', function(){
        burgerMenu.addClass('rightside-menu--active');
    });
    closeBtn.on('click', function(){
        burgerMenu.removeClass('rightside-menu--active');
    });

    //slider home
    var slider = $('.top__slider');
    slider.slick({
        arrows: false,
        infinite: true,
        dots: true,
        fade: true,
        cssEase: 'ease-in-out',
        autoplay: true,
        autoplaySpeed: 5000
    });

    //slider contact
    var contactSlider = $('.contact__slider');
    contactSlider.slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 10,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                }
            },
            {
                breakpoint: 1511,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
        ]
    });
    var contactSliderItem = $('.contact__slider-item');
    contactSliderItem.css('width', '170px');

    //slider blog
    var blogSlider = $('.article-slider__box');
    blogSlider.slick({
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        prevArrow: '<button type="button" class="article-slider__arrow-left"><img src="images/slider__arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="article-slider__arrow-right"><img src="images/slider__arrow-right.svg" alt=""></button>',
    });

    //gallery
    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.category-bedroom' //default active tab
        }
    });

})