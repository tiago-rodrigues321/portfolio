let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length; // Passa para a próxima imagem
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // Muda a imagem a cada 3 segundos

