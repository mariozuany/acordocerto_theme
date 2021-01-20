class TabPanel {
    constructor(panel) {
        this.panel = panel;
        this.tabId = this.getTabId();
    }

    /**
     * Get the string ID of this panel
     *
     * @returns {string}
     */
    getTabId() {
        return this.panel.dataset.tabId;
    }

    /**
     * Disable or enable the focus on elements inside panels
     * This is useful to ensure that elements in hidden panels are not focusable
     *
     * @param {boolean} isFocusable
     */
    toggleFocusInside(isFocusable) {
        const focusableElements = this.panel.querySelectorAll('a, button, input, textarea, select');

        if (focusableElements.length > 0) {
            focusableElements.forEach((focusableElement) => {
                this.focusableElement = focusableElement;
                this.focusableElement.tabIndex = isFocusable ? 0 : -1;
            });
        }
    }

    /**
     * Activate the panel
     */
    activate() {
        this.panel.classList.add('active');
        this.toggleFocusInside(true);
    }

    /**
     * Deactivate the panel
     */
    deactivate() {
        this.panel.classList.remove('active');
        this.toggleFocusInside(false);
    }
}

export default TabPanel;
