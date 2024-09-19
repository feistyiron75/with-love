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
const collageContainer = document.querySelector('.photo-collage');
const collageImages = Array.from({ length: 26 }, (_, i) => `images/photo${i + 1}.jpg`);

function showQuote() {
    quoteElement.innerHTML = `“${quotes[index]}”`;
    quoteElement.style.opacity = 0;
    setTimeout(() => {
        quoteElement.style.opacity = 1;
        quoteElement.style.transform = 'scale(1.05)';
    }, 300);
    index = (index + 1) % quotes.length;
}

setInterval(showQuote, 7000); // Shuffle quotes every 7 seconds

quoteElement.addEventListener('click', showQuote);

// Photo Collage Setup
function shufflePhotos() {
    const shuffledImages = collageImages.sort(() => 0.5 - Math.random());
    collageContainer.innerHTML = '';
    shuffledImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.style.transition = 'transform 0.7s ease-in-out, opacity 0.7s ease-in-out';
        img.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity between 0.5 and 1
        img.style.transform = `scale(${Math.random() * 0.5 + 0.75})`; // Random scale between 0.75 and 1.25
        collageContainer.appendChild(img);
    });
}

setInterval(shufflePhotos, 7000); // Change photos every 7 seconds

// Initial call to display photos and quotes
shufflePhotos();
showQuote();
