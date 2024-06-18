$(document).ready(function() {

    $('.how-spread').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: 500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }

        }
    })
    $('.news-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: 500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }

        }
    })
    $('.doctor-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        autoplay: 500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }

        }
    })
    $('.blog-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }

        }
    })

    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 150) {
            header.removeClass("sticky");
            header.addClass("header2");
        } else {
            header.addClass("sticky");
            header.removeClass("header2");
        }
    });
    //loader page
    $(window).on("load", function(e) {
        setTimeout(function() {
            $('#loader-wrapper').remove();
        }, 1500);
    });

    //one page nav

    $(".navbar ul li a").click(function(e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 1000);
    });

    $(".navbar-nav .nav-link").click(function() {
        $("nav").find(".active").removeClass("active")
        $(this).parent().addClass("active");
    });

    //scroll to top
    $('.donate-button .donate-shape a').click(function(e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: 0
        }, 1000);
    });
    //sync navbar links with sections
    $(window).scroll(function() {
        $(".n").each(function() {
            if ($(window).scrollTop() > $(this).offset().top) {
                var nID = $(this).attr('id');
                $(".navbar-nav .nav-link").removeClass("active");
                $('.navbar li a[data-scroll="' + nID + '"]').addClass("active");

            }
        });
    });
    //making navbar fadein when scrolling
    $(window).scroll(function() {
        if ($(window).scrollTop() > 10) {
            $(".header-bottom").fadeIn(1000);
        }
    });

    // navbar opacity
    $(window).scroll(function() {
        if ($(this).scrollTop() < 0) {
            $(".header-bottom").css({ "opacity": "0" });
        } else {
            $(".header-bottom").css({ "opacity": "1" });
        }
    });

});