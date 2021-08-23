import './style.scss';

class Tabs {
    init() {
        const tab = document.querySelector(".tab2-content");
        tab.classList.remove("hidden");
    }
} 

const tabs = new Tabs();
tabs.init();