document.addEventListener("DOMContentLoaded", () => {
    const typewriter = document.getElementById("typewriter");
    const text = "Wishing You A Merry Christmas 🎁 🎄 ";
    let currentIndex = 0;
  
    function typeLetter() {
      if (currentIndex === 0) {
        typewriter.innerHTML = ""; // Clear the typewriter for restart
      }
  
      if (currentIndex < text.length) {
        const char = text[currentIndex]; // Get the current character
        const charSpan = document.createElement("span");
        charSpan.textContent = char;
  
        // Add animation class dynamically
        if (char !== " ") {
          if (currentIndex % 2 === 0) {
            charSpan.classList.add("fade-in");
          } else {
            charSpan.classList.add("slide-in");
          }
        }
  
        typewriter.appendChild(charSpan);
        currentIndex++;
  
        // Delay before adding the next letter
        setTimeout(typeLetter, 200); // Adjust delay between letters
      } else {
        // Restart after a short delay
        currentIndex = 0;
        setTimeout(typeLetter, 2000); // Pause before restarting
      }
    }
  
    // Start typing
    typeLetter();
  });
  