// Simple fade-in animation on scroll

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 400;
        const height = sec.offsetHeight;

        if (top > offset && top < offset + height) {
            sec.style.animation = "fadeIn 1.5s ease-in-out";
        }
    });
});