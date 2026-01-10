document.addEventListener("mousemove", function(e) {
    const amount = 20; // Hareket miktarı
    const x = (e.clientX / window.innerWidth - 0.5) * amount;
    const y = (e.clientY / window.innerHeight - 0.5) * amount;
    
    // Arka plandaki deseni hareket ettirir
    document.body.style.setProperty('--move-x', `${x}px`);
    document.body.style.setProperty('--move-y', `${y}px`);
    
    // CSS'deki pseudo-element'e müdahale etmek yerine body background'u da kullanabiliriz
    document.body.style.backgroundPosition = `${x}px ${y}px`;
});