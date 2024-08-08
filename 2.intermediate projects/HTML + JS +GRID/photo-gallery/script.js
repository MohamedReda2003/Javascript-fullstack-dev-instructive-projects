document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    for (let i = 1; i <= 20; i++) {
        const img = document.createElement('img');
        img.src = `https://picsum.photos/200/200?random=${i}`;
        gallery.appendChild(img);
    }
});
