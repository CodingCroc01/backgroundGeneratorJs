var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var gradient = document.getElementsByTagName("body")[0];
var h3 = document.getElementsByTagName("h3")[0];
var h4 = document.querySelector("h4");

h3.innerHTML = h3.innerHTML = "Hex codes - " + "Color 1: " + color1.value + " " + "Color 2: " + color2.value;

function setGradient() {
	gradient.style.background = "linear-gradient(to right, " + color1.value + " , " + color2.value + ")";
	h3.innerHTML = "Hex codes - " + "Color 1: " + color1.value + " " + "Color 2: " + color2.value;
	// css.textContent = gradient.style.background + ";"; //will display the rgb values;
	h4.textContent = gradient.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
