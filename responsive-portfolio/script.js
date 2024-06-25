document.addEventListener('DOMContentLoaded', () => {
    const portfolio = document.querySelector('.portfolio');
    for (let i = 1; i <= 10; i++) {
        const div = document.createElement('div');
        div.className = 'portfolio-item';
        div.textContent = `Portfolio Item ${i}`;
        portfolio.appendChild(div);
    }
});
