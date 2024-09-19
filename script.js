document.addEventListener('DOMContentLoaded', function () {
    // Collage Photos Shuffling
    const collagePhotos = document.querySelectorAll('.collage img');
    let photoIndex = 0;

    function shufflePhotos() {
        collagePhotos.forEach((photo, index) => {
            photo.style.opacity = '0';
        });

        collagePhotos[photoIndex].style.opacity = '1';
        photoIndex = (photoIndex + 1) % collagePhotos.length;

        setTimeout(shufflePhotos, 9000); // 9 seconds per photo transition
    }

    shufflePhotos();

    // Quotes Transition
    const quotes = document.querySelectorAll('.quotes p');
    let quoteIndex = 0;

    function showNextQuote() {
        quotes.forEach((quote, index) => {
            quote.style.opacity = '0';
        });

        quotes[quoteIndex].style.opacity = '1';
        quoteIndex = (quoteIndex + 1) % quotes.length;

        setTimeout(showNextQuote, 8000); // 8 seconds per quote transition
    }

    showNextQuote();
});
