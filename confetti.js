window.addEventListener("load", function () {
    const emojis = ["🎊", "🎉", "🎊", "🎉"];

    function createEmoji() {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        document.body.appendChild(emoji);

        // FIX: Use pixel units instead of vw for desktop browsers
        /* NEW CODE IN confetti.js (Added 3 lines) */
    emoji.style.left = Math.random() * window.innerWidth + "px";

    emoji.style.fontSize = Math.random() * 20 + 20 + "px";
    emoji.style.animationDuration = Math.random() * 3 + 3 + "s";
    
    // ADD THESE 3 LINES:
    emoji.style.animationName = 'fall'; 
    emoji.style.animationTimingFunction = 'linear';
    emoji.style.animationFillMode = 'forwards';
    
    setTimeout(() => emoji.remove(), 6000);
    }

    setInterval(createEmoji, 150);
});
