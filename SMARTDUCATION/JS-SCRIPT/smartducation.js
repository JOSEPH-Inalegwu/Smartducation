import { cart, addToCart } from "./cart.js";
import { courses } from "./course-data.js";




let courseHTML = '';

courses.forEach((course) => {
    courseHTML += 
    `
    <div class="product-container">
        <div class="product-image-container">
        <img class="product-image"
            src="${course.image}">
        </div>
    
        <div class="product-name limit-text-to-2-lines">
            ${course.name}
        </div>

        <div class="course-tutor">
            ${course.tutor}
        </div>
    
        <div class="product-rating-container">
        <img class="product-rating-stars"
            src="Images/ratings/rating-${course.rating.stars * 10}.png">
        <div class="product-rating-count">
            ${course.rating.count}
        </div>
        </div>

        <div class="product-price">
        $${(course.priceInCent / 100).toFixed(2)}
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart 
        js-added-to-cart-${course.id}">
        <img src="Images/Icons/checkmark.png">
        Added
        </div>

        <button class="add-to-cart-button js-add-to-cart-btn"
        data-course-id="${course.id}">
            Add to Cart
        </button>
    </div>
    `
});


document.querySelector('.js-course-grid').innerHTML
= courseHTML;


function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((courseItem) => {
        cartQuantity += courseItem.quantity;
    });

    console.log(cartQuantity)

    document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity;
}



document.querySelectorAll('.js-add-to-cart-btn').
forEach((button) => {
    button.addEventListener('click', () => {
        const courseId = button.dataset.courseId;

        addToCart(courseId);
        updateCartQuantity();

        //Displays the added message pop-up
        var addedMsg = document.querySelector
        (`.js-added-to-cart-${courseId}`);
        addedMsg.classList.add('show-added-msg');

        setTimeout(() => {
            addedMsg.classList.remove('show-added-msg');
        }, 1200);
         
    });
});