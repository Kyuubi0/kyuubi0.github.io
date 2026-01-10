// TEMA DEĞİŞTİRME
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
});

// PARALLAX EFECT
document.addEventListener("mousemove", (e) => {
    const bg = document.getElementById("parallax-bg");
    // Sayı ne kadar küçülürse hareket o kadar artar
    const x = (window.innerWidth / 2 - e.pageX) / 15;
    const y = (window.innerHeight / 2 - e.pageY) / 15;
    bg.style.transform = `translate(${x}px, ${y}px)`;
});