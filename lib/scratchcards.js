const scratchCards = document.querySelectorAll(".scratchcard");
const totalBalance = document.querySelector("#balance");
const price = 10;

scratchCards.forEach((scratchCard) => {
  scratchCard.addEventListener("click", ()=> {
    
    let currentBalance = parseInt(totalBalance.innerText, 10);
    let scratchCardAmount = parseInt(scratchCard.dataset.amount, 10);
    
    if(currentBalance > 0 && scratchCard.dataset.scratched !== "true") {
      scratchCard.dataset.scratched ="true"
      totalBalance.innerText = currentBalance - price + scratchCardAmount;
      scratchCard.innerText = `${scratchCardAmount}£`
    } else {
      alert("Game over, your balance is 0");
    }
  });
});