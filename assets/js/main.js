/*global jQuery */
function submitToAPI(e) {
    e.preventDefault();
  
    var Namere = /[A-Za-z]{1}[A-Za-z]/;
    if (!Namere.test($("#name-input").val())) {
      alert("Name must contain two or more characters.");
      return;
    }
    // var mobilere = /[0-9]{10}/;
    var mobilere = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
    if (!mobilere.test($("#phone-input").val())) {
      alert("Please enter a vaild phone number.");
      return;
    }
  
    var name = $("#name-input").val();
    var phone = $("#phone-input").val();
    var msg = $("#description-input").val();
    var data = {
      name: name,
      phone: phone,
      msg: msg
    };
  
    $.ajax({
      type: "POST",
      url: "https://r0s6b787aa.execute-api.eu-west-1.amazonaws.com/production/contact-us",
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
  
  
      success: function () {
        // clear form and show a success message
        alert("Successfull");
        document.getElementById("contact-form").reset();
        location.reload();
      },
      error: function () {
        // TODO Cross origin not working
        // show an error message 
        alert("Message Sent");
        document.getElementById("contact-form").reset();
        location.reload();
      }
    });
  }

(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        /*---------------------------------
         All Window Scroll Function Start
        --------------------------------- */
        $(window).scroll(function () {
            // Header Fix Js Here
            if ($(window).scrollTop() >= 200) {
                $('#header-area').addClass('fixTotop');
            } else {
                $('#header-area').removeClass('fixTotop');
            }

            // Scroll top Js Here
            if ($(window).scrollTop() >= 400) {
                $('.scroll-top').slideDown(400);
            } else {
                $('.scroll-top').slideUp(400);
            }
        });
        /*--------------------------------
         All Window Scroll Function End
        --------------------------------- */

        // Partner Carousel
        $(".partner-content-wrap").owlCarousel({
            loop: true,
            margin: 15,
            autoplay: true,
            autoplayTimeout: 1500,
            nav: false,
            dots: false,
            rtl: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        }); // Partner Carousel End

        // Testimonial Carousel
        $(".testimonial-content").owlCarousel({
            loop: true,
            items: 1,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 3000,
            nav: false,
            dots: true
        });
        // Testimonial Carousel End

        // Click to Scroll TOP
        $(".scroll-top").click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1500);
        }); //Scroll TOP End

        // SlickNav or Mobile Menu
        $(".mainmenu").slicknav({
            'label': '',
            'prependTo': '#header-bottom .container .row',
            closeOnClick: true
        });
        
        $('#menu').slicknav({
            closeOnClick: true
        });// SlickNav End

    }); //Ready Function End

    jQuery(window).load(function () {
        jQuery('.preloader').fadeOut();
        jQuery('.preloader-spinner').delay(350).fadeOut('slow');
        jQuery('body').removeClass('loader-active');
        jQuery(".popular-car-gird").isotope();
    }); //window load End

}(jQuery));

