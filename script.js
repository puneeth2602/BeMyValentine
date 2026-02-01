const messages = [
    "Are you sure, Baby Bianca?",
    "Really sure, mwwanieeeeeee??",
    "Are you positive, did the last night made you go crazy?😋",
    "Pookie pleaseeeeeeeeee...",
    "Just think about it! I will be a good baby.",
    "If you say no, I will be really sad...🥺",
    "I will be very sad.. its a crime to say no to me..😭",
    "I will be very very very sad meine schatz..😋",
    "Ok fine, I will stop asking meanieeeeeeee..",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}