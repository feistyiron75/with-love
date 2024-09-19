const quotes = [
    "More actions, less words.",
    "A true love story never ends.",
    "You are the source of my joy, the center of my world, and the whole of my heart.",
    "So, I love you because the entire universe conspired to help me find you.",
    "I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow.",
    "Women are meant to be loved, not to be understood.",
    "Love is something sent from heaven to worry the hell out of you.",
    "You open your heart knowing that there’s a chance it may be broken one day...",
    "The best thing to hold onto in life is each other.",
    "Love is an irresistible desire to be irresistibly desired.",
    "Wewe ndo tufaha ya macho yangu.",
    "I miss us every day.",
    "I love your mind, your smile, your eyes, your heart...",
    "Life is a series of changes and all I hope for is I am changing for the better.",
    "I MISS OUR CUDDLES.",
    "I MISS OUR KISSES.",
    "I MISS YOUR TOUCH.",
    "NAKUPENDA KAMA SUKARI NA NAKUAMBIA BABY SI SIRI.",
    "You are the BESTEST."
];

let currentQuoteIndex = 0;
const quoteElement = document.getElementById('quote');

// Shuffle quotes every 7 seconds
function displayNextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quoteElement.textContent = quotes[currentQuoteIndex];
}

setInterval(displayNextQuote, 7000);

// Trigger next quote on click
quoteElement.addEventListener('click', displayNextQuote);

// Scrapbook photo shuffling
const photos = document.querySelectorAll('.photo-collage img');
function shufflePhotos() {
    photos.forEach(photo => {
        const randomX = Math.floor(Math.random() * 90) + 'vw';
        const randomY = Math.floor(Math.random() * 90) + 'vh';
        const randomRotation = Math.floor(Math.random() * 360) + 'deg';
        photo.style.transform = `translate(${randomX}, ${randomY}) rotate(${randomRotation})`;
    });
}

setInterval(shufflePhotos, 7000); // Shuffle photos every 7 seconds
