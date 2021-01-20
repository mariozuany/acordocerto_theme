// tab functionality
const tabLinks = document.querySelectorAll('.tabs__nav-item-link');
const tabPanels = document.querySelectorAll('.tabs__panel');

tabPanels.forEach((el, index) => {
    el.setAttribute('data-index', index);
});

tabLinks.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelector('.tabs__nav-item.tabs__nav-item--active').classList.remove('tabs__nav-item--active');
        document.querySelector('.tabs__panel.tabs__panel--active').classList.remove('tabs__panel--active');

        const parentListItem = el.parentElement;
        parentListItem.classList.add('tabs__nav-item--active');
        const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

        const panel = [...tabPanels].filter(el => el.getAttribute('data-index') == index);
        panel[0].classList.add('tabs__panel--active');

        // if slider exists, set position to 0 (prevents white slide on tab switch)
        if (document.querySelector('.tabs__panel .slider')) {
            $('.slider').slick('setPosition');
        }
    });
});
