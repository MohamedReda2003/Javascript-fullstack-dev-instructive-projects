const card = document.querySelector('.card');
const button = card.querySelector('button');

button.addEventListener('click', () => {
    card.classList.toggle('active');
});
