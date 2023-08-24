const scratchCards = document.querySelectorAll(".scratchcard");
const totalBalance = document.querySelector("#balance");
const price = 10;

scratchCards.forEach((card) => {
  card.addEventListener("click", ()=> {
   
    let currentBalance = parseInt(totalBalance.innerText, 10);
    currentBalance -= price;
    totalBalance.innerText = currentBalance;
  });
});