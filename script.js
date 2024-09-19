/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body & Background */
body, html {
    height: 100%;
    font-family: 'Georgia', serif;
    overflow-x: hidden;
    overflow-y: auto;
}

/* Header */
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.9); /* Thicker black layer */
    color: white;
    text-align: center;
    font-size: 2em;
    padding: 20px;
    z-index: 1000;
    transition: top 0.3s;
}

/* Blinking text */
.blinking-text {
    position: absolute;
    top: 10px;
    right: 10px;
    color: darkred;
    font-size: 1.2em;
    animation: blink 1s step-start infinite, glow 1s ease-in-out infinite;
}

@keyframes blink {
    50% { opacity: 0; }
}

@keyframes glow {
    0%, 100% { color: darkred; }
    50% { color: red; }
}

/* Top-left text */
.top-left-text {
    position: fixed;
    top: 10px;
    left: 10px;
    font-size: 2vw;
    font-family: 'Vogue', serif; /* Classic Vogue Font */
    color: white;
    z-index: 1000;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

/* Grid Layout for Photo Collage */
.photo-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr); /* 8 columns */
    grid-template-rows: repeat(5, 1fr); /* 5 rows */
    gap: 5px;
    width: 100%;
    height: 100vh;
    padding-top: 120px; /* Adjust for thicker header */
    overflow: hidden;
}

.photo-grid img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s ease-in-out, opacity 0.7s ease-in-out;
    opacity: 0.8;
}

/* Quotes Section */
.quote-container {
    position: relative;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 0, 0, 0.3));
    backdrop-filter: blur(5px);
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    opacity: 0.9;
}

.quote {
    font-size: 2vw;
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
    font-style: italic;
    color: black;
    opacity: 0.8;
    padding: 20px;
}

.author {
    text-align: right;
    font-size: 1.5vw;
    font-style: italic;
    color: #333;
    padding-right: 20px;
}

/* Footer */
.footer {
    background: palecyan;
    font-size: 1.5vw;
    color: #222;
    padding: 20px;
    text-align: center;
    margin-top: 30px;
}

.bottom-left, .bottom-right {
    position: absolute;
    font-size: 1.2em;
}

.bottom-left {
    left: 20px;
    bottom: 10px;
}

.bottom-right {
    right: 20px;
    bottom: 10px;
}

.centered-footer {
    margin-top: 20px;
}

.yes-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 1.2em;
    color: white;
    background-color: green;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 10px;
}

.yes-button:hover {
    background-color: darkgreen;
}

/* Responsive Design */
@media (max-width: 768px) {
    .header {
        font-size: 4vw;
    }

    .quote {
        font-size: 4vw;
    }

    .author {
        font-size: 3vw;
    }

    .footer {
        font-size: 2vw;
    }

    .yes-button {
        font-size: 3vw;
    }
}
