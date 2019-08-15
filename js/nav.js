const navToggle = document.querySelector('.menu-button');
const menuToggle = document.querySelector('.menu-caption');
const closemenuToggle = document.querySelector('.close-caption');
const closeToggle = document.querySelector('.menu-close');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-is-open');
})

menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-is-open');
})

closemenuToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-is-open');
})

closeToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-is-open');
})

nav.addEventListener('click', () => {
    document.body.classList.remove('nav-is-open');
})