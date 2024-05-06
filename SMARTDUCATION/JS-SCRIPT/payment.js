import { cart } from "./cart.js";
import { getCourse } from "./course-data.js";

export function paymentSummary() {
    let coursePriceCent = 0;

    cart.forEach((courseItem) => {
       const course = getCourse(courseItem.courseId);

       coursePriceCent += course.priceInCent * courseItem.quantity;
    });

    const paymentSummaryHTML = `
    <div class="checkout">
        <h4>Total:</h4>
        <h2>$${(coursePriceCent / 100).toFixed(2)}</h2>
        <a href="#" class="checkout-link">checkout</a>

        <div class="promotion">
        <h3>Promotions</h3>
        <p><b>Smartducation</b> Tech the World</p>
        <input type="text" placeholder="Enter Coupon">
        <a href="" class="apply js-apply">Apply</a>
    </div>
    `;


    document.querySelector('.js-payment')
    .innerHTML = paymentSummaryHTML;


};