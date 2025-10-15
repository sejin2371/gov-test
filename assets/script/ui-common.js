// tab
const tab = document.querySelector('.ui-tab-wrap');
const tabButtons = tab.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tab.querySelectorAll('[role="tabpanel"]'));

function tabClickHandler(e) {
    //Hide All Tabpane
    tabPanels.forEach((panel) => {
        panel.hidden = 'true';
    });

    //Deselect Tab Button
    tabButtons.forEach((button) => {
        button.setAttribute('aria-selected', 'false');
    });

    //Mark New Tab
    e.currentTarget.setAttribute('aria-selected', 'true');

    //Show New Tab
    const { id } = e.currentTarget;

    const currentTab = tabPanels.find(
        (panel) => panel.getAttribute('aria-labelledby') === id
    );

    currentTab.hidden = false;
}

tabButtons.forEach((el) => {
    el.addEventListener('click', tabClickHandler);
});
