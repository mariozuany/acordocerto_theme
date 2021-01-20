import * as $ from 'jquery';
import StandardSlick from './StandardSlick';
import defaultSlickSettings from './defaultSlickSettings';

class InlineDotsSlick extends StandardSlick {
    constructor(containerElement) {
        super(containerElement);

        this.slickSettings = {
            ...defaultSlickSettings,
            dots: true,
            appendDots: '.testimonials__dots',
            dotsClass: 'slider-dots testimonials__slider-dots',
            arrows: false,
            centerPadding: '0px',
            variableWidth: false
        };
    }

    preInit() {
        $(this.sliderElement).on(
            'init reInit',
            () => {
                const sliderDots = document.querySelectorAll('.slick-current .testimonials__slider-dots li');
                if (sliderDots.length > 0) {
                    sliderDots.item(0).classList.add('slick-active');
                }
            }
        );

        $(this.sliderElement).on(
            'afterChange',
            (event, slick, currentSlide) => {
                const sliderDots = document.querySelectorAll('.slick-active .testimonials__slider-dots li');
                sliderDots.forEach(item => item.classList.remove('slick-active'));
                sliderDots.item(currentSlide).classList.add('slick-active');
            }
        );
    }
}

export default InlineDotsSlick;
