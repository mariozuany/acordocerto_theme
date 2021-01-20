#Kooba Accordion component

##Usage example
Javascript
```javascript
import Accordion from './accordion/Accordion';

const allAccordions = [];
const initiateAccordions = () => {
    const accordionItems = document.querySelectorAll('.accordion');

    if (accordionItems.length > 0) {
        accordionItems.forEach((item) => {
            const accordion = new Accordion(item, allAccordions);
            accordion.init();

            allAccordions.push(accordion);
        });
    }
};

window.addEventListener('load', () => {
    initiateAccordions();
});
```

HTML
```html
<div class="accordion">
    <button class="accordion__trigger">
        Accordion trigger - lorum ipsum dolor sit amet
        <span class="accordion__control"></span>
    </button>
    <div class="accordion__content">
        <div class="accordion__content-inner">
            Accordion content - Lorem ipsum dolor sit amet
        </div>
    </div>
</div>
```

SCSS
```scss
.accordion {
    &__trigger {
        width: 100%;
        justify-content: flex-start;
        position: relative;

        &,
        &:hover,
        &:focus {
            color: $primary;
        }

        &:after {
            transform: rotate(90deg);
        }
    
        &--expanded {
            &,
            &:hover,
            &:focus {
                background: $navy;
                color: $white;
            }

            .accordion__control {
                &:before {
                    transform: translate(-50%, -50%);
                    border-bottom: 8px solid $white;
                    border-left: 4px solid transparent;
                    border-right: 4px solid transparent;
                    border-top: 0;
                    opacity: 1;
                }
            }

            &:before {
                transform: rotate(-180deg);
            }
        }
    }
    
    &__control {
        width: 40px;
        height: 40px;
        display: block;
        cursor: pointer;
        position: absolute;

        &:before {
            content: "";
            width: 0;
            height: 0;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 8px solid $grey-mid;
            cursor: pointer;
            transition: transform $easing-standard, border $easing-standard;
            position: absolute;
            top: 50%;
            left: 50%;
            transform-origin: 0 50%;
            transform: translate(-50%, -50%);
            opacity: 0.7;
        }
    }

    &__content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.35s ease-out, padding 0.3s ease-out, opacity 0.22s ease-out;
        opacity: 0;

        &--expanded {
            opacity: 1;
        
            &:after {
                opacity: 1;
            }
        }
    }
}
```
