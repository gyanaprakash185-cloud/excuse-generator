const excuses = [
    "My WiFi went on an emotional break.",
    "My laptop refused to cooperate today.",
    "Time moved faster than I did.",
    "I was attending an urgent meeting with my pillow.",
    "My keyboard stopped believing in me.",
    "Gravity felt stronger this morning.",
    "My brain is still booting..."
];

function generateExcuse(){
    const random = excuses[Math.floor(Math.random() * excuses.length)];
    
    const el = document.getElementById("excuse");
    el.style.transform = "scale(0.95)";
    el.style.opacity = "0.5";

    setTimeout(() => {
        el.innerText = random;
        el.style.transform = "scale(1)";
        el.style.opacity = "1";
    }, 200);
}