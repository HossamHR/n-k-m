"use strict"; // Start of use strict

function revolutionSliderActiver() {
    if ($('.rev_slider_wrapper .slider1').length) {
        var Self = $('.rev_slider_wrapper .slider1');
        var slideHeight = Self.data('height');
        jQuery(".slider1").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 5000,
            navigation: {
                onHoverStop: 'off',
                touch: {
                    touchenabled: "on"
                },
                arrows: {
                    style: "zeus",
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 767,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '<div class="tp-title-wrap">    <div class="tp-arr-imgholder"></div> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 5,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 5,
                        v_offset: 0
                    }
                },
            },
            responsiveLevels: [1240, 1025, 778, 550],
            gridwidth: [1170, 970, 730, 450],
            gridheight: slideHeight
        });
    };
    if ($('.rev_slider_wrapper .slider2').length) {
        var Self = $('.rev_slider_wrapper .slider2');
        var slideHeight = Self.data('height');
        jQuery(".slider2").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 5000,
            navigation: {
                onHoverStop: 'off',
                touch: {
                    touchenabled: "on"
                },
                arrows: {
                    style: "zeus",
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 767,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '<div class="tp-title-wrap">    <div class="tp-arr-imgholder"></div> </div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 5,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 5,
                        v_offset: 0
                    }
                },
            },
            responsiveLevels: [1240, 1025, 778, 550],
            gridwidth: [1170, 970, 730, 450],
            gridheight: slideHeight
        });
    };
}


function accrodion() {
    if ($('.accrodion-grp').length) {

        $('.accrodion-grp').each(function() {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            Self.find('.accrodion').each(function() {
                $(this).find('.accrodion-title').on('click', function() {
                    if ($(this).parent().hasClass('active') === false) {
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().addClass('active');
                        $(this).parent().find('.accrodion-content').slideDown();
                    };
                });
            });
        });

    };
}

function thmMailchimp() {
    if ($('.mailchimp-form').length) {
        $('.mailchimp-form').each(function() {
            var mailChimpWrapper = $(this);

            mailChimpWrapper.validate({ // initialize the plugin
                rules: {
                    email: {
                        required: true,
                        email: true
                    }
                },
                submitHandler: function(form) {
                    // sending value with ajax request
                    $.post($(form).attr('action'), $(form).serialize(), function(response) {
                        $(form).parent().find('.result').append(response);
                        $(form).find('input[type="text"]').val('');
                        $(form).find('input[type="email"]').val('');
                        $(form).find('textarea').val('');
                    });
                    return false;
                }
            });
        });
    };
}

function priceFilter() {
    if ($('.range-slider-price').length) {

        var priceRange = document.getElementById('range-slider-price');

        noUiSlider.create(priceRange, {
            start: [30, 150],
            limit: 200,
            behaviour: 'drag',
            connect: true,
            range: {
                'min': 10,
                'max': 200
            }
        });

        var limitFieldMin = document.getElementById('min-value-rangeslider');
        var limitFieldMax = document.getElementById('max-value-rangeslider');

        priceRange.noUiSlider.on('update', function(values, handle) {
            (handle ? $(limitFieldMax) : $(limitFieldMin)).text(values[handle]);
        });
    };
}

function thmOwlCarousel() {
    if ($('.testimonial-carousel').length) {
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 1,
                    autoWidth: false
                },
                600: {
                    items: 1,
                    autoWidth: false
                },
                1000: {
                    items: 2,
                    autoWidth: false
                }
            }
        });
    };
    if ($('.what-we-do-carousel').length) {
        $('.what-we-do-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: false,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 1,
                    autoWidth: false
                },
                600: {
                    items: 3,
                    autoWidth: false
                },
                1000: {
                    items: 4,
                    autoWidth: false
                },
                1200: {
                    items: 4,
                    autoWidth: false
                },
                1400: {
                    items: 4,
                    autoWidth: false
                }
            }
        });
    };
    if ($('.client-carousel-home-three').length) {
        $('.client-carousel-home-three').owlCarousel({
            loop: true,
            margin: 70,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: false,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 2,
                    autoWidth: false
                },
                600: {
                    items: 3,
                    autoWidth: false
                },
                1000: {
                    items: 6,
                    autoWidth: false
                }
            }
        });
    };

}

function cartTouchSpin() {
    if ($('.quantity-spinner').length) {
        $("input.quantity-spinner").TouchSpin({
            verticalbuttons: true
        });
    }
}


function galleryMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }

    if ($('.post-filter').length) {
        $('.post-filter li').children('span').on('click', function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('.post-filter li').children('span').parent().removeClass('active');
            Self.parent().addClass('active');


            $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }

    if ($('.post-filter.has-dynamic-filter-counter').length) {
        // var allItem = $('.single-filter-item').length;

        var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

        activeFilterItem.each(function() {
            var filterElement = $(this).data('filter');
            console.log(filterElement);
            var count = $('.gallery-content').find(filterElement).length;

            $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
        });
    };
}


function thmbxSlider() {
    if ($('.feature-carousel-box').length) {
        $('.feature-carousel-box').bxSlider({
            mode: 'vertical',
            auto: true,
            autoControls: false,
            controls: false,
            pause: 3000,
            slideMargin: 0
        });
    }
}


function thmHalfChart() {
    if ($('.circle').length) {
        $('.circle').circleProgress({
            value: 0.5,
            size: 163,
            thickness: 30,
            fill: {
                color: '#60B044'
            }
        });
    };
}
thmHalfChart();

function doughnutChartBox() {
    if ($('#doughnut-chartBox').length) {
        var ctx = $("#doughnut-chartBox");
        Chart.defaults.global.legend.display = false;
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                    "77%",
                    "23%"
                ],
                datasets: [{
                    data: [200, 70],
                    backgroundColor: [
                        "#FF7F0E",
                        "#3563A9"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB"
                    ],
                    hoverBorderColor: [
                        "#fff",
                        "#fff"
                    ]
                }]
            },
            option: {
                position: "left",
                responsive: true,
            }
        });
    };
}

function pieChartBox() {
    if ($('#pie-chartBox').length) {
        var ctx = $("#pie-chartBox");
        Chart.defaults.global.legend.display = false;
        var myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [
                    "77%",
                    "23%"
                ],
                datasets: [{
                    data: [200, 70],
                    backgroundColor: [
                        "#FF7F0E",
                        "#3563A9"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB"
                    ],
                    hoverBorderColor: [
                        "#fff",
                        "#fff"
                    ]
                }]
            },
            option: {
                position: "left",
                responsive: true,
            }
        });
    };
}

function thmMasterSliderStaff() {
    if ($('.testimonial-about-carousel').length) {
        var slider = new MasterSlider();
        slider.setup('masterslider', {
            loop: true,
            width: 80,
            height: 80,
            speed: 20,
            view: 'fadeBasic',
            preload: 'all',
            space: 20,
            wheel: true
        });
        slider.control('arrows');
        slider.control('slideinfo', {
            insertTo: '#staff-info'
        });
    };
}
thmMasterSliderStaff();

function stickyHeader() {
    if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').removeClass('slideIn animated');
            $('.stricky').addClass('stricky-fixed slideInDown animated');
            $('.scroll-to-top').fadeIn(500);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed slideInDown animated');
            $('.stricky').addClass('slideIn animated');
            $('.scroll-to-top').fadeOut(500);
        }
    };
}


function thmLightBox() {
    if ($('.img-popup').length) {
        var groups = {};
        $('.img-popup').each(function() {
            var id = parseInt($(this).attr('data-group'), 10);

            if (!groups[id]) {
                groups[id] = [];
            }

            groups[id].push(this);
        });


        $.each(groups, function() {

            $(this).magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: {
                    enabled: true
                }
            });

        });

    };
}

function thmCounter() {
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    };
}

function thmScrollAnim() {
    if ($('.wow').length) {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    };
}

function contactFormValidation() {
    if ($('.contact-form').length) {
        $('.contact-form').validate({ // initialize the plugin
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                },
                subject: {
                    required: true
                }
            },
            submitHandler: function(form) {
                // sending value with ajax request
                $.post($(form).attr('action'), $(form).serialize(), function(response) {
                    $(form).find('.form-result').append(response);
                    $(form).find('input[type="text"]').val('');
                    $(form).find('input[type="email"]').val('');
                    $(form).find('textarea').val('');
                    console.log(response);
                });
                return false;
            }
        });
    }
}

function thmVideoPopup() {
    if ($('.video-popup').length) {
        $('.video-popup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,

            fixedContentPos: false
        });
    };
}

function scrollToTarget() {
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
}

function mobileNavToggle() {
    if ($('#main-nav-bar .navbar-nav .sub-menu').length) {
        $('#main-nav-bar .navbar-nav .sub-menu').parent('li').children('a').append(function() {
            // return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
            return '<button class="sub-nav-toggler"><i class="fa fa-angle-down"></i></button>';
        });
        $('#main-nav-bar .navbar-nav .sub-nav-toggler').on('click', function() {
            var Self = $(this);
            Self.parent().parent().children('.sub-menu').slideToggle();
            return false;
        });

    };
}

function sideNavToggler() {
    if ($('.side-navigation').length) {
        $('.side-nav-opener').on('click', function() {
            $('.side-navigation').addClass('open');
        });
        $('.side-navigation-close-btn').on('click', function() {
            $('.side-navigation').removeClass('open');
        });
    };
}

function countDownTimer() {
    if ($('.countdown-box').length) {

        $('.countdown-box').each(function() {
            var Self = $(this);
            var countDate = Self.data('countdown-time'); // getting date

            Self.countdown(countDate, function(event) {
                $(this).html('<li> <div class="box"> <h4>' + event.strftime('%D') + '</h4> <span>Days</span> </div> </li> <li> <div class="box"> <h4>' + event.strftime('%H') + '</h4> <span>Hours</span> </div> </li> <li> <div class="box"> <h4>' + event.strftime('%M') + '</h4> <span>Minutes</span> </div> </li> <li> <div class="box"> <h4>' + event.strftime('%S') + '</h4> <span>Seconds</span> </div> </li> ');
            });
        });



    };
}

function searchPopup() {
    if ($('.popup-with-zoom-anim').length) {
        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });
    };
}

// instance of fuction while Document ready event   
jQuery(document).on('ready', function() {
    (function($) {
        revolutionSliderActiver();
        thmMailchimp();
        priceFilter();
        thmOwlCarousel();
        cartTouchSpin();
        doughnutChartBox();
        pieChartBox();
        thmLightBox();
        thmCounter();
        thmScrollAnim();
        contactFormValidation();
        scrollToTarget();
        thmVideoPopup();
        accrodion();
        mobileNavToggle();
        sideNavToggler();
        countDownTimer();
        searchPopup();
    })(jQuery);
});

// instance of fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {
        thmbxSlider();
        galleryMasonaryLayout();
    })(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function() {
    (function($) {
        stickyHeader();
    })(jQuery);
});