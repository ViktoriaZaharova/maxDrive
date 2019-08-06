$(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header__fixed').addClass('fixed');
        } else {
            $('.header__fixed').removeClass('fixed');
        }
    });

    $('.grid').masonry({
        itemSelector: '.grid-item',
        isAnimated: true,
        animationOptions: {
            queue: false,
            duration: 500
        },
        columnWidth: '.grid-item',
        gutter: 31
    });

    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.catalog ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('section.catalog').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.product_descriptions ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.product_descriptions').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.slider-range').slider({
        range: true,
        min: 0,
        max: 12500,
        values: [0, 0],
        classes: {
            "ui-slider-handle": "ui-corner-all"
        },
        slide: function (event, ui) {
            //Поле минимального значения
            $(".dec1").val(ui.values[0]);
            //Поле максимального значения
            $(".dec2").val(ui.values[1]);
        }
    });

    $(".dec1").val($(".slider-range").slider("value"));
    $(".dec2").val($(".slider-range").slider("value"));

    //плавный скролл
    $('.go_to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });

    // увеличение количества товара
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.add-line').click(function () {
        $(".vin-request__left .form .form__bottom .add-line").before('<div class="line">\n' +
            '                                <div class="input-group">\n' +
            '                                    <label>Запчасть:</label>\n' +
            '                                    <input type="text" name="name-part">\n' +
            '                                </div>\n' +
            '\n' +
            '                                <div class="input-group">\n' +
            '                                    <label>Кол-во</label>\n' +
            '                                    <div class="b_quantity">' +
            '                                    <a href="#" class="minus"></a>\n' +
            '                                    <input type="text" name="inp-quantity" value="1">\n' +
            '                                    <a href="#" class="plus"></a>\n' +
            '                                </div>\n' +
            '                                </div>\n' +
            '\n' +
            '                                <button class="btn-close">x</button>\n' +
            '                            </div>');
    });

    $('.vin-request__left .form .form__bottom .btn-close').click(function (e) {
        e.preventDefault();
        $('.vin-request__left .form .form__bottom').closest('.vin-request__left .form .form__bottom .line').remove();
    });

    $('.cabinet_menu ul li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if (location == link) {
            $(this).addClass('active');
        }
    });

    $(".date-input").mask("99.99.9999");

    $('.application .container .application_left .text, .application .container .application_right .text').equalHeights();


    $('.sort-dropdown .item .btn-select').click(function () {
        $(this).toggleClass('in').next().fadeToggle().css('display', 'flex');
        $('.sort-dropdown .item .btn-select').not(this).removeClass('in').next().slideUp();
    });


    $('.form-delivery .input-group .radio').click(function () {
        $(this).toggleClass('in').next().fadeIn();
        $('.form-delivery .input-group .radio').not(this).removeClass('in').next().slideUp();
    });

    $('.btn_stages-2').click(function (e) {
        e.preventDefault();
        $('.one_stages').removeClass('in');
        $('.two_stages').addClass('in');
    });


    $('.btn_stages-3').click(function (e) {
        e.preventDefault();
        $('.two_stages').removeClass('in');
        $('.three_stages').addClass('in');
    });


    $('.btn-mobile-phone').click(function () {
        $('.mobile-phone').fadeToggle().css('display', 'flex');
    });

    $('.mobile-visible .btn-wrapper').click(function (e) {
        e.preventDefault();
        $(this).siblings('.description-mobile').slideToggle();
    });

    $('.orders_wrapper .s__cabinet-content .line').click(function () {
        $(this).toggleClass('in');
        $('.orders_wrapper .s__cabinet-content .line').not(this).removeClass('in');
    });

    $('.VIN_queries .s__cabinet-content .line').click(function () {
        $(this).toggleClass('in');
        $('.VIN_queries .s__cabinet-content .line').not(this).removeClass('in');
    });



    $('.auto_select-wrap .item .btn-select').click(function () {
        $(this).toggleClass('in').next().fadeToggle().css('display', 'flex');
        $('.auto_select-wrap .item .btn-select').not(this).removeClass('in').next().slideUp();
    });

    $('.spare_parts-categories .item').click(function () {
        $(this).find('ul').slideToggle();
    })

});


$(document).ready(function () {
    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay, .btn-continue-shopping');
    var modal = $('.modal_div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'block')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});

$(function () {
    $('#mobile_menu').click(function (e) {
        e.preventDefault();
        $('#overlay').fadeIn(400);
        $('#menu').animate({
            'left': '0px'
        }, 200);
        $('html, body').css('overflow', 'hidden');
    });

    $('#close').click(function () {
        $('#menu').animate({
            'left': '-100%'
        }, 200);
        $('#overlay').fadeOut(400);
        $('html, body').css('overflow', 'auto');
    });
});

$(function () {
    $('#btn-cabinet_menu').click(function (e) {
        e.preventDefault();
        $('#overlay').fadeIn(400);
        $('#cabinet_menu-mobile').animate({
            'right': '0px'
        }, 200);
        $('html, body').css('overflow', 'hidden');
    });

    $('.close').click(function () {
        $('#cabinet_menu-mobile').animate({
            'right': '-100%'
        }, 200);
        $('#overlay').fadeOut(400);
        $('html, body').css('overflow', 'auto');
    });
});


$(document).ready(function () {
    var overlay = $('#overlay');
    var open_filter = $('.filter_mnu');
    var close = $('.close, #overlay');
    var filter_menu = $('#filter_menu');

    open_filter.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('left', '0')
                    .animate(200);
            });
        $('html, body').css('overflow', 'hidden');
    });

    close.click(function () {
        filter_menu
            .animate(200,
                function () {
                    $(this).css('left', '-310px');
                    overlay.fadeOut(400);
                }
            );
        $('html, body').css('overflow', 'auto');
    });
});


// mobile slide
$('.main-slider').slick({
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
        {
            breakpoint: 745,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.slider-product').slick({
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoPlay: true
});

$(window).on("load resize", function () {
    var width = $(document).width();

    if (width > 1110) {
        $('.main-slider').slick('unslick');
    } else {
        $('.main-slider').not('.slick-initialized').slick({
            slidesToShow: 3,
            slidesToScroll: 2
        });
    }

    if (width > 550) {
        $('.slider-product').slick('unslick');
    } else {
        $('.slider-product').not('.slick-initialized').slick({
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }

});

$("body").on("click", ".top", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});

