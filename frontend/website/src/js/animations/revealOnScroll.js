import anime from 'animejs';
import 'intersection-observer';
import scrollama from 'scrollama';
import interpolateChildren from './interpolateNumbers';
import staggerInChildren from './staggerInChildren';

/**
 * SCROLL REVEAL
 */
export const revealOnScroll = () => {
    // instantiate the scrollama
    const scroller = scrollama();

    // setup the instance, pass callback functions
    scroller
        .setup({
            step: '.reveal-on-enter',
            offset: 0.85,
            once: true
        })
        .onStepEnter((response) => {
            const { element } = response;

            anime({
                targets: element,
                opacity: [0, 1],
                easing: 'easeOutCubic',
                delay: 150,
                duration: 2000
            });

            const staggerInItems = element.classList.contains('.stagger-in') ? element : element.querySelectorAll('.stagger-in');

            if (staggerInItems.length > 0) {
                staggerInItems.forEach(staggerParent => staggerInChildren(staggerParent, 400));
            }

            interpolateChildren(element, {
                excludeSliders: true
            });
        });

    // setup resize event
    window.addEventListener('resize', scroller.resize);
};