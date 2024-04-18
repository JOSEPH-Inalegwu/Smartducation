export { cart, addCourseToCart, removeFromCart };

let cart = [{
    courseId: '6iK229-0a7V6-19qj78-40e66B',
    quantity: 1
}, {
    courseId: '6qe364-Dx763-09l2c3-3w5H08',
    quantity: 1
},];

function addCourseToCart(courseId) {
    let matchingItem;

        cart.forEach((courseItem) => {
            if(courseId === courseItem.courseId) {
                matchingItem = courseItem;
            }
        });

        if(matchingItem) {
            matchingItem.quantity++;
        } else {
            cart.push({
                courseId: courseId,
                quantity: 1
            });
        };
};  


function removeFromCart(courseId) {
    const newCart  = [];

    cart.forEach((courseItem) => {
        if(courseItem === courseId) {
            newCart.push(courseItem);
        }
    });

    cart = newCart;
};