document.addEventListener('DOMContentLoaded', () => {
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
        "I love your mind, your smile, and the way you make me feel.",
        "In a sea of people, my eyes will always search for you.",
        "You are the love that came without warning; you had my heart before I could say no.",
        "No matter where I go, I always have you with me.",
        "Every day with you is a wonderful addition to my life's journey.",
        "I could start a fire with what I feel for you.",
        "Being in your arms is my favorite place.",
        "I never want to stop making memories with you.",
        "You are my sun, my moon, and all my stars.",
        "You are the best part of my day.",
        "You complete me.",
        "Forever is a long time, but I wouldn’t mind spending it by your side.",
        "If I know what love is, it's because of you.",
        "My love for you is a journey, starting at forever and ending at never."
    ];

    let currentQuoteIndex = 0;

    function updateQuote() {
        const quoteElement = document.getElementById('quote');
        quoteElement.textContent = quotes[currentQuoteIndex];
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }

    setInterval(updateQuote, 6000);

    const photos = document.querySelectorAll('.photo-collage img');
    const photoCount = photos.length;

    function shufflePhotos() {
        const randomIndex = Math.floor(Math.random() * photoCount);
        photos.forEach((photo, index) => {
            photo.style.opacity = (index === randomIndex) ? '1' : '0.9';
        });
    }

    setInterval(shufflePhotos, 6000);
});
