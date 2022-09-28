const iconoMenu = document.querySelector('.nav__menu');
const navMenu = document.querySelector('.nav__list');

iconoMenu.addEventListener('click', () => {

    navMenu.classList.toggle('nav__list--show')
});