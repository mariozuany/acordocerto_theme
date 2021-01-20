#Kooba Smart Placeholder Label
A form label element that resizes and moves itself when an input field is hovered, focused or populated.

##Usage example
Javascript
```javascript
import PlaceholderLabel from './forms/PlaceholderLabel';

const placeholderLabels = document.querySelectorAll('.placeholder-label');
placeholderLabels.forEach(placeholderLabel => new PlaceholderLabel(placeholderLabel));
```

HTML
```html
<div class="placeholder-label">
    <input class="placeholder-label__input" type="email" id="emailInput" required>
    <label class="placeholder-label__label" for="emailInput">Enter your email</label>
</div>
```

SCSS
```scss
.placeholder-label {
    position: relative;
    
    &__input {
        &:focus,
        &.populated {
            & + .newsletter-signup__input-label {
                top: 0;
                transform: translate(-50%, -100%) scale(0.7);
            }
        }
    }

    &__label {
        transition: top 0.22s ease-out, transform 0.22s ease-out;
        position: absolute;
        top: 50%;
        left: 50%;
        transform-origin: 50% 0;
        transform: translate(-50%, -50%);
    }
}
```
