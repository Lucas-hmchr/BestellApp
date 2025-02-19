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
            <span class="itemPrice" id="itemPrice${item.name}">${item.price.toFixed(2)}€</span>
            <button type="button" onclick="addOneToCart(${item.id}, '${item.category}')"><img src="./assets/icons/plus_icon.svg" alt=""></button>
        </div>
    </div>
    `
}

function menuNavigationTemplate(element){
    return `
        <a href="#${element.category}" class="menuNavigationItem">${element.category}</a>
    `
};

function shoppingCartTemplate(item){
    return `
        <div class="orderListItem" id="orderListItem${item.id}">
            <div class="orderListItemTopContainer">
                <img src="./assets/icons/${item.icon}" alt="">
                <div class="orderListItemInfos">
                    <span>${item.name}</span>
                    <span class="singleItemPrice">${item.price.toFixed(2)}€</span>
                </div>
                <button class="deleteButton" onclick="deleteCartItem(${item.id})"><img src="./assets/icons/trashcan.svg" alt=""></button>
            </div>
            <div class="orderListItemBottomContainer">
                <div class="orderItemAmount">
                    <button onclick="removeOneFromCart(${item.id},'${item.category}')">-</button>
                    <span id="amount${item.id}">${item.amount}</span>
                    <button onclick="addOneToCart(${item.id},'${item.category}')">+</button>
                </div>
                <span class="totalItemPrice" id="itemSum${item.id}">${(item.price * item.amount).toFixed(2)}€</span>
            </div>
            <hr>
        </div>
    `
}