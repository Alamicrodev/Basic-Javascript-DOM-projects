// Button
var toggleButton = document.querySelector("#togglebutton");

// Background Element
var backgroundDiv = document.querySelector("#backgrounddiv");

// Color Codes Array
var colorArray = [
	"#cf6d5c",
	"#74890b",
	"#bd94ae",
	"#684854",
	"#7c68b0",
	"#18a9e6",
	"#2ddc0b",
	"#663d35",
];

// Toggle button onclick event handler
toggleButton.onclick = () => {
	// Picking a random color from array
	color = colorArray[Math.floor(Math.random() * colorArray.length)];

	// Changing background
	backgroundDiv.style.background = color;
};
