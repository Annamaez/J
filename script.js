let messageIndex = 0;
const messages = [
    "Please say yes! 🥺",
    "I really want you to be my wife! 💖",
    "Come on, please say yes! 🥰",
    "I can't imagine life without you! Please! 😭"
];

function handleNoClick() {
    const noButton = document.querySelector("#no-button");
    const yesButton = document.querySelector("#yes-button");

    // Change text of No button
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Wiggle effect on No button
    noButton.classList.add("wiggle");
    setTimeout(() => {
        noButton.classList.remove("wiggle");
    }, 300);

    // Increase the Yes button size each time
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;

    // Add the grow effect
    yesButton.classList.add("grow");
    setTimeout(() => {
        yesButton.classList.remove("grow");
    }, 300);
}

function handleYesClick() {
    alert("Yay! 💍 She said YES! 🎉❤️");
}
