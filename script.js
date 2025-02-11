document.addEventListener("DOMContentLoaded", () => {
    // Selecting buttons
    const noButton = document.getElementById("no-btn");
    const yesButton = document.getElementById("yes-btn");
    const nextButton = document.getElementById("next-btn");
    const revealButton = document.getElementById("reveal-btn");

    // Selecting sections
    const mainPage = document.querySelector(".center-container");
    const yayPage = document.getElementById("yay-page");
    const loveLetter = document.getElementById("love-letter");
    const letterContainer = document.getElementById("love-letter-content");
    const letterText = document.getElementById("letter-content");

    // Hide Love Letter initially
    loveLetter.style.display = "none";

    // When "Yes" is clicked
    yesButton.addEventListener("click", () => {
        mainPage.style.display = "none"; // Hide the main page
        yayPage.style.display = "block"; // Show Yay page
    });

    // When "Next" is clicked
    nextButton.addEventListener("click", () => {
        yayPage.style.display = "none"; // Hide Yay page
        loveLetter.style.display = "block"; // Show Love Letter
    });

    // When "Open Love Letter" is clicked
    revealButton.addEventListener("click", () => {
        if (letterText) {
            // Expand the box when the letter is revealed
            letterContainer.style.padding = "30px";
            letterContainer.style.minHeight = "400px"; // Expand height after clicking

            // Update letter text
            letterText.innerHTML = `
                My Dearest,
                <br><br>
                I have never considered myself a romantic, yet here I am, trying in the only way I know—through computers. 
                Coding may be my language, but you have taught me a language far more beautiful, one written in moments, 
                laughter, and quiet understanding.
                <br><br>
                As Sappho once wrote, <br>
                <em>"Beyond all hope, I prayed those timeless days we spent might be made twice as long."</em>
                <br><br>
                Every moment with you feels like a treasure, one I wish I could stretch into eternity. 
                I know I don’t say it often, but I love you more than words can hold, and I cannot wait to spend 
                this Valentine’s Day—with you.
                <br><br>
                Thank you for being my Valentine. ❤️
                <br><br>
                With all my heart, 💖<br><strong>Your Valentine</strong>
            `;

            // Hide the reveal button after revealing the message
            revealButton.style.display = "none";
        } else {
            console.error("Error: Letter content not found!");
        }
    });
});
