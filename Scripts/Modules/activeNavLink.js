//Active link indicator
const pathName = window.location.pathname;
const pageName = pathName.split('/').pop();

if (pageName === 'index.html') {
    document.querySelector('.home').classList.add('active-link')
}

if (pageName === 'about.html') {
  document.querySelector('.about').classList.add('active-link')
}

if (pageName === 'courses.html') {
  document.querySelector('.courses').classList.add('active-link')
}

if (pageName === 'contact.html') {
  document.querySelector('.contact').classList.add('active-link')
}