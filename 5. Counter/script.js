// The counter display
var counter = document.querySelector("#counter");

// Add button
var addBtn = document.querySelector("#addbtn");

// Subtract Button
var subtractBtn = document.querySelector("#subtractbtn");

// Reset Button
let resetButton = document.querySelector("#resetbtn");

// The counting number
let countnum = 0;

// Add button event handler
var addBtnClick = () => {
	// Increment the number
	countnum++;

	// Changing elelemnt style based on situation
	if (countnum < 0) {
		counter.style.color = "red";
	} else if (countnum == 0) {
		counter.style.color = "white";
	} else {
		counter.style.color = "green";
	}

	// Change the value on page
	counter.innerText = countnum;

	// Create Animation
	counter.animate(
		[
			{ transform: "scale(0, 0)", opacity: 0.2 },
			{ transform: "scale(1, 1)", opacity: 1 },
		],
		{
			duration: 500,
			fill: "forwards",
		}
	);
};

// Subtract button event handler
// Has just opposite code to the add btn click while style and animations are same.
var subtractBtnClick = () => {
	countnum--;

	if (countnum < 0) {
		counter.style.color = "red";
	} else if (countnum == 0) {
		counter.style.color = "white";
	} else {
		counter.style.color = "green";
	}

	counter.innerText = countnum;

	counter.animate(
		[
			{ transform: "scale(0, 0)", opacity: 0.2 },
			{ transform: "scale(1, 1)", opacity: 1 },
		],
		{
			duration: 500,
			fill: "forwards",
		}
	);
};

// reset button event handler
function resetBtnClick() {
	countnum = 0;
	counter.style.color = "white";
	counter.innerText = countnum;

	counter.animate(
		[
			{ transform: "scale(0, 0)", opacity: 0.2 },
			{ transform: "scale(1, 1)", opacity: 1 },
		],
		{
			duration: 500,
			fill: "forwards",
		}
	);
}

// adding event handlers
addBtn.addEventListener("click", addBtnClick);

subtractBtn.addEventListener("click", subtractBtnClick);

resetButton.addEventListener("click", resetBtnClick);
