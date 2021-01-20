export default class Accordion {
    constructor(container, siblingAccordions = []) {
        this.siblings = siblingAccordions;
        this.trigger = container.querySelector('.accordion__trigger');
        this.content = container.querySelector('.accordion__content');
    }

    closeSiblingAccordions() {
        if (this.siblings.length > 0) {
            this.siblings.forEach(sibling => sibling.close());
        }
    }

    close() {
        this.content.classList.remove('accordion__content--expanded');
        this.trigger.classList.remove('accordion__trigger--expanded');
        this.content.style.maxHeight = '0';
    }

    onTriggerClick(e) {
        e.preventDefault();

        if (e.type === 'keypress') {
            const key = e.which || e.keyCode;
            if (key !== 13) {
                return false;
            }
        }

        if (!this.content.classList.contains('accordion__content--expanded')) {
            this.closeSiblingAccordions();
            this.content.classList.add('accordion__content--expanded');
            this.content.style.maxHeight = `${this.content.querySelector('.accordion__content-inner').getBoundingClientRect().height}px`;
            this.trigger.classList.add('accordion__trigger--expanded');
        } else {
            this.closeSiblingAccordions();
            this.content.style.maxHeight = '0';
            this.content.classList.remove('accordion__content--expanded');
            this.trigger.classList.remove('accordion__trigger--expanded');
        }

        return true;
    }

    initiateTriggerListener() {
        this.trigger.addEventListener('click', e => this.onTriggerClick(e));
        this.trigger.addEventListener('keypress', e => this.onTriggerClick(e));
    }

    init() {
        this.initiateTriggerListener();
    }
}
