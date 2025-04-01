const setup = () => {
	let colorDemos = document.getElementsByClassName("colorDemo")[0];
	let sliders = document.getElementsByClassName("slider");
	let labels = document.getElementsByClassName("value-label");

	// Add event listeners to update color on input change
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("input", () => update(colorDemos, sliders, labels));
	}

	// Initialize the background color
	update(colorDemos, sliders, labels);
}

const update = (colorDemos, sliders, labels) => {
	let red = sliders[0].value;
	let green = sliders[1].value;
	let blue = sliders[2].value;

	let color = `rgb(${red}, ${green}, ${blue})`;

	// Update background color
	colorDemos.style.backgroundColor = color;

	// Update text values next to sliders
	labels[0].textContent = `Red ${red}`;
	labels[1].textContent = `Green ${green}`;
	labels[2].textContent = `Blue ${blue}`;

	console.log(`RGB: ${color}`);
}

// Wait until DOM is loaded
window.addEventListener("load", setup);
