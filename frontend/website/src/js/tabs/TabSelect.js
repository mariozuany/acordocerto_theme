class TabSelect {
    constructor(selectElement, setActive) {
        this.selectElement = selectElement;
        this.tabTarget = this.getTabTarget();
        this.setActive = setActive;

        this.onChange = this.onChange.bind(this);

        this.init();
    }

    /**
     * Get the string ID of the tab panel to open, based on the currently selected option
     *
     * @returns {string}
     */
    getTabTarget() {
        const initialSelectOption = this.selectElement.selectedIndex || 0;
        return this.selectElement.options[initialSelectOption].dataset.tabTarget;
    }

    /**
     * Change listener
     */
    onChange() {
        this.setActive(this.getTabTarget());
    }

    /**
     * Initiate listeners
     */
    initiateListener() {
        this.selectElement.addEventListener('change', this.onChange);
    }

    /**
     * Initiate the class
     */
    init() {
        this.initiateListener();
    }
}

export default TabSelect;
