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
    overflow: hidden; /* Prevent scrollbars on body */
}

/* Top-left text */
.top-left-text {
    position: fixed;
    top: 10px;
    left: 10px;
    font-size: 2vw; /* Responsive text size */
    font-family: 'Calibri', sans-serif; /* Calibri font */
    color: white;
    z-index: 1000; /* Ensure it stays on top of other elements */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Add shadow for visibility */
}

/* Header */
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.6); /* Semi-transparent background */
    padding: 10px;
    text-align: center;
    z-index: 1000; /* Ensure it stays on top of other elements */
}

.header h1 {
    font-size: 5vw;
    font-family: 'Times New Roman', serif;
    color: black;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);
    margin: 0;
}

/* Photo Collage Background */
.photo-collage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Responsive grid */
    gap: 5px; /* Space between photos */
    overflow: auto; /* Allow scrolling */
    z-index: -1; /* Ensures collage stays in the background */
}

.photo-collage img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures photos fit nicely */
    opacity: 0.8;
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.photo-collage img:hover {
    opacity: 1;
    transform: scale(1.1); /* Slight zoom on hover */
}

/* Gradient Layer */
.quote-container {
    background: linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 0, 0, 0.4), rgba(255, 255, 0, 0.4));
    backdrop-filter: blur(10px);
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.quote {
    font-size: 2vw;
    font-family: 'Times New Roman', serif;
    font-weight: bold; /* Bold text */
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
footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    font-size: 0.8vw;
    color: #222;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px;
}

.bottom-left, .bottom-right {
    margin: 0;
}

.centered-footer {
    text-align: center;
    margin-top: 10px;
}

.yes-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 1vw;
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
    .header h1 {
        font-size: 12vw;
    }

    .quote {
        font-size: 4vw;
    }

    .author {
        font-size: 3vw;
    }

    footer {
        font-size: 2vw;
    }

    .yes-button {
        font-size: 3vw;
    }
}
