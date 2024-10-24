// Подключение курсора
const cursor = document.querySelector('.custom-cursor');

// Локомотив
document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        inertia: 0.6,
        getDirection: true,
    });
});

// Отслеживание движение мыши
document.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.6,
    ease: "power2.out"
  });
});