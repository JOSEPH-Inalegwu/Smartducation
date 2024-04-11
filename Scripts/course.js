// The course data
const courses = [{
    Id: 'uahdt-97uks-jahj-uhj9-91j2',
    image: '/Images/Course section-a/Digital marketing.jpg',
    name: 'Navigating the Digital Landscape: Strategies for Success in a Crowded Market',
    tutor: 'Dr Emily Blake',
    rating: {
        stars: 4.5,
    },
    priceInCent: 2099,
},
{
    image: '/Images/Course section-a/web development.jpeg',
    name: 'Full-Stack Web Development: Bridging the Gap Between Frontend and Backend',
    tutor: 'Cameron Reed & Dr. Angela Zi',
    rating: {
        stars: 5
    },
    priceInCent: 3089,
},
{
    image: '/Images/Courses/python.jpg',
    name: 'Automate the Boring Stuffs with Python',
    tutor: 'Joseph Jonah',
    rating: {
        stars: 5
    },
    priceInCent: 2899,
},
{
    image: '/Images/Courses/hacking.jpg',
    name: 'The Ethics of Hacking: A Guide to Being a Responsible Hacker',
    tutor: 'Kathrine Roy & Chris Morris ',
    rating: {
        stars: 4
    },
    priceInCent: 4024,
}, 
{
    image: '/Images/Courses/DataAnalytic.jpg',
    name: 'Getting Started with Data Anlytics from Zero to Hero',
    tutor: 'Joseph Jonah',
    rating: {
        stars: 4.5
    },
    priceInCent: 1922,
},
{
    image: '/Images/Courses/js.jpg',
    name: 'Javascript for a Successful Career in Web Development',
    tutor: 'Krill Raymond',
    rating: {
        stars: 4
    },
    priceInCent: 3480,
}];

//Generating the course html
let coursesHTML = '';

courses.forEach(course => {
    coursesHTML +=  
    `
        <div class="course-card">
            <img src="${course.image}">
            <div class="content">
                <h4>${course.name}</h4>
                <p>${course.tutor}</p>
                <img src="/Images/ratings/rating-${course.rating.stars * 10}.png">
                <p class="price">$${course.priceInCent / 100}</p>
            
                <div class="cta">
                    <button class="cart-btn js-add-to-cart">Add to Cart</button>
                    <div class="add-to-cart">
                        <img src="/Images/Icons/checkmark.png"> 
                    <p>Added</p>
                    </div>
                </div>
            </div>
        </div>
    `
});

document.querySelector('.js-course-flex').innerHTML = coursesHTML;


document.querySelectorAll('.js-add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('added')
    })
})