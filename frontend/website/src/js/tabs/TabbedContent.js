import Tab from './Tab';
import TabPanel from './TabPanel';
import TabSelect from './TabSelect';

/**
 * Class to create tabbed content, and their controls
 */
class TabbedContent {
    constructor(controlsContainer, selectElement, panelsContainer) {
        this.controlsContainer = controlsContainer;
        this.panelsContainer = panelsContainer;
        this.selectElement = selectElement;

        this.controls = [];
        this.selectControl = null;
        this.panels = [];

        this.activeTabId = null;

        this.heightPadding = 60;

        this.setContainerHeight = this.setContainerHeight.bind(this);

        this.init();
    }

    /**
     * Initiate the tab controls
     */
    initControls() {
        const controlsArray = this.controlsContainer.children;
        controlsArray.forEach((control) => {
            this.controls.push(new Tab(control, activeId => this.setActiveTab(activeId)));
        });

        this.setActiveTab(this.controls[0].tabTarget);
    }

    /**
     * Initiate the tab panels
     */
    initPanels() {
        const panelsArray = this.panelsContainer.children;
        panelsArray.forEach((panel) => {
            this.panels.push(new TabPanel(panel));
        });

        this.setActiveTab(this.controls[0].tabTarget);
    }

    /**
     * Initiate the select control (mobile)
     */
    initSelect() {
        this.selectControl = new TabSelect(
            this.selectElement,
            activeId => this.setActiveTab(activeId)
        );
    }

    /**
     * Get the height of the tallest tab content
     *
     * @returns {number}
     */
    getTallestTabHeight() {
        return this.panels.reduce(
            (max, panel) => {
                if (panel.panel.getBoundingClientRect().height > max) {
                    return panel.panel.getBoundingClientRect().height;
                }

                return max;
            }, 0
        );
    }

    /**
     * Get the height of the active tab content
     * If the active tab is not set, the height of the tallest tab content is returned
     *
     * @returns {number}
     */
    getActiveTabHeight() {
        const activePanel = this.getActiveTabPanel();
        return activePanel
            ? activePanel.panel.getBoundingClientRect().height
            : this.getTallestTabHeight();
    }

    /**
     * Get the active Tab object
     *
     * @returns {Tab}
     */
    getActiveTabPanel() {
        return this.panels.find(panel => panel.tabId === this.activeTabId);
    }

    /**
     * Set the height of the container
     */
    setContainerHeight() {
        this.panelsContainer.style.minHeight = `${this.getActiveTabHeight() + this.heightPadding}px`;
    }

    /**
     * Set the active tab
     *
     * @param activeId
     */
    setActiveTab(activeId) {
        this.activeTabId = activeId;

        this.controls.forEach((control) => {
            if (control.tabTarget === this.activeTabId) {
                return control.activate();
            }

            return control.deactivate();
        });

        this.panels.forEach((panel) => {
            if (panel.tabId === this.activeTabId) {
                return panel.activate();
            }

            return panel.deactivate();
        });

        this.setContainerHeight();
    }

    /**
     * Initiate a resize listener
     * TODO: Allow for external resize listener to be passed into this class and used here
     */
    initResizeListener() {
        window.addEventListener('resize', this.setContainerHeight);
    }

    /**
     * Initiate the tabs
     */
    init() {
        this.initControls();
        this.initPanels();
        this.initSelect();

        this.setContainerHeight();
        this.initResizeListener();
    }
}

export default TabbedContent;
