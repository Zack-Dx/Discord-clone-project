const openIcon = document.querySelector('.btn--open');
const closeIcon = document.querySelector('.btn--close');
const navMenu = document.querySelector('.nav__menu');
const bodyEl = document.body;

const openMenu = () => {
    navMenu.classList.add('nav__menu--active');
    bodyEl.style.overflow = "hidden";
    addBackdrop();
}

const closeMenu = () => {
    navMenu.classList.remove('nav__menu--active');
    bodyEl.style.overflow = "";
    removeBackdrop();
}

const addBackdrop = () => {
    const backdrop = document.createElement('div');
    const navEl = document.querySelector('.nav');
    backdrop.classList.add('nav__backdrop');

    navEl.insertBefore(backdrop, navMenu);
}

const removeBackdrop = () => {
    document.querySelector('.nav__backdrop').remove();
}

const closeMenuOutside = e => {
    if(e.target.classList.contains('nav__backdrop')){
        closeMenu();
    }
}

openIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);
window.addEventListener('click', closeMenuOutside);