function spinSlotMachine() {
    const symbols = ["🍒", "🍊", "🍑", "🔔", "🍉", "⭐"];
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}

function calculateWinnings(spin1, spin2, spin3, bet) {
    if (spin1 === spin2 && spin2 === spin3) {
        return bet * 3;
    } else if (spin1 === spin2 || spin2 === spin3 || spin1 === spin3) {
        return bet * 2;
    } else {
        return 0; 
    }
}

let round = 0;
let totalMoneyEntered = 0;
let totalWinningAmount = 0;
let selectedBet = null;

const spinBtn = document.getElementById("spinBtn");
const resetBtn = document.getElementById("resetBtn");
const betButtons = document.querySelectorAll(".bet-btn");

const roundDisplay = document.getElementById("roundDisplay");
const winningsDisplay = document.getElementById("winningsDisplay");
const totalMoney = document.getElementById("totalMoney");
const totalWinnings = document.getElementById("totalWinnings");

const reel1 = document.getElementById("reel1");
const reel2 = document.getElementById("reel2");
const reel3 = document.getElementById("reel3");

betButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        betButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedBet = parseInt(btn.dataset.value);
    });
});

spinBtn.addEventListener("click", () => {
    if (!selectedBet) {
        alert("Please select a bet before spinning!");
        return;
    }

    totalMoneyEntered += selectedBet;
    round++;

    let spin1 = spinSlotMachine();
    let spin2 = spinSlotMachine();
    let spin3 = spinSlotMachine();

    reel1.innerText = spin1;
    reel2.innerText = spin2;
    reel3.innerText = spin3;

    let winnings = calculateWinnings(spin1, spin2, spin3, selectedBet);
    totalWinningAmount += winnings;

    roundDisplay.innerText = round;
    winningsDisplay.innerText = winnings;
    totalMoney.innerText = totalMoneyEntered;
    totalWinnings.innerText = totalWinningAmount;
});

resetBtn.addEventListener("click", () => {
    round = 0;
    totalMoneyEntered = 0;
    totalWinningAmount = 0;
    selectedBet = null;

    roundDisplay.innerText = round;
    winningsDisplay.innerText = "0";
    totalMoney.innerText = "0";
    totalWinnings.innerText = "0";

    reel1.innerText = "?";
    reel2.innerText = "?";
    reel3.innerText = "?";

    betButtons.forEach(b => b.classList.remove("active"));
});