const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('img');
let currentSlide = 0;

function slideTo(index) {
    sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;
}

function nextSlide() {
    slideTo((currentSlide + 1) % slides.length);
}



// Autoplay functionality (optional)
setInterval(nextSlide, 2000); // Change interval as needed

