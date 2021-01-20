import * as $ from 'jquery';

/**
 * Function to initiate an array of sliders and handle responsive enabling/disabling
 *
 * @param {Array} slickSliders
 */
export default (slickSliders) => {
    slickSliders.forEach((slider) => {
        if ((typeof slider === 'function' || typeof slider === 'object') && slider.sliderElement) {
            const $carousel = $(slider.sliderElement);

            /* Initializes a slick carousel only on mobile screens */
            // slick on mobile
            if ($(window).width() > 1020 && $carousel.hasClass('mobile-slider')) {
                if ($carousel.hasClass('slick-initialized')) {
                    $carousel.slick('unslick');
                }
            } else if ($(window).width() > 759 && $carousel.hasClass('mobile-slider--no-tablet')) {
                if ($carousel.hasClass('slick-initialized')) {
                    $carousel.slick('unslick');
                }
            } else if (!$carousel.hasClass('slick-initialized')) {
                slider.init();
            }
        } else {
            console.warn('Slider creation failed: ', slider);
        }
    });
};
