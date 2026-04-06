const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentIndex = 0;
let autoSlide = null;

function moveTo(index) {
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    moveTo(currentIndex + 1);
}

function prevSlide() {
    moveTo(currentIndex - 1);
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 5000);
}

prevButton.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

nextButton.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

autoSlide = setInterval(nextSlide, 5000);
