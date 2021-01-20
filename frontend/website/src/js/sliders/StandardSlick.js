import * as $ from 'jquery';
import defaultSlickSettings from './defaultSlickSettings';
import interpolateChildren from '../animations/interpolateNumbers';

class StandardSlick {
    constructor(containerElement, slickSettings = defaultSlickSettings) {
        this.containerElement = containerElement;
        this.slickSettings = slickSettings;
        this.sliderElement = containerElement.classList.contains('slider')
            ? containerElement
            : containerElement.querySelector('.slider');
    }

    preInitStatic() {
        let slickSlides;

        $(this.sliderElement).on(
            'init reInit',
            () => {
                slickSlides = this.sliderElement.querySelectorAll('.slick-slide:not(.slick-cloned)');
                const activeSlide = slickSlides[0];

                if (activeSlide) {
                    interpolateChildren(activeSlide);
                }
            }
        );

        $(this.sliderElement).on(
            'beforeChange',
            (event, slick, currentSlide, nextSlide) => {
                const activeSlide = slickSlides[nextSlide];
                if (activeSlide) {
                    interpolateChildren(activeSlide);
                }
            }
        );
    }

    preInit() {
        // Do something maybe
    }

    postInit() {
        // Do something maybe
    }

    init() {
        this.preInitStatic();
        this.preInit();
        $(this.sliderElement).slick(this.slickSettings);
        this.postInit();
    }
}

export default StandardSlick;
