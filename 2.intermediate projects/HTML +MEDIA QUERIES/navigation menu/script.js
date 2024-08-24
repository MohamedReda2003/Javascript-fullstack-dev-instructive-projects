const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-item");
const addNavItemBtn = document.getElementById("addNavItem");
const viewportWidthSpan = document.getElementById("viewportWidth");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
});

// Highlight active nav item
navItems.forEach(item => {
    item.addEventListener("click", () => {
        navItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});

// Add new navigation item
addNavItemBtn.addEventListener("click", () => {
    const newItemName = prompt("Enter the name for the new navigation item:");
    if (newItemName) {
        const newItem = document.createElement("a");
        newItem.href = "#";
        newItem.className = "nav-item";
        newItem.textContent = newItemName;
        newItem.addEventListener("click", () => {
            navItems.forEach(i => i.classList.remove("active"));
            newItem.classList.add("active");
        });
        navLinks.appendChild(newItem);
    }
});

// Update viewport width display
function updateViewportWidth() {
    viewportWidthSpan.textContent = window.innerWidth;
}

updateViewportWidth();
window.addEventListener("resize", updateViewportWidth);