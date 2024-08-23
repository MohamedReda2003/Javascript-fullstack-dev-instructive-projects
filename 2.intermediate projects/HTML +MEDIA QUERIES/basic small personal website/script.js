const toggleThemeBtn = document.getElementById('toggleTheme');
const addNavItemBtn = document.getElementById('addNavItem');
const navList = document.getElementById('navList');
const contentArea = document.getElementById('contentArea');
const viewportWidthSpan = document.getElementById('viewportWidth');
const addSectionModal = document.getElementById('addSectionModal');
const saveSectionBtn = document.getElementById('saveSectionBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const sectionContentTextarea = document.getElementById('sectionContent');

// Theme toggle
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// to Add navigation item
addNavItemBtn.addEventListener('click', () => {
    const newItem = prompt('Enter new navigation item name:');
    if (newItem) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'nav-link';
        a.textContent = newItem;
        li.appendChild(a);
        navList.appendChild(li);
    }
});

// to Add section
function addSection(content) {
    const section = document.createElement('section');
    section.className = 'section';
    section.textContent = content;
    section.draggable = true;
    section.addEventListener('dragstart', dragStart);
    section.addEventListener('dragover', dragOver);
    section.addEventListener('drop', drop);
    contentArea.appendChild(section);
}

// Initial sections
addSection('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
addSection('Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

// Drag and drop functionality
let draggedItem = null;

function dragStart(e) {
    draggedItem = e.target;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
}

function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function drop(e) {
    e.preventDefault();
    if (e.target.className === 'section' && e.target !== draggedItem) {
        if (e.clientY > e.target.getBoundingClientRect().top + e.target.offsetHeight / 2) {
            e.target.parentNode.insertBefore(draggedItem, e.target.nextSibling);
        } else {
            e.target.parentNode.insertBefore(draggedItem, e.target);
        }
    }
}

// Viewport width display
function updateViewportWidth() {
    viewportWidthSpan.textContent = window.innerWidth;
}

updateViewportWidth();
window.addEventListener('resize', updateViewportWidth);

// Modal for adding new sections
saveSectionBtn.addEventListener('click', () => {
    const content = sectionContentTextarea.value.trim();
    if (content) {
        addSection(content);
        sectionContentTextarea.value = '';
        addSectionModal.style.display = 'none';
    }
});

closeModalBtn.addEventListener('click', () => {
    addSectionModal.style.display = 'none';
});

// Open modal when clicking on content area
contentArea.addEventListener('dblclick', (e) => {
    if (e.target === contentArea) {
        addSectionModal.style.display = 'block';
    }
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === addSectionModal) {
        addSectionModal.style.display = 'none';
    }
});