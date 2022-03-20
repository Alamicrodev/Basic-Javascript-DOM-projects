// Gets and pushes current time on the display
function gettime() {
	// get current date/time information
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();

	// Checking whether its AM or PM
	var format = getTimeFormat(hours);

	// Converting 24 hours to 12 hours.
	hours = convertHours(hours);

	// Adding 0 in the begining incase the time is a single digit eg 6 to 06;
	hours = addZero(hours);
	minutes = addZero(minutes);
	seconds = addZero(seconds);

	// Pushing the time to the elelment
	document.getElementById(
		"time"
	).innerHTML = `${hours} : ${minutes} : ${seconds} ${format}`;
}

// Returns time format Am/PM by taking in hours
function getTimeFormat(time) {
	var format = "AM";
	if (time >= 12) {
		format = "PM";
	}
	return format;
}

// Converts 24 hours to 12 hours
function convertHours(time) {
	if (time > 12) {
		time = time - 12;
	}

	if (time == 0) {
		time = 12;
	}
	return time;
}

// Adds zero incase the time is a single digit eg 6 to 06
function addZero(time) {
	if (time < 10) {
		time = "0" + time;
	}
	return time;
}

// Running the function once in the start.
gettime();

// Running the function in a loop after an interval of each second.
setInterval(gettime, 1000);
