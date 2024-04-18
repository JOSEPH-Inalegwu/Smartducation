import { cart, removeFromCart } from "./cart.js";
import { courses } from "./course-data.js";

let courseSummaryHTML = '';

cart.forEach((courseItem) => {
    const courseId = courseItem.courseId;

    let matchingCourses;

    courses.forEach((course) => {
        if(course.id === courseId) {
            matchingCourses = course;
        }
    });


    courseSummaryHTML += 
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
            <img src="/Images/ratings/rating-${matchingCourses.rating.stars * 10}.png">

            <div class="course-content">
                <p>88.7 total hours</p>
                <p>678 lectures</p>
                <p>All Levels</p>
                <p class="price">$${matchingCourses.priceInCent / 100}</p>
            </div>

            <a href="#" class="remove-course js-remove-course"
            data-course-id="${matchingCourses.id}">
            Remove</a>
        </div>
    </div>
    `
});

document.querySelector('.js-main-left')
.innerHTML = courseSummaryHTML;

document.querySelectorAll('.js-remove-course')
.forEach((removeLink) => {
    removeLink.addEventListener('click', () => {
        const courseId = removeLink.dataset.courseId;
        removeFromCart(courseId);

        const container = document.querySelector(`.js-cart-content-container-${courseId}`);

        container.remove();

    });
});