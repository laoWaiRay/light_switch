const bulb = document.querySelector('.bulb');
const body = document.querySelector('body');

bulb.addEventListener('click', () => {
    body.classList.toggle('on')
})