/** Carousel Logic */
/** Seleccion de la zona HTML del Carousel*/
let carouselSlide = document.querySelector('.carousel-slide');
let carouselImages = document.querySelectorAll('.carousel-slide div');

/** Botones */
let prevBtn = document.querySelector('#prevBtn');
let nextBtn = document.querySelector('#nextBtn');

/** Counter para llevar el control de los click y Size para saber cuantos elementos tiene el Carousel*/
let counter = 0;
let size = carouselImages[0].clientWidth;

/** Anima el Carousel en el eje X */
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

/** Mueven en Carousel en el eje X dependiendo que aprietes*/
nextBtn.addEventListener('click', () => {
    if (counter > carouselImages.length - 6) return;

    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter < 1) return;

    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});