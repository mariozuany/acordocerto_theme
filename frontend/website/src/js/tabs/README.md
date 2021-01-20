#Kooba tab component

##Usage example

Javascript
```javascript
import TabbedContent from './tabs/TabbedContent';

const tabContainers = document.querySelectorAll('.tabbed-content');
const initiatedTabContainers = [];

if (tabContainers.length > 0) {
    tabContainers.forEach((tabContainer) => {
        const tabControls = tabContainer.querySelector('.tab-navigation');
        const tabSelect = tabContainer.querySelector('.tab-select__select');
        const tabPanels = tabContainer.querySelector('.tab-panels');

        if (tabControls && tabPanels) {
            initiatedTabContainers.push(
                new TabbedContent(
                    tabControls,
                    tabSelect,
                    tabPanels
                )
            );
        }
    });
}
```

HTML
```html
<div class="tabbed-content">
    <ul class="tab-navigation">
        <li class="tab-navigation__item"
            data-tab-target="first">
            <button class="tab-navigation__button">First tab title</button>
        </li>
        <li class="tab-navigation__item"
            data-tab-target="second">
            <button class="tab-navigation__button">Second tab title</button>
        </li>
        <li class="tab-navigation__item"
            data-tab-target="third">
            <button class="tab-navigation__button">Third tab title</button>
        </li>
    </ul>

    <div class="tabbed-content__tab-select">
        <div class="tab-select">
            <select class="tab-select__select">
                <option data-tab-target="first" selected>First tab title</option>
                <option data-tab-target="second">Second tab title</option>
                <option data-tab-target="third">Third tab title</option>
            </select>
            <img src="img/shapes/arrow-down.svg"
                 class="tab-select__arrow arrow-down"
                 alt="arrow-down">
        </div>
    </div>

    <div class="tab-panels">
        <div class="tab-panels__panel"
             data-tab-id="first">
            First tab content
        </div>
        <div class="tab-panels__panel"
             data-tab-id="second">
            Second tab content
        </div>
        <div class="tab-panels__panel"
             data-tab-id="third">
            Third tab content
        </div>
    </div>
</div>
```

SCSS
```scss
@import '../settings/animations';
@import '../settings/colors';
@import '../settings/fonts';
@import '../settings/spacing';
@import '../settings/type';
@import '../settings/z-index';
@import '../utils/breakpoints';

.tab-navigation {
    $self: &;

    display: none;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
    position: relative;

    @include breakpoint(desktop) {
        display: flex;
    }

    &__item {
        position: relative;
        flex: 0 1 auto;

        &.active {
           /* Tab active state */
            #{$self}__button {
                background-color: blue;

                &:focus {
                    outline: none;
                }
            }
        }
    }

    &__button {
        display: block;
        background-color: white;
        position: relative;
        transition: background-color 0.22s ease-out;
        outline: none;

        &:hover,
        &:focus,
        &:active {
            color: blue;
        }
    }
}

```

```scss
.tab-panels {
    position: relative;

    &__panel {
        transition: opacity 0.22s ease-out;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        opacity: 0;
        pointer-events: none;
        z-index: 0;

        &.active {
            transition-delay: 120ms;
            opacity: 1;
            pointer-events: all;
            z-index: 1;
            position: relative;
        }
    }
}
```
