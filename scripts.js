document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel-container');
    const images = document.querySelector('.carousel-images');
    const dotsContainer = document.querySelector('.carousel-dots');
    const imageWidth = container.clientWidth;
    const totalImages = images.children.length;
    let currentIndex = 0;

    // Create dots and append them to the dotsContainer
    for (let i = 0; i < totalImages; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (i === currentIndex) {
            dot.classList.add('active');
        }
        dotsContainer.appendChild(dot);
    }

    function updateCarousel() {
        images.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        updateDots();
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function autoScroll() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }

    // Set the interval for automatic scrolling
    setInterval(autoScroll, 1500); // Adjust time in milliseconds (3000ms = 3s)
});
