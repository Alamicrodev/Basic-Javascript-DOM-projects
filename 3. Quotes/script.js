// Quotes Array
quotes = [
	{
		quote: "Be yourself; everyone else is already taken.",
		author: "Oscar Wilde",
	},
	{
		quote:
			"To live is the rarest thing in the world. Most people exist, that is all.",
		author: "Oscar Wilde",
	},
	{
		quote: "True friends stab you in the front.",
		author: "Oscar Wilde",
	},
	{
		quote: "Women are made to be Loved, not understood.",
		author: "Oscar Wilde",
	},
	{
		quote: "Be the change that you wish to see in the world.",
		author: "Mahatma Gandhi",
	},
	{
		quote:
			"Live as if you were to die tomorrow. Learn as if you were to live forever.",
		author: "Mahatma Gandhi",
	},
	{
		quote: "No one can make you feel inferior without your consent.",
		author: "Eleanor Roosevelt",
	},
];

// Button
var button = document.querySelector("#button");

// Quote Element
var quote = document.querySelector("#quote");

// Author Name
var author = document.querySelector("#author");

// This function returns a random Quote object from the above array.
function randomQuote() {
	var quote = quotes[Math.floor(Math.random() * quotes.length)];

	return quote;
}

// Button click event handler
var thisfunction = () => {
	// Grabbing a quote object
	quoteObject = randomQuote();

	quote.innerHTML = quoteObject.quote;
	author.innerHTML = quoteObject.author;
};

button.addEventListener("click", thisfunction);
