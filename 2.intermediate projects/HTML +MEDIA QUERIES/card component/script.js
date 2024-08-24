const cardContainer = document.getElementById('card-container');
const addCardButton = document.getElementById('add-card');

// Array of sample image URLs
const imageUrls = [
    'https://picsum.photos/300/200?random=1',
    'https://picsum.photos/300/200?random=2',
    'https://picsum.photos/300/200?random=3',
    'https://picsum.photos/300/200?random=4',
    'https://picsum.photos/300/200?random=5'
];

// Function to create a new card
function createCard(title, body, imageUrl) {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <div class="card-image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="card-content">
            <h2 class="card-title">${title}</h2>
            <p class="card-body">${body}</p>
            <a href="#" class="button">Read more</a>
        </div>
    `;

    return card;
}

// Function to add a new card
function addCard() {
    const title = prompt('Enter card title:') || 'New Adventure';
    const body = prompt('Enter card description:') || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

    const newCard = createCard(title, body, randomImageUrl);
    cardContainer.appendChild(newCard);
}

// Add initial card
addCard();

// Event listener for add card button
addCardButton.addEventListener('click', addCard);

// Event delegation for read more buttons
cardContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('button')) {
        e.preventDefault();
        alert('You clicked Read More!');
    }
});