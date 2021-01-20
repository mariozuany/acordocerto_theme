class PlaceholderLabel {
    constructor(inputWrapper) {
        this.input = inputWrapper.querySelector('input') || inputWrapper.querySelector('textarea');
        this.label = inputWrapper.querySelector('label');

        if (this.input && this.label) {
            this.init();
        }

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        if (e.target.value !== '') {
            this.input.classList.add('populated');
            return true;
        }

        this.input.classList.remove('populated');
        return false;
    }


    init() {
        this.input.addEventListener('change', e => this.onInputChange(e));
    }
}

export default PlaceholderLabel;
