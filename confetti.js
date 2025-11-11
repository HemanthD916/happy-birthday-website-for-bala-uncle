document.addEventListener("DOMContentLoaded", function () {
    const emojis = ["🎊", "🎉", "🎊", "🎉"];

    function createEmoji() {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        document.body.appendChild(emoji);

        
        const size = Math.random() * 20 + 20; 
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.top = "-10px";
        emoji.style.fontSize = size + "px";
        emoji.style.animationDuration = Math.random() * 2 + 3 + "s"; 

        
        setTimeout(() => {
            emoji.remove();
        }, 5000);
    }

    function generateMoreEmojis() {
        for (let i = 0; i < 1000; i++) { 
            createEmoji();
        }
    }

   
    setInterval(createEmoji, 20);
});
