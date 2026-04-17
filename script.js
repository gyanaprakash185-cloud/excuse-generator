const excuses = [
    "My WiFi had emotional issues.",
    "Laptop joined a silent protest.",
    "Traffic was spiritually heavy.",
    "My alarm clock resigned.",
    "I was updating my life software.",
    "My keyboard lost motivation.",
    "Coffee machine betrayed me.",
    "Gravity was stronger today."
];

function generateExcuse(){
    const random = excuses[Math.floor(Math.random() * excuses.length)];
    document.getElementById("excuse").innerText = random;
}