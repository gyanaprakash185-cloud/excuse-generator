const excuses = {
    work: [
        "My internet connection decided to take a mental health day.",
        "My laptop updated itself at the worst possible time.",
        "I was in an urgent meeting with my coffee cup.",
        "Slack notifications caused emotional damage."
    ],
    study: [
        "My brain refused to load today's syllabus.",
        "Books opened, motivation closed.",
        "I was academically buffering.",
        "My notes disappeared into the void."
    ],
    life: [
        "Time moved faster than my intentions.",
        "Reality had too many tabs open today.",
        "I was busy overthinking everything.",
        "My energy levels voted to stay in bed."
    ]
};

function generateExcuse() {
    const categories = Object.keys(excuses);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    const list = excuses[randomCategory];
    const excuse = list[Math.floor(Math.random() * list.length)];

    const el = document.getElementById("excuse");

    el.style.opacity = "0";

    setTimeout(() => {
        el.innerHTML = `
            <strong>Category:</strong> ${randomCategory.toUpperCase()}<br><br>
            ${excuse}
        `;
        el.style.opacity = "1";
    }, 200);
}