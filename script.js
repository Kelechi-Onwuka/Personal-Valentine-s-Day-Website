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

    // Track No button clicks
    let noClickCount = 0;

    // Funny "No" responses
    const funnyMessages = [
        "How were you even able to click on it?? 💔",
        "NO????!",
        "Just fell to my knees"
    ];

    // Function to show funny messages when clicking "No"
    noButton.addEventListener("click", () => {
        if (noClickCount < funnyMessages.length) {
            document.body.innerHTML = `
                <div style="text-align: center; padding: 50px;">
                    <h1>${funnyMessages[noClickCount]}</h1>
                    <img src="https://media.tenor.com/meANmw3hopUAAAAM/long-tears.gif" alt="Sad GIF" width="300">
                    <button id="go-back-btn" style="padding: 15px 30px; font-size: 1.5em; background-color: red; color: white; border: none; border-radius: 10px; cursor: pointer;">Go Back ❤️</button>
                </div>
            `;
            noClickCount++;

            // Add event listener to Go Back button
            document.getElementById("go-back-btn").addEventListener("click", () => {
                location.reload();
            });
        }
    });

    // Function to move the "No" button randomly (Make it "run away")
    noButton.addEventListener("mouseover", () => {
        let randomX = Math.random() * (window.innerWidth - 100); // Keeps it within screen
        let randomY = Math.random() * (window.innerHeight - 50);

        noButton.style.position = "absolute"; // Allows movement
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
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
