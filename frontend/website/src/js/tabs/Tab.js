class Tab {
    constructor(control, setActive) {
        this.control = control;
        this.tabTarget = this.getTabTarget();
        this.setActive = setActive;

        this.onClick = this.onClick.bind(this);

        this.init();
    }

    /**
     * Get the string reference to the panel this tab should control
     *
     * @returns {string}
     */
    getTabTarget() {
        return this.control.dataset.tabTarget;
    }

    /**
     * Click listener
     */
    onClick() {
        this.activate();
        this.setActive(this.getTabTarget());
    }

    /**
     * Activate the tab
     */
    activate() {
        this.control.classList.add('active');
    }

    /**
     * Deactivate the tab
     */
    deactivate() {
        this.control.classList.remove('active');
    }

    /**
     * Initiate listeners on the tab
     */
    initiateListener() {
        this.control.addEventListener('click', this.onClick);
    }

    /**
     * Init the tab
     */
    init() {
        this.initiateListener();
    }
}

export default Tab;
