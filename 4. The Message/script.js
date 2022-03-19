// Button
var button = document.querySelector("#button");

// Input Box
var messageInput = document.querySelector("#messageinput");

// Message Display
var messageDisplay = document.querySelector("#messagedisplay");

console.log(messageDisplay);

// Button click event handler
var thisfunction = () => {
	// checking if the input is empty or filled with spaces
	if (messageInput.value.trim() == "") {
		alert("Please Add Some Message!!!");
	} else {
		messageDisplay.innerHTML = messageInput.value;

		messageInput.value = "";
	}
};

button.addEventListener("click", thisfunction);
