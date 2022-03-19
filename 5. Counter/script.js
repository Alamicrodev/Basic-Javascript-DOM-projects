// The counter display
var counter = document.querySelector("#counter");

// Add button
var addBtn = document.querySelector("#addbtn");

// Subtract Button
var subtractBtn = document.querySelector("#subtractbtn");

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
	counter.innerHTML = countnum;

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

	counter.innerHTML = countnum;

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

addBtn.addEventListener("click", addBtnClick);

subtractBtn.addEventListener("click", subtractBtnClick);
