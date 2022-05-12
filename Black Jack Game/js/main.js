let cardsArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, "A"];

let userScore = 0;
let masterScore = 0; //computerScore
// sorry bad variable name

// getting elements
let playBtn = document.getElementById("playbtn");
let mainSection = document.getElementById("main");
let introSection = document.getElementById("intro");
let userScoreCard = document.getElementById("userscr");
let cardsView = document.getElementById("usercards");

// returns a random element from the list of cards
function RandomCardPicker() {
	const randElement = cardsArray[Math.floor(Math.random() * cardsArray.length)];

	return randElement;
}

//let the player pick the value for 'A' card
function userCardPicker() {
	let choice = RandomCardPicker();
	if (choice === "A") {
		while (choice !== 1 && choice !== 11) {
			choice = prompt("You got A card, type in whether you want 1 or 11?", "1");
			choice = parseInt(choice);
		}
		return choice;
	} else {
		return choice;
	}
}

// generate the value of 'A' card automatically for the computer
function masterCardPicker() {
	let choice = RandomCardPicker();
	if (choice === "A") {
		if (masterScore <= 10) {
			return 11;
		} else {
			return 1;
		}
	} else {
		return choice;
	}
}

// reset once a play is over
function reset() {
	mainSection.style.display = "none";
	introSection.style.display = "block";

	userScore = 0;
	masterScore = 0;
	cardsView.innerText = "Your Cards: ";
}

// check if the user is winning or loosing
function userScoreCheck() {
	if (userScore > 21) {
		alert("You lost, your total is more than 21!");
		reset();
	} else if (userScore === 21) {
		alert("Congrats, you got the black jack!!");
		reset();
	} else {
		return;
	}
}

// play button is clicked
playBtn.onclick = () => {
	let userName = document.getElementById("nameinput").value;
	let betAmmount = document.getElementById("betinput").value;

	// showing username and their bet ammount
	document.getElementById("userprofile").innerText = `${
		userName || "Anonymous"
	}: ${betAmmount || 0}\$`;

	mainSection.style.display = "block";
	introSection.style.display = "none";

	// give initial cards/score to both the computer and the player. Including the initial check for victory.

	let card1 = userCardPicker();
	userScore += card1;
	cardsView.innerText += " " + card1;
	let card2 = userCardPicker();
	userScore += card2;
	cardsView.innerText += "-" + card2;
	masterScore = masterCardPicker() + masterCardPicker();
	userScoreCard.innerText = userScore;
	userScoreCheck();
};

// On hit click
function hitClicked() {
	let card = userCardPicker();
	userScore += card;
	cardsView.innerText += "-" + card;
	userScoreCheck();
	userScoreCard.innerText = userScore;
}

// on stand click
function standClicked() {
	while (masterScore < 17) {
		let card = masterCardPicker();
		masterScore += card;
		alert(`Computer got ${card}, total is now ${masterScore}`);
	}

	if (masterScore >= userScore && masterScore <= 21) {
		if (masterScore === userScore) {
			alert(
				`OMG!! Game tied!!! Both Computer and you have ${masterScore} points`
			);
			reset();
		} else {
			alert(`You lost :( Computer's points are ${masterScore} `);
			reset();
		}
	} else {
		alert("Wohoooo!! you have Won!");
		reset();
	}
}
