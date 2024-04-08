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
        value += 5;
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