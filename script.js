// TEMA SWITCH MANTIĞI
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    }
});

// PARALAKS EFECT - NOKTALARIN HAREKETİ
document.addEventListener("mousemove", (e) => {
    const dots = document.getElementById("parallax-dots");
    
    // Değeri artırırsan hareket yavaşlar (30 idealdir)
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;
    
    dots.style.transform = `translate(${x}px, ${y}px)`;
});