

var cards = ["queen" , "queen" , "king" , "king"];

var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log("User flipped Queen");

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User flipped king");

if (cardsInPlay === 2) {
	console.log("Two Cards in Play");
} else if (cardsInPlay[0] === cardsInPlay[2]) {
	alert("You found a match");
} else if (cardsInPlay[0] !== cardsInPlay[2]) {
	alert("Sorry try again");
};






