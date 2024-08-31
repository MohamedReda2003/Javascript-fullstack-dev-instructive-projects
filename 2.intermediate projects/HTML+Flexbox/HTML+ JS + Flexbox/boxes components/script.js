const flexContainer = document.getElementById('flexContainer');
const addBoxBtn = document.getElementById('addBoxBtn');
const removeBoxBtn = document.getElementById('removeBoxBtn');
const flexDirectionSelect = document.getElementById('flexDirectionSelect');
const containerColorPicker = document.getElementById('containerColorPicker');
const editModal = document.getElementById('editModal');
const boxContentInput = document.getElementById('boxContentInput');
const saveContentBtn = document.getElementById('saveContentBtn');
const closeModalBtn = document.querySelector('.close');

let boxCount = 0;
let currentEditBox = null;

function createBox() {
    boxCount++;
    const box = document.createElement('div');
    box.className = 'flex-item';
    box.textContent = `Box ${boxCount}`;
    box.addEventListener('click', () => openEditModal(box));
    return box;
}

function addBox() {
    flexContainer.appendChild(createBox());
}

function removeBox() {
    if (boxCount > 0) {
        flexContainer.removeChild(flexContainer.lastChild);
        boxCount--;
    }
}

function changeFlexDirection() {
    flexContainer.style.flexDirection = flexDirectionSelect.value;
}

function changeContainerColor() {
    flexContainer.style.backgroundColor = containerColorPicker.value;
}

function openEditModal(box) {
    currentEditBox = box;
    boxContentInput.value = box.textContent;
    editModal.style.display = 'block';
}

function closeModal() {
    editModal.style.display = 'none';
}

function saveBoxContent() {
    if (currentEditBox) {
        currentEditBox.textContent = boxContentInput.value;
        closeModal();
    }
}

// Event Listeners
addBoxBtn.addEventListener('click', addBox);
removeBoxBtn.addEventListener('click', removeBox);
flexDirectionSelect.addEventListener('change', changeFlexDirection);
containerColorPicker.addEventListener('input', changeContainerColor);
saveContentBtn.addEventListener('click', saveBoxContent);
closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
    if (event.target === editModal) {
        closeModal();
    }
});

// Initialize with 5 boxes
for (let i = 0; i < 5; i++) {
    addBox();
}