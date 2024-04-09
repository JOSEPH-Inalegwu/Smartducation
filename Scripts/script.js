function countdownNumber(elementId, initialValue) {
    let value = initialValue;
    const element = document.getElementById('students');
    const intervalId = setInterval(() => {
      value += 8;
      element.innerHTML = value;
      if (value === 10000) {
        clearInterval(intervalId);
      }
    });
  }

  function modulesContdown(modulesId, modulesInitial) {
    let value = modulesInitial;
    const modules = document.querySelector('#modules');

    const moduleInterval = setInterval(() => {
        value += 4;
        modules.innerHTML = value;
        if(value === 5000) {
            clearInterval(moduleInterval);
        }
    });
  }

  countdownNumber("students", 0);
  modulesContdown("modules", 0)



var schoolsAndStudents = document.querySelector('#schools')
var yearsOfExperience = document.querySelector('#experience')


const schoolInterval = setInterval(() => {
    let schoolInitial = schoolsAndStudents.innerHTML;
    schoolInitial++
    schoolsAndStudents.innerHTML = schoolInitial
    if(schoolInitial === 48) {
        clearInterval(schoolInterval)
    }
}, 130);

const experienceInterval = setInterval(() => {
    let experienceInitial = yearsOfExperience.innerHTML;
    experienceInitial++;
    yearsOfExperience.innerHTML = experienceInitial
    if(experienceInitial === 10) {
        clearInterval(experienceInterval)
    }
}, 600);




var testimonials = [
  {
      name: "Jack Thompson",
      image: "/Images/Testimonials/1712481294302.jpg",
      message: "I wasn't sure if online learning was for me, but Smartducation proved me wrong! The program's user-friendly interface and dynamic courses have made my learning experience enjoyable and rewarding."
  },
  {
      name: "Emily P Johnson",
      image: "/Images/Testimonials/fifth.jpg",
      message: "The interactive lessons and engaging content make learning fun and accessible. Smartducation has equipped me with the skills and knowledge to excel academically and prepare for my future. I'm grateful for this invaluable opportunity!"
  },
  {
      name: "Ethan Rodrygo",
      image: "/Images/Testimonials/happy-teenage-boy.jpg",
      message: "The comprehensive curriculum and engaging resources have enriched my knowledge and expanded my skill set in ways I never thought possible."
  },
  {
      name: "Sophia Carter",
      image: "/Images/Testimonials/fourthFemale.jpg",
      message: "As a working professional with a hectic schedule, I was skeptical about online education. The flexibility to learn at my own pace and the clarity of instruction from your dedicated tutors made all the difference"
  }
];


// Index to keep track of the current testimonial
var currentIndex = 0;

// Function to change testimonial to the next one
function changeTestimonial() {
    var testimonial = testimonials[currentIndex];
    
    // Update testimonial content
    var testimonialContainer = document.getElementById('testimonialContainer');
    testimonialContainer.innerHTML = `
        <div class="testimonial">
            <img src="${testimonial.image}">
            <h4>${testimonial.name}</h4>
            <p>${testimonial.message}</p>
        </div>
    `;
    
    //Increment index to get the next testimonial
    currentIndex = (currentIndex + 1) % testimonials.length;
}

//Call the function initially to display the first testimonial
changeTestimonial();

//Set interval to change testimonials every 5 seconds
setInterval(changeTestimonial, 5000);

