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

let index = 0;
const quoteElement = document.getElementById("quote");

function showQuote() {
    quoteElement.innerHTML = `“${quotes[index]}”`;
    index = (index + 1) % quotes.length;
}

setInterval(showQuote, 6000); // Change quote every 6 seconds

showQuote();

// Shuffling collage images
const collageImages = Array.from({ length: 26 }, (_, i) => `images/photo${i + 1}.jpg`);

const collageContainer = document.querySelector('.photo-collage');

function populateCollage() {
    collageImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add(Math.random() > 0.5 ? 'large' : 'medium');
        collageContainer.appendChild(img);
    });
}

populateCollage();

function shuffleCollage() {
    collageContainer.innerHTML = ''; // Clear current images
    collageImages.sort(() => Math.random() - 0.5); // Shuffle
    populateCollage();
}

setInterval(shuffleCollage, 10000); // Shuffle every 10 seconds
