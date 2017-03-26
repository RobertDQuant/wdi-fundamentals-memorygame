// console.log("JS file is connected to HTML! Woo!")
var cards =["queen","queen","king","king"];

var cardsInPlay = [];

var board = document.getElementById("game-board"); 

var createGameBoard = function (x) {
  for (var i = 0; i < x; i++) {
   var cardElement = document.createElement("div");
   cardElement.className = "card";
   cardElement.setAttribute('data-card', cards[i]);
   cardElement.addEventListener('click', isTwoCards)
   board.appendChild(cardElement);

  }

}

var isTwoCards = function () {
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute("data-card") === "king") {
    this.innerHTML = "<img src='images/king.png' alt='king'>";
  } else {
    this.innerHTML = "<img src='images/queen.png' alt='queen'>";
  }
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }

}

var isMatch = function (cards) {
  if (cards[0] === cards[1]) {
    alert("It's a match!");
  } else {
    alert("Sorry, try again");
  }

}

createGameBoard(4);
/*if (cardOne === cardTwo) {
  window.alert("You found a match!");
} else if (cardOne === cardThree) {
  window.alert("Sorry, try again.")
} else if (cardThree === cardFour) {
   window.alert("You found a match!")
} else if (cardThree === cardOne) {
   window.alert("Sorry, Try again.")
} else {
  // Code to be executed if condition1, condition2, and condition3 are false
}
*/