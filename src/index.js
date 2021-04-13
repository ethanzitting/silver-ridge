const hamburgerBtn = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('.navbar-collapse');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
})