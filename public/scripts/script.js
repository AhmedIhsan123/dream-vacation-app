const inputs = {
	destination: document.getElementById("destination"),
	date: document.getElementById("d-date"),
	travelers: document.getElementById("travelers"),
};
const form = document.getElementById("booking-form");

form.onsubmit = () => {
	let isValid = true;

	if (inputs.destination.value == "") {
		isValid = false;
		document.getElementById("err-destination").style.visibility = "visible";
	} else {
		document.getElementById("err-destination").style.visibility = "hidden";
	}

	if (inputs.date.value == "") {
		isValid = false;
		document.getElementById("err-departure").style.visibility = "visible";
	} else {
		document.getElementById("err-departure").style.visibility = "hidden";
	}

	if (inputs.travelers.value == 0 || inputs.travelers.value < 0) {
		isValid = false;
		document.getElementById("err-travelers").style.visibility = "visible";
	} else {
		document.getElementById("err-travelers").style.visibility = "hidden";
	}

	return isValid;
};
