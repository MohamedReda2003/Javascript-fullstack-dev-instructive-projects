const gridContainer = document.getElementById('grid-container');
const addBtn = document.getElementById('add-odin');
const removeBtn = document.getElementById('remove-odin');
const bgColorPicker = document.getElementById('bg-color');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.getElementsByClassName('close')[0];

let odinCount = 0;

function createOdinElement(number) {
    const odin = document.createElement('div');
    odin.className = 'grid-item';
    odin.innerHTML = `
        <p>Odin ${number}</p>
        <img src="https://i.imgur.com/jkwFqfX.png" alt="Odin ${number}" />
    `;
    odin.addEventListener('click', () => showModal(number));
    return odin;
}

function addOdin() {
    odinCount++;
    gridContainer.appendChild(createOdinElement(odinCount));
}

function removeOdin() {
    if (odinCount > 0) {
        gridContainer.removeChild(gridContainer.lastChild);
        odinCount--;
    }
}

function updateBackgroundColor() {
    gridContainer.style.backgroundColor = bgColorPicker.value;
}

function showModal(number) {
    modalTitle.textContent = `Odin ${number}`;
    modalImage.src = 'https://i.imgur.com/jkwFqfX.png';
    modalImage.alt = `Odin ${number}`;
    modalDescription.textContent = `This is Odin number ${number}. Odin is the god of wisdom, poetry, death, divination, and magic in Norse mythology.`;
    modal.style.display = 'block';
}

addBtn.addEventListener('click', addOdin);
removeBtn.addEventListener('click', removeOdin);
bgColorPicker.addEventListener('input', updateBackgroundColor);
closeModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


for (let i = 0; i < 10; i++) {
    addOdin();
}