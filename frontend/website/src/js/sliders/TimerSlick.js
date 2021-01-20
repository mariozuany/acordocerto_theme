import * as $ from 'jquery';
import StandardSlick from './StandardSlick';
import defaultSlickSettings from './defaultSlickSettings';
import 'slick-carousel';

class TimerSlick extends StandardSlick {
    constructor(containerElement, additionalSettings = {}, rtl = false) {
        super(containerElement, additionalSettings);

        this.rtl = rtl;

        this.slickSettings = {
            ...defaultSlickSettings,
            ...additionalSettings,
            pauseOnHover: false,
            pauseOnFocus: false,
            rtl: false
        };

        this.sliderTimerProgress = containerElement.querySelector('.slider-timer__progress');
    }

    preInit() {
        // Set the CSS animation duration for the timer progress bar
        // based on the Slick speed settings
        this.sliderTimerProgress.style.animationDuration = `${(this.slickSettings.autoplaySpeed + this.slickSettings.speed) / 1000}s`;

        if (this.rtl) {
            const desktopMQ = window.matchMedia('(min-width: 1020px)');
            if (desktopMQ.matches) {
                $(this.sliderElement).attr('dir', 'rtl');
            }
            desktopMQ.onchange = (e) => {
                if (e.matches) {
                    $(this.sliderElement).attr('dir', 'rtl');
                } else {
                    $(this.sliderElement).attr('dir', 'ltr');
                }
            };
        }

        $(this.sliderElement).on(
            'init reInit beforeChange',
            () => this.triggerProgressBar()
        );
    }

    triggerProgressBar() {
        // Create a clone of the progress bar
        const progressClone = this.sliderTimerProgress.cloneNode(true);
        const progressParent = this.sliderTimerProgress.parentNode;

        // Remount the progress bar element to trigger css animation
        progressParent.removeChild(this.sliderTimerProgress);
        progressParent.appendChild(progressClone);

        // Update class property
        this.sliderTimerProgress = progressClone;
    }
}

export default TimerSlick;
