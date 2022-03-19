// Button
var button = document.querySelector("#button");

// Background Element
var background = document.querySelector("body");

// Hexa Code Displaying Element
var hexaCode = document.querySelector("#hexcode");

// Hexadecimal digits/alphabets array
var hexDigits = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
];

// this function returns a random Hex character from the array above.
function hexAlpha() {
	var hexAlpha = hexDigits[Math.floor(Math.random() * hexDigits.length)];

	return hexAlpha;
}

// Button onclick event handler
button.onclick = () => {
	// Creating a hex color code
	color =
		"#" +
		hexAlpha() +
		hexAlpha() +
		hexAlpha() +
		hexAlpha() +
		hexAlpha() +
		hexAlpha();

	// Changing background
	background.style.background = color;

	// Changing the code shown on page.
	hexaCode.innerHTML = color;
};
