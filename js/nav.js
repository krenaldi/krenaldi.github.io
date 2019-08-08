const navToggle = document.querySelector('.menu-button');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-is-open');
})