function renderMenu() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    for (let i = 0; i < dishes.length; i++) {
        const element = dishes[i];

        document.getElementById('menuSelection').innerHTML += menuTemplate(element);
        renderMenuItems(element)
        document.getElementById('menuNavigation').innerHTML += menuNavigationTemplate(element);
    }
    document.getElementById('deliveryFeeCosts').innerText = deliveryFee + '€'
    renderShoppingCart();
};

function renderMenuItems(element) {
    for (let i = 0; i < element.items.length; i++) {
        const item = element.items[i]
        document.getElementById(`menuSelection${element.category}`).innerHTML += menuItemTemplate(item, i);
    }
};

function renderShoppingCart() {
    updateLocalStorage();
    let cartStorage = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cartStorage)
    document.getElementById('orderList').innerHTML = ''
    for (let index = 0; index < cartStorage.length; index++) {
        const item = cartStorage[index];
        if (item.amount > 0) {
            document.getElementById('orderList').innerHTML += shoppingCartTemplate(item);
        }
    }
    if (cart.length === 0) {
        document.getElementById('orderList').innerText = 'Warenkorb ist leer'
    }
    calculateTotalSum();
};

function updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}

function addOneToCart(itemID, itemCategory) {
    const cartIndex = cart.findIndex((element) => element.id == itemID)
    let item = cart[cartIndex]
    if (cartIndex >= 0) {
        if (item.amount < 10 && item.amount > 0) {
            cart[cartIndex].amount++
            renderShoppingCart();
        }
    } else {
        let categoryIndex = dishes.findIndex((element) => element.category == itemCategory)
        let itemIndex = dishes[categoryIndex].items.findIndex((element) => element.id == itemID)
        let item = dishes[categoryIndex].items[itemIndex]
        cart.push(item)
        item.amount++;
        renderShoppingCart()
    }
};

function removeOneFromCart(itemID, itemCategory) {
    const cartIndex = cart.findIndex((element) => element.id == itemID)
    let item = cart[cartIndex]
    if (cartIndex >= 0) {
        if (item.amount <= 10 && item.amount > 1) {
            cart[cartIndex].amount--
            renderShoppingCart();
        } else {
            cart[cartIndex].amount--
            cart.splice(cartIndex, 1)
            renderShoppingCart()
        }
    }
};

function deleteCartItem(itemID) {
    const cartIndex = cart.findIndex((element) => element.id == itemID);
    cart[cartIndex].amount = 0;
    cart.splice(cartIndex, 1)
    renderShoppingCart()
};

//Checkbox

function toggleDeliveryFee() {
    document.getElementById('deliveryFee').classList.toggle('dNone');
    calculateTotalSum();
}

function calculateTotalSum() {
    totalSum = 0;
    totalItemCost = 0;
    for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        totalSum += (element.amount * element.price);
        totalItemCost += (element.amount * element.price);
    }
    let isPickup = document.getElementById('deliveryCheckbox').checked;

    if (!isPickup) {
        totalSum += deliveryFee;
    }
    document.getElementById('totalSum').textContent = totalSum.toFixed(2) + '€';
    document.getElementById('totalItemCost').textContent = totalItemCost.toFixed(2) + '€';
};

function openCart() {
    let cartElement = document.getElementById('shoppingCart')
    cartElement.classList.toggle('showShoppingCart')
}

function placeOrder() {
    let orderConfirmation = document.getElementById('orderConfirmation')
    if (totalItemCost !== 0) {
        orderConfirmation.classList.toggle('showOrderConfirmation')
        cart = [];
        renderShoppingCart();
    } else if(orderConfirmation.classList.contains('showOrderConfirmation')){
        orderConfirmation.classList.toggle('showOrderConfirmation')
    }
};