/* Cuando hago CLICJ .button. .nav TOGGLE 'activo' */


const button = (document.querySelector('.button-burger') as HTMLButtonElement)
const nav    = (document.querySelector('.nav')    as HTMLElement)

button.addEventListener('click',() : void => {
    nav.classList.toggle('activo')
})