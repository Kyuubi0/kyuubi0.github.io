document.addEventListener("mousemove", (e) => {
    const bg = document.getElementById("parallax-bg");
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    bg.style.transform = `translate(${x}px, ${y}px)`;
});