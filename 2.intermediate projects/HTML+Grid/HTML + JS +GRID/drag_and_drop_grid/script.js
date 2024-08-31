const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.draggable = true;

  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

let draggedItem;

function dragStart(event) {
  draggedItem = event.target;
  event.target.classList.add('dragging');
}

function dragEnd() {
  draggedItem.classList.remove('dragging');
}

//this is a simple code to give the dragging animation when trying to drag an item in the page