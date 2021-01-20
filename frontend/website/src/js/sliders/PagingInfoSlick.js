import * as $ from 'jquery';
import defaultSlickSettings from './defaultSlickSettings';
import StandardSlick from './StandardSlick';

class PagingInfoSlick extends StandardSlick {
    constructor(containerElement, additionalSettings = {}) {
        super(containerElement, additionalSettings);

        this.slickSettings = {
            ...defaultSlickSettings,
            appendArrows: containerElement.querySelector('.paging-info'),
            prevArrow: "<button type='button' class='slick-prev pull-left paging-info__arrow slick-arrow paging-info__arrow--left'><i class='icon-left-arrow' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right paging-info__arrow paging-info__arrow--right'><i class='icon-right-arrow' aria-hidden='true'></i></button>",
            ...additionalSettings
        };

        this.indicators = {
            current: containerElement.querySelector('.paging-info__current-slide'),
            total: containerElement.querySelector('.paging-info__total-slides')
        };
    }

    preInit() {
        $(this.sliderElement).on(
            'init reInit afterChange',
            (event, slick, currentSlide) => {
                const i = (currentSlide || 0) + 1;
                $(this.indicators.current).text(`0${i}`);
                $(this.indicators.total).text(`0${slick.slideCount}`);
            }
        );
    }
}

export default PagingInfoSlick;
