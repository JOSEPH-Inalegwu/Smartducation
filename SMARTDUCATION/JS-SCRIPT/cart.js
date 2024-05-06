export let cart = JSON.parse(localStorage.getItem('cart'))

// [{
//     courseId: '6iK229-0a7V6-19qj78-40e66B',
//     quantity: 1,
// }, {
//      courseId: 'J54g36-0T5C9-e2153h-9l1Z61',
//      quantity: 1,
// }];


function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(courseId) {
    let matchingCourses;

        cart.forEach((courseItem) => {
            if(courseId === courseItem.courseId) {
                matchingCourses = courseItem;
            }
        });

        if(matchingCourses) {
            matchingCourses.quantity++
        } else {
            cart.push({
                courseId: courseId,
                quantity: 1
            });
        }

        saveToStorage();
};


 export function removeFromCart(courseId) {
    const newCart  = [];

    cart.forEach((courseItem) => {
        if(courseItem.courseId !== courseId) {
            newCart.push(courseItem);
        }
    });

    cart = newCart;

    saveToStorage();
};

