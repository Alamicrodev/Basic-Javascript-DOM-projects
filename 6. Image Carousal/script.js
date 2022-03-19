// Note we will simply grab images from the internet intime
// Image links Array
var imagesList = [
	"./Assets/balloons.jpg",
	"./Assets/citynight.jpg",
	"./Assets/forest.jpg",
	"./Assets/mountains.jpg",
	"./Assets/nightbridge.jpg",
	"./Assets/sky.jpg",
	"./Assets/skyscrapers.jpg",
];

// Image Element
var imageElement = document.querySelector("#image");

// Prev Button
var prevButton = document.querySelector("#carousal__prev");

// Next Button
var nextButton = document.querySelector("#carousal__next");

// Counter
var counter = 0;

// Previous button click event handler
prevButton.onclick = () => {
	// Resetting counter if we are on the first image.
	if (counter == 0) {
		counter = imagesList.length - 1;
	} else {
		counter--;
	}

	// Changing the src property of image element
	imageElement.src = imagesList[counter];

	// Animating the image element
	imageElement.animate(
		[
			{ transform: "scale(0,0)", opacity: 0 },
			{ transform: "scale(1,1)", opacity: 1 },
		],
		{
			duration: 1000,
			fill: "forwards",
		}
	);
};

// Next Button Click Event Handler
nextButton.onclick = () => {
	// Resetting counter if we are on the last image.
	if (counter == imagesList.length - 1) {
		counter = 0;
	} else {
		counter++;
	}

	// Changing image element's src property
	imageElement.src = imagesList[counter];

	// Animating the image element
	imageElement.animate(
		[
			{ transform: "scale(0,0)", opacity: 0 },
			{ transform: "scale(1,1)", opacity: 1 },
		],
		{
			duration: 1000,
			fill: "forwards",
		}
	);
};
