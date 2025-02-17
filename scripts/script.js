function renderMenu() {
    for (let i = 0; i < dishes.length; i++) {
        const element = dishes[i];
        
        document.getElementById('menuSelection').innerHTML += menuTemplate(element);
        renderMenuItems(element)
        document.getElementById('menuNavigation').innerHTML += menuNavigationTemplate(element);
    }
};

function renderMenuItems(element) {
    for (let i = 0; i < element.items.length; i++) {
        const item = element.items[i]
        document.getElementById(`menuSelection${element.category}`).innerHTML += menuItemTemplate(item, i);
    }
};
