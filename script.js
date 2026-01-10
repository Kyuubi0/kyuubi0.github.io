document.addEventListener("mousemove", (e) => {
    const bg = document.getElementById("parallax-bg");
    const moveX = (window.innerWidth / 2 - e.pageX) / 30;
    const moveY = (window.innerHeight / 2 - e.pageY) / 30;
    bg.style.transform = `translate(${moveX}px, ${moveY}px)`;
});