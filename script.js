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
const quoteContainer = document.getElementById("quote-container");

function showQuote() {
    quoteElement.innerHTML = `“${quotes[index]}”`;
    index = (index + 1) % quotes.length;
}

function nextQuoteOnClick() {
    quoteContainer.addEventListener('click', showQuote);
}

setInterval(showQuote, 7000); // Change quote every 7 seconds
showQuote();
nextQuoteOnClick();

// Shuffling images randomly with a 7-second delay
const collageContainer = document.querySelector('.photo-collage');
const collageImages = [
    'img1.jpg', 'img2.jpg', 'img3.jpg', /* Add paths to your images here */
];

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
    const images = document.querySelectorAll('.photo-collage img');
    images.forEach((img, i) => {
        setTimeout(() => {
            collageContainer.removeChild(img);
            const newImg = document.createElement('img');
            newImg.src = collageImages[Math.floor(Math.random() * collageImages.length)];
            newImg.classList.add(Math.random() > 0.5 ? 'large' : 'medium');
            collageContainer.appendChild(newImg);
        }, Math.random() * 7000); // Random delay within 7 seconds
    });
}

setInterval(shuffleCollage, 7000); // Shuffle every 7 seconds
