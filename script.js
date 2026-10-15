// ------ BURGER MENU START ------ //

const button = document.querySelector('#menu-burger-button');
const nav = document.querySelector('#main-nav');
const burgerMenu = document.querySelector('.menu-open');
const crossMenu = document.querySelector('.menu-close');

button.addEventListener('click', function() {
    nav.classList.toggle('is-open');
    burgerMenu.classList.toggle('is-hidden');
    crossMenu.classList.toggle('is-hidden');
});
// ------ BURGER MENU END ------ //

// ------ QUANTITIES PRODUCT START ------ //
const minusBtn = document.querySelector('.minus-js'); 
const plusBtn = document.querySelector('.plus-js'); 
const input = document.querySelector('.qnty-input'); 

if (plusBtn && minusBtn && input) {
    
    plusBtn.addEventListener('click', () => {
        let value = parseInt(input.value);
        const max = parseInt(input.getAttribute('max')) || Infinity;
        
        if (value < max) {
            input.value = value + 1;
        }
    });
    
    minusBtn.addEventListener('click', () => {
        let value = parseInt(input.value);
        const min = parseInt(input.getAttribute('min')) || 1;
        
        if (value > min) {
            input.value = value - 1;
        }
    });
}
    
// ------ QUANTITIES PRODUCT END ------ //
