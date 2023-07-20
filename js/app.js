const button = document.querySelector('.button');
const nav = document.querySelector('.nav');
button.addEventListener('click', function () {
    nav.classList.toggle('activo');
});
