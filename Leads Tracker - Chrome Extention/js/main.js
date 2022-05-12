//getting elements
let leadInput = document.getElementById("leadInput");
let saveInput = document.getElementById("saveInput");
let saveTab = document.getElementById("saveTab");
let delAll = document.getElementById("delAll");
let leads = document.getElementById("leads");

// lead list
let leadList = [];

// getting data from local storage
function grabJson() {
	let stringData = localStorage.getItem("leadData");
	if (stringData) {
		return JSON.parse(stringData);
	} else {
		return [];
	}
}

// adds to the list
function addToList(value) {
	let listItem = document.createElement("li");
	let anchor = document.createElement("a");
	anchor.setAttribute("href", value);
	anchor.setAttribute("target", "_blank");
	anchor.innerText = value;
	listItem.appendChild(anchor);
	leads.appendChild(listItem);
}

// putting data in dom
function loadData() {
	leadList = grabJson();
	leads.innerHTML = "";
	for (item of leadList) {
		addToList(item);
	}
}
// run load data initally to load data to dom from local storage
loadData();

// update local storage
function updateLocalStorage() {
	let leadString = JSON.stringify(leadList);

	localStorage.setItem("leadData", leadString);
	loadData();
}

//save input is clicked
saveInput.onclick = () => {
	let lead = leadInput.value;
	if (lead) {
		leadList.push(lead);
		updateLocalStorage();
	}
	leadInput.value = "";
};

//delete all is clicked
delAll.onclick = () => {
	leadList = [];
	updateLocalStorage();
};

//saveTab is clicked
saveTab.onclick = () => {
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
		let url = tabs[0].url;
		leadList.push(url);
		updateLocalStorage();
	});
};
