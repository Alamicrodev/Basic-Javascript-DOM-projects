// Getting all buttons
// numbers
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var zero = document.querySelector("#zero");

// operators
var addBtn = document.querySelector("#addbtn");
var subtractBtn = document.querySelector("#subtractbtn");
var multiplyBtn = document.querySelector("#multiplybtn");
var divideBtn = document.querySelector("#dividebtn");

// functional
var clearBtn = document.querySelector("#clearbtn");
var equalBtn = document.querySelector("#equalbtn");

// inputscreen
var inputScreen = document.querySelector("#inputscr");

// This function displays whatever its given on screen
function addToScr(stuff) {
	// Taking the value already in input
	var innitValue = inputScreen.value;

	// Giving new value to the input
	inputScreen.value = innitValue + stuff;
}

// Event handler for all numbers
one.onclick = () => {
	addToScr(1);
};
two.onclick = () => {
	addToScr(2);
};
three.onclick = () => {
	addToScr(3);
};
four.onclick = () => {
	addToScr(4);
};
five.onclick = () => {
	addToScr(5);
};
six.onclick = () => {
	addToScr(6);
};
seven.onclick = () => {
	addToScr(7);
};
eight.onclick = () => {
	addToScr(8);
};
nine.onclick = () => {
	addToScr(9);
};
zero.onclick = () => {
	addToScr(0);
};

// Event Handler for all operators
addBtn.onclick = () => {
	addToScr("+");
};
subtractBtn.onclick = () => {
	addToScr("-");
};
multiplyBtn.onclick = () => {
	addToScr("*");
};
divideBtn.onclick = () => {
	addToScr("/");
};

// Event Handler for clear button
clearBtn.onclick = () => {
	inputScreen.value = "";
};

// Event Handler for equal button
equalBtn.onclick = () => {
	var equation = inputScreen.value;

	try {
		inputScreen.value = eval(equation);
	} catch {
		inputScreen.value = "Error! Wrong Equation";
	}
};
