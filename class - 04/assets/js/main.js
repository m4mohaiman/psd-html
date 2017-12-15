(function ($) {
    'use strict';

    var slider = $('.home-slider');

    slider.owlCarousel({
        items: 1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        loop: true,
        autoplay: true,
        nav: true
    });

    slider.on('translate.owl.carousel', function(){
        var layer = $("[data-animation]");
        layer.each(function() {
            var anim_name = $(this).data('animation');
            $(this).removeClass('animated ' + anim_name).css('opacity', '0');
        });
    });


    $("[data-delay]").each(function () {
        var anim_del = $(this).data('delay');
        $(this).css('animation-delay', anim_del);
    });

    $("[data-duration]").each(function () {
        var anim_dur = $(this).data('duration');
        $(this).css('animation-duration', anim_dur);
    });

    slider.on('translated.owl.carousel', function () {
        var layer = slider.find('.owl-item.active').find("[data-animation]");
        layer.each(function () {
            var anim_name = $(this).data('animation');
            $(this).addClass('animated ' + anim_name).css('opacity', '1');
        });
    });

})(jQuery);