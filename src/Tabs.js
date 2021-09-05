class Tabs {
    init() {
        this._setEvents();
    }

    _showClickedTab(ev) {
        const tabButtonClassName = ev.target.className;
        const tab = document.querySelector(`.${tabButtonClassName}-content`);
        const $tabs = document.querySelectorAll(".tab-content-container > div");
        $tabs.forEach(el => el.classList.add("hidden"));

        tab.classList.remove("hidden");
    }

    _setToggleTabVisibilityEvent() {
        const $tabsButtons = document.querySelectorAll(".button-tab-container button");

        $tabsButtons.forEach(
            el => el.addEventListener(
                "click", (ev) => this._showClickedTab(ev)
            )
        )
    }

    _setEvents() {
        this._setToggleTabVisibilityEvent();
    }
} 

export default Tabs;