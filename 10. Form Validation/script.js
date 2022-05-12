// Getting all the inputs
var username = document.querySelector("#username");

var password = document.querySelector("#password");

var repeatPass = document.querySelector("#repeatpass");

var submitBtn = document.querySelector("#submit");

// Creating a warning msgbox
var msgBox = document.createElement("div");
msgBox.style.color = "red";
msgBox.style.padding = "10px 10px";
msgBox.style.background = "white";
msgBox.style.borderLeft = "solid #FFCCCB 10px";
msgBox.style.width = "90%";

// For validation of password
function passwordValidator(password) {
	// Checking password length
	if (password.length < 8 && password != "") {
		// Retruning false with the message to be displayed if the password is not validated.
		return [false, "Sorry, your password must be more than 8 characters!"];
	}

	console.log("this got called");
	// Making sure the password does not contain the username
	if (password.includes(username.value) && username.value != "") {
		return [false, "Sorry, your password cannot contain your username!"];
	}

	// Creating Regex patterns for matching
	var digitsre = new RegExp("\\d+");
	var alphare = new RegExp("[a-z]+");
	var capitalAlphare = new RegExp("[A-Z]+");
	var specialCharre = new RegExp("[#?!@$%^&*-]+");

	// Checking the conditions like digits, lowercase, uppercase, and special charaters
	if (
		(!digitsre.test(password) ||
			!alphare.test(password) ||
			!capitalAlphare.test(password) ||
			!specialCharre.test(password)) &&
		password != ""
	) {
		return [
			false,
			"Sorry, your password must contain an uppercase alphabet, a lowercase alphabet, a number and a special character",
		];
	}

	// Retruning true if password is validated
	return [true, "congrats"];
}

// Form validator function
function validateForm() {
	// Username should not be 'cabbage'
	if (username.value == "cabbage") {
		msgBox.innerHTML =
			"Sorry, you are not allowed to use 'cabbage' as a username.";

		// Disabling Submit Button
		submitBtn.setAttribute("disabled", "true");

		// Appending the warning message.
		username.parentElement.appendChild(msgBox);
	}
	// username should not be empty
	else if (username.value == "") {
		// There should not be a warning message incase of empty username
		if (username.parentElement.contains(msgBox)) {
			username.parentElement.removeChild(msgBox);
		}

		// But submit button should be disabled
		submitBtn.setAttribute("disabled", "true");
	}
	// Incase neither are true, this means username is fine
	else {
		// remove the warning
		if (username.parentElement.contains(msgBox)) {
			username.parentElement.removeChild(msgBox);
		}

		// Checking if the password validates
		if (passwordValidator(password.value)[0]) {
			// Removing alert if it exists
			if (password.parentElement.contains(msgBox)) {
				password.parentElement.removeChild(msgBox);
			}

			if (repeatPass.value == password.value) {
				// Checking to see if the matching is not because of both fields being empty
				if (password.value != "") {
					if (password.parentElement.contains(msgBox)) {
						password.parentElement.removeChild(msgBox);
					}

					submitBtn.removeAttribute("disabled");
				}
			} else {
				// Checking the mis-match is not because of repeat pass being empty.
				if (repeatPass.value != "") {
					msgBox.innerHTML = "Password does not match!";

					password.parentElement.appendChild(msgBox);

					submitBtn.setAttribute("disabled", "true");
				}
			}
		}
		// Else displaying the passed in message and disabling the submit button
		else {
			msgBox.innerHTML = passwordValidator(password.value)[1];

			password.parentElement.appendChild(msgBox);

			submitBtn.setAttribute("disabled", "true");
		}
	}
}

// Event Handler for username input content
username.onchange = () => {
	validateForm();
};

// Password Input box value change event handler
password.onchange = () => {
	validateForm();
};

// Repeat password box value change event handler
repeatPass.onchange = () => {
	validateForm();
};
