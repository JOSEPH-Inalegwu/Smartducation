import { cart, removeFromCart } from "./cart.js";
import { courses, getCourse } from "./course-data.js";
import { paymentSummary } from "./payment.js";


let cartSummaryHTML = '';

cart.forEach((courseItem) => {
    const courseId = courseItem.courseId;

    const matchingCourses = getCourse(courseId);

    cartSummaryHTML +=
    `
    <div class="cart-content-container
        js-cart-content-container-${matchingCourses.id}">
        <div class="cart-img">
            <img src="${matchingCourses.image}">
        </div>
        <div class="cart-content">
            <h4>${matchingCourses.name}</h4>
            <p>${matchingCourses.tutor}</p>
            <span>Bestseller</span>
            <img src="/SMARTDUCATION/Images/ratings/rating-${matchingCourses.rating.stars * 10}.png">

            <div class="course-content">
                <p>${matchingCourses.hour}</p>
                <p>${matchingCourses.lecture}</p>
                <p>All Levels</p>
                <p class="price">$${(matchingCourses.priceInCent / 100).toFixed(2)}</p>
            </div>

            <a href="#" class="remove-course js-remove-course"
            data-course-id="${matchingCourses.id}">
            Remove</a>
        </div>
    </div>
    `
});

document.querySelector('.js-main-cart-content')
.innerHTML = cartSummaryHTML;


document.querySelectorAll('.js-remove-course')
.forEach((link) => {
    link.addEventListener('click', () => {
        const courseId = link.dataset.courseId;

    removeFromCart(courseId);

    const container = document.querySelector(`.js-cart-content-container-${courseId}`);
    container.remove();
    });
});

paymentSummary();




