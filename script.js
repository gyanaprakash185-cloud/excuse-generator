const excuses = [
    "My WiFi needed emotional healing.",
    "My laptop went into existential crisis.",
    "I was attending an urgent meeting with my pillow.",
    "Time moved faster than my motivation.",
    "My brain is still loading today's version.",
    "Reality had too many bugs today.",
    "Coffee machine was on strike."
];

let currentExcuse = "";

function generateExcuse() {
    currentExcuse = excuses[Math.floor(Math.random() * excuses.length)];
    document.getElementById("excuse").innerText = currentExcuse;
}

function copyExcuse() {
    if (!currentExcuse) return;

    navigator.clipboard.writeText(currentExcuse);
    alert("Excuse copied!");
}

function shareExcuse() {
    if (!currentExcuse) return;

    if (navigator.share) {
        navigator.share({
            title: "My Excuse",
            text: currentExcuse
        });
    } else {
        alert("Sharing not supported on this device");
    }
}