
document.addEventListener('DOMContentLoaded', () => {
    // Navbar toggle (keep existing code)
    const mobileMenu = document.getElementById('mobileMenu');
    const navbarLinks = document.getElementById('navbarLinks');

    if (mobileMenu && navbarLinks) { // Check if elements exist before adding listener
        mobileMenu.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
        });
    }

    // Typing effect for Welcome Section
    const typedTextElement = document.getElementById('typed-text');
    const textToType = ["Scholars!", "Students!", "Inquisitive Readers!"]; // Words to type
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150; // Speed of typing (milliseconds per character)
    let deletingSpeed = 75; // Speed of deleting
    let delayBetweenWords = 1500; // Delay before typing next word

    function type() {
        const currentWord = textToType[textIndex];
        if (isDeleting) {
            // Deleting phase
            typedTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing phase
            typedTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let currentTypingSpeed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentWord.length) {
            // Word is fully typed, start deleting after a delay
            currentTypingSpeed = delayBetweenWords;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Word is fully deleted, move to next word
            isDeleting = false;
            textIndex = (textIndex + 1) % textToType.length; // Loop through words
            currentTypingSpeed = typingSpeed;
        }

        setTimeout(type, currentTypingSpeed);
    }

    // Start the typing effect when the page loads
    if (typedTextElement) { // Ensure the element exists
        type();
    }
});