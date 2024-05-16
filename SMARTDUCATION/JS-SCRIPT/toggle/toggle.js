const toggleBtn = document.querySelector('.dropdown');
const toggleIcon = document.querySelector('.toggle-btn i');
const toggleDropdowunUl = document.querySelector('.dropdown-ul');


toggleBtn.addEventListener('click', () => {
    toggleDropdowunUl.classList.toggle('open');
    const isOpen = toggleDropdowunUl.classList.contains('open');

    toggleIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
});



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

if (pageName === 'contact-us.html') {
  document.querySelector('.contact').classList.add('active-link')
}

