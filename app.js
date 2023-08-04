const menu = document.querySelector('.menu');
const list = document.querySelector('.header__links');
menu.addEventListener('click', () => {
    list.classList.toggle('is-opened')
})
