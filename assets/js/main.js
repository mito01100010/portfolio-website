const body = document.getElementsByTagName('body')[0];
const navTrigger = document.querySelector('.nav-trigger');
const heroTrigger = document.querySelector('.hero-trigger');
const hamMenu = document.querySelector('.js-menu');

navTrigger.addEventListener('click', () => {
    navTrigger.classList.toggle('show');
    hamMenu.classList.toggle('show');
    body.classList.toggle('hidden-overflow');
});

document.querySelectorAll('nav a').forEach(link => 
    link.addEventListener("click", () => {
        navTrigger.classList.remove('show');
        hamMenu.classList.remove('show');
        body.classList.remove('hidden-overflow');
}))
