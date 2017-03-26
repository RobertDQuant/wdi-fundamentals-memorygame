// console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
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
var card = document.getElementById(gameBoard)
var card = function (num) {
    for (var i = 1; i <= num; i += 1) {
        if (cardOne === cardTwo) {
            window.alert("You found a match!");
        }
        else if (cardOne === cardThree) {
            window.alert("Sorry, try again.")
        }
        else if (cardThree === cardFour) {
            window.alert("You found a match!")
        }
        else if (cardThree === cardOne) {
            window.alert("Sorry, Try again.")
        }
        else {
            // Code to be executed if condition1, condition2, and condition3 are false
        }
        console.log(result);
    }
};
document.createCards(gameBoard)