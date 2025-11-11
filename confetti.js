document.addEventListener("DOMContentLoaded", function () {
    const emojis = ["🎊", "🎉", "🎊", "🎉"];

    function createEmoji() {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        document.body.appendChild(emoji);

        // random position and size
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.fontSize = Math.random() * 20 + 20 + "px";
        emoji.style.animationDuration = Math.random() * 3 + 3 + "s"; // 3–6s

        // remove after animation ends
        setTimeout(() => emoji.remove(), 6000);
    }

    // create new emojis continuously
    setInterval(createEmoji, 150);
});
