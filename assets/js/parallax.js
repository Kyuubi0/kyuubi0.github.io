document.addEventListener("mousemove", function(e) {
    const amount = 30; // Hareket şiddeti
    const x = (e.clientX / window.innerWidth - 0.5) * amount;
    const y = (e.clientY / window.innerHeight - 0.5) * amount;
    
    document.documentElement.style.setProperty('--move-x', `${x}px`);
    document.documentElement.style.setProperty('--move-y', `${y}px`);
});