// console.log("JS file is connected to HTML! Woo!")
var gameCards = ["queen", "queen", "king", "king"];
var gameBoard = "gb";
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
var gameBoard = document.getElementById("game-board");
for(var x = 0; x < gameCards.length; x++){
    var card = document.createElement("div");
    card.classList.add("card");
    gameBoard.appendChild(card);
}