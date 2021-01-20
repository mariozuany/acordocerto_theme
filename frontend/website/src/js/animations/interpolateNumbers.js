import anime from 'animejs';

export default (parentElement, config = {}) => {
    let childInterpolateNumbers = parentElement.querySelectorAll('.interpolate-number');

    if (config.excludeSliders) {
        const childInterpolateNumbersInSlick = parentElement.querySelectorAll('.slick-slide .interpolate-number');
        const withoutSlickNumbers = [];

        childInterpolateNumbers.forEach((element) => {
            if ([].indexOf.call(childInterpolateNumbersInSlick, element) === -1) {
                withoutSlickNumbers.push(element);
            }

            childInterpolateNumbers = withoutSlickNumbers;
        });
    }

    if (childInterpolateNumbers.length > 0) {
        childInterpolateNumbers.forEach((number) => {
            const targetValue = parseFloat(number.innerHTML);

            if (targetValue) {
                const appendValues = number.innerHTML.split(targetValue);

                anime({
                    targets: number,
                    innerHTML: [0, targetValue + appendValues[appendValues.length - 1]],
                    round: 1,
                    easing: 'easeOutCubic',
                    duration: 4000,
                    delay: 400
                });
            }
        });
    }
};
