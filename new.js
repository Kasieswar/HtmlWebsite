// Toggle Menu on Small Screens
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('#header ul');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});