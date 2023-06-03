



const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu-open');
});
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

document.querySelectorAll('.menu-container').forEach(menuContainer => {
  menuContainer.addEventListener('click', function() {
    this.classList.toggle('clicked');
  });
});

dropdownToggle.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show');
});


