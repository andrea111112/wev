const menuToggle = document.querySelector('.menu-toggle');
const menuPrincipal = document.querySelector('.menu-principal');

menuToggle.addEventListener('click', () => {
    menuPrincipal.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});