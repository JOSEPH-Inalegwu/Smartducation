



function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((courseItem) => {
        cartQuantity += courseItem.quantity;
    });

    document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;
}