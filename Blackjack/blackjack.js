// TODO Check if player is underage.
    let firstCard; 
    let secondCard;
    let sum;

function playCards() {
    let hasBlackjack = false;
    let isAlive = true;
    let msg = document.getElementById("msg");
    
    drawCards();

    let cardsElement = document.getElementById("cards");
    let sumElement = document.getElementById("sum");
    cardsElement.innerText = `Cards: ${firstCard} and ${secondCard}`;
    sumElement.innerText = ` Sum: ${sum}`;

    if (sum < 21) {
        msg.innerText = "Do you want to draw another card?";
    } else if (sum === 21) {
        hasBlackjack = true;
        msg.innerText = "💰 BLACKJACK!!! 💰";
    } else {
        msg.innerText = "You lose 😕";
        isAlive = false;
    }
}

function drawCards() {
    firstCard = Math.floor(Math.random() * (11 - 2 + 1) + 2);
    secondCard = Math.floor(Math.random() * (11 - 2 + 1) + 2);
    sum = firstCard + secondCard;
}
