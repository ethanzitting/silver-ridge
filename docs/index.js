// Simple Hotfix for Broken Bootstrap Mobile Collapsing Menu
// Get the Hamburger Button and the Collapsing Menu
const hamburgerBtn = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('.navbar-collapse');

// Onclick, uncollapse the menu and show it in the aria value.
hamburgerBtn.addEventListener('click', () => {
  // Toggle menu show class
  navMenu.classList.toggle('show');

  // Toggle aria-expanded in collapsing menu values
  let ariaExpanded = hamburgerBtn.getAttribute('aria-expanded');
  notAriaExpanded = ariaExpanded === 'false' ? 'true' : 'false';
  hamburgerBtn.setAttribute('aria-expanded', notAriaExpanded);
})