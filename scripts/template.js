function menuTemplate(element) {
    return `
    <section id="menuSelection${element.category}" class="menuItems">
        <h2 id="${element.category}">${element.category}</h2>
    </section>
    `
}

function menuItemTemplate(item) {
    return `
    <div class="menuItem" style='background-image: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url("./assets/images/${item.img}")'>
        <div>
            <h3 id="itemTitle${item.name}">${item.name}</h3>
            <p id="itemText${item.name}">${item.description}</p>
        </div>
        <div>
            <span class="itemPrice" id="itemPrice${item.name}">${item.price}€</span>
            <button type="button"><img src="./assets/icons/plus_icon.svg" alt=""></button>
        </div>
    </div>
    `
}

function menuNavigationTemplate(element){
    return `
        <a href="#${element.category}" class="menuNavigationItem">${element.category}</a>
    `
};