/*-----------------------------------------------------------------------------------

    Theme Name: Zodiac - Astrology and Horoscope HTML Template
    Description: Astrology and Horoscope HTML Template
    Author: Chitrakoot Web
    Version: 1.0
        
    ---------------------------------- */    

!function(t){"use strict";var s=t(window);function o(){var e,o;e=t(".full-screen"),o=s.height(),e.css("min-height",o),e=t("header").height(),o=t(".screen-height"),e=s.height()-e,o.css("height",e)}t("#preloader").fadeOut("normall",function(){t(this).remove()}),s.on("scroll",function(){var e=s.scrollTop(),o=t(".navbar-brand img"),a=t(".navbar-brand.logodefault img");e<=50?(t("header").removeClass("scrollHeader").addClass("fixedHeader"),o.attr("src","img/logos/logo-inner.png")):(t("header").removeClass("fixedHeader").addClass("scrollHeader"),o.attr("src","site/img/logos/logo-inner.png")),a.attr("src","site/img/logos/logo-inner.png")}),s.on("scroll",function(){500<t(this).scrollTop()?t(".scroll-to-top").fadeIn(400):t(".scroll-to-top").fadeOut(400)}),t(".scroll-to-top").on("click",function(e){e.preventDefault(),t("html, body").animate({scrollTop:0},600)}),t(".parallax,.bg-img").each(function(e){t(this).attr("data-background")&&t(this).css("background-image","url("+t(this).data("background")+")")}),t(".story-video").magnificPopup({delegate:".video",type:"iframe"}),t(".popup-social-video").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),t(".source-modal").magnificPopup({type:"inline",mainClass:"mfp-fade",removalDelay:160}),t(".wgl-accordion-services").on("mouseover",".service__item",function(){t(".service__item.active").removeClass("active"),t(this).addClass("active")}),s.resize(function(e){setTimeout(function(){o()},500),e.preventDefault()}),s.on("scroll",function(){t(".skills-progress span").each(function(){var e=t(this).offset().top+t(this).outerHeight(),o=t(window).scrollTop()+t(window).height(),a=t(this).attr("data-value");e<o&&t(this).css({width:a})})}),0!==t(".copy-clipboard").length&&(new ClipboardJS(".copy-clipboard"),t(".copy-clipboard").on("click",function(){var e=t(this);e.text();e.text("Copied"),setTimeout(function(){e.text("Copy")},2e3)})),t(".source-modal").magnificPopup({type:"inline",mainClass:"mfp-fade",removalDelay:160}),o(),t(document).ready(function(){t(".service-carousel1").owlCarousel({loop:!0,nav:!1,dots:!1,autoplay:!0,smartSpeed:1500,autoplayTimeout:3e3,responsiveClass:!0,autoplayHoverPause:!1,margin:30,responsive:{0:{items:1},481:{items:2},576:{items:2},992:{items:3},1200:{items:4},1600:{items:4}}}),t(".tarotblog-carousel1").owlCarousel({loop:!0,nav:!1,dots:!1,autoplay:!0,smartSpeed:1500,autoplayTimeout:3e3,responsiveClass:!0,autoplayHoverPause:!1,margin:30,responsive:{0:{items:1},481:{items:2},576:{items:2},992:{items:2},1200:{items:2},1600:{items:2}}}),t(".zodiacsign-carousel1").owlCarousel({loop:!0,nav:!1,dots:!1,autoplay:!0,smartSpeed:1500,autoplayTimeout:3e3,responsiveClass:!0,autoplayHoverPause:!1,margin:30,responsive:{0:{items:1},481:{items:2},576:{items:2},992:{items:3},1200:{items:4},1600:{items:4}}}),t(".zodiacsign-carousel2").owlCarousel({loop:!0,nav:!1,dots:!1,autoplay:!0,smartSpeed:1500,autoplayTimeout:3e3,responsiveClass:!0,autoplayHoverPause:!1,margin:30,responsive:{0:{items:1},481:{items:2},576:{items:3},767:{items:3},991:{items:4},992:{items:4},1200:{items:4},1600:{items:6}}}),t(".testimonials-carousel1").owlCarousel({loop:!0,nav:!1,dots:!0,autoplay:!0,smartSpeed:1500,autoplayTimeout:3e3,responsiveClass:!0,autoplayHoverPause:!1,responsive:{0:{items:1,dots:!1,margin:70},481:{items:1,dots:!1,margin:70},576:{items:1,dots:!1,margin:70},992:{items:1,margin:80},1200:{items:1,margin:80},1600:{items:1,margin:30}}}),t(".slider-fade2").owlCarousel({items:1,loop:!0,dots:!0,margin:0,nav:!1,autoplay:!0,smartSpeed:1500,mouseDrag:!1,animateIn:"fadeIn",animateOut:"fadeOut",dotsEach:!0}),t(".owl-carousel").owlCarousel({items:1,loop:!0,dots:!1,margin:0,autoplay:!0,smartSpeed:1500}),t(".slider-fade2").on("changed.owl.carousel",function(e){e=e.item.index-2;t("h3").removeClass("animated fadeInDown"),t("h1").removeClass("animated fadeInDown"),t("p").removeClass("animated fadeInDown"),t(".butn-style1").removeClass("animated fadeInDown"),t(".owl-item").not(".cloned").eq(e).find("h3").addClass("animated fadeInDown"),t(".owl-item").not(".cloned").eq(e).find("h1").addClass("animated fadeInDown"),t(".owl-item").not(".cloned").eq(e).find("p").addClass("animated fadeInDown"),t(".owl-item").not(".cloned").eq(e).find(".butn-style1").addClass("animated fadeInDown")}),0!==t(".horizontaltab").length&&t(".horizontaltab").easyResponsiveTabs({type:"default",width:"auto",fit:!0,tabidentify:"hor_1",activate:function(e){var o=t(this),a=t("#nested-tabInfo");t("span",a).text(o.text()),a.show()}}),t(".countup").counterUp({delay:25,time:2e3}),t(".countdown").countdown({date:"01 Jan 2026 00:01:00",format:"on"}),t(".current-year").text((new Date).getFullYear())}),s.on("load",function(){var o=t(".portfolio-gallery-isotope").isotope({});t(".filtering").on("click","span",function(){var e=t(this).attr("data-filter");o.isotope({filter:e})}),t(".filtering").on("click","span",function(){t(this).addClass("active").siblings().removeClass("active")}),t(".portfolio-gallery").lightGallery(),t(".portfolio-gallery-isotope").lightGallery(),t(".case-studies-link").on("click",e=>{e.stopPropagation()})})}(jQuery);