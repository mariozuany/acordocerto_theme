import anime from 'animejs';

/**
 * STAGGER IN CHILDREN OF GIVEN PARENT
 * @param {HTMLElement|Element} staggerParent
 * @param {int} delay
 * @param {int} duration
 */
export default (staggerParent, delay = 0, duration = 1200) => {
    anime({
        targets: staggerParent.children,
        opacity: [0, 1],
        translateY: [50, 0],
        easing: 'easeOutCubic',
        delay: anime.stagger(100, { start: delay }),
        duration
    });
};