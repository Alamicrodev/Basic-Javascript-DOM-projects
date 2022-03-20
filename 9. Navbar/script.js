// Hamburger Button
var hamburger = document.querySelector("#hamburger");

// Nav Bar
var navbar = document.querySelector("nav");

// Grabbing the hamburger button rodes to apply animation on them.
var rodone = document.querySelector("#rodone");
var rodtwo = document.querySelector("#rodtwo");
var rodthree = document.querySelector("#rodthree");

// Hamburger button on click event
hamburger.onclick = () => {
	// Check if the navbar is already visible
	if (navbar.style.visibility == "visible") {
		// Hide it, if visible
		navbar.style.visibility = "hidden";

		// Add animation to collapse height
		navbar.animate([{ height: "300px" }, { height: "0px" }], {
			duration: 400,
			fill: "forwards",
		});

		// Make rod-one reappear
		rodone.animate([{ visibility: "hidden" }, { visibility: "visible" }], {
			duration: 400,
			fill: "forwards",
		});

		// Reset rod-two and rod-three
		rodtwo.animate(
			[{ tansform: "rotate(0deg)" }, { transform: "rotate(0deg)" }],
			{
				duration: 400,
				fill: "forwards",
			}
		);

		rodthree.animate(
			[
				{ tansform: "rotate(0deg)" },
				{ transform: "rotate(0deg)", transform: "translatey(0px)" },
			],
			{
				duration: 400,
				fill: "forwards",
			}
		);
	} else {
		// Animation to increase the height of navbar
		navbar.animate([{ height: 0 }, { height: "300px" }], {
			duration: 400,
			fill: "forwards",
		});

		// Make navbar visible
		navbar.style.visibility = "visible";

		// Hide rod-one
		rodone.animate([{ visibility: "visible" }, { visibility: "hidden" }], {
			duration: 400,
			fill: "forwards",
		});

		// Animate rod-two and rod-three to form an X when the navbar is visible.
		rodtwo.animate(
			[{ tansform: "rotate(0deg)" }, { transform: "rotate(45deg)" }],
			{
				duration: 400,
				fill: "forwards",
			}
		);

		rodthree.animate(
			[
				{ tansform: "rotate(0deg)" },
				{ transform: " translatey(-9px) rotate(-45deg) " },
			],
			{
				duration: 400,
				fill: "forwards",
			}
		);
	}
};
