const container = document.getElementById('tileContainer');
const addTileBtn = document.getElementById('addTile');
const removeTileBtn = document.getElementById('removeTile');
const layoutSelect = document.getElementById('layoutSelect');
const tileInfo = document.getElementById('tileInfo');

const colors = ['#1abc9c', '#3498db', '#9b59b6', '#34495e', '#e74c3c', '#f39c12'];

function createTile(number) {
    const tile = document.createElement('div');
    tile.className = `tile tile-${number}`;
    tile.dataset.number = number;
    tile.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    tile.textContent = number;
    tile.addEventListener('click', showTileInfo);
    return tile;
}

function addTile() {
    const newTileNumber = container.children.length + 1;
    container.appendChild(createTile(newTileNumber));
}

function removeTile() {
    if (container.children.length > 0) {
        container.removeChild(container.lastElementChild);
    }
}

function changeLayout() {
    container.className = `container ${layoutSelect.value}`;
}

function showTileInfo(event) {
    const tileNumber = event.target.dataset.number;
    const tileColor = event.target.style.backgroundColor;
    tileInfo.innerHTML = `
        Tile Number: ${tileNumber}<br>
        Color: ${tileColor}<br>
        Size: ${event.target.offsetWidth}px x ${event.target.offsetHeight}px
    `;
}

addTileBtn.addEventListener('click', addTile);
removeTileBtn.addEventListener('click', removeTile);
layoutSelect.addEventListener('change', changeLayout);

// Initialize tile info display
container.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener('click', showTileInfo);
});

// Responsive tile sizing
function updateTileSizes() {
    const tiles = container.querySelectorAll('.tile');
    tiles.forEach(tile => {
        if (window.innerWidth >= 992) {
            tile.style.flexBasis = 'calc(25% - 7.5px)';
        } else if (window.innerWidth >= 768) {
            tile.style.flexBasis = 'calc(50% - 5px)';
        } else {
            tile.style.flexBasis = '100%';
        }
    });
}

window.addEventListener('resize', updateTileSizes);
updateTileSizes();