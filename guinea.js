var outputTarget = document.getElementById("output-target");
var articleSection = document.getElementsByClassName("article-section");
var pageTitle = document.getElementById("page-title");
var inputField = document.getElementById("keypress-input");
var addColorButton = document.getElementById("add-color");
var hulkifyButton = document.getElementById("make-large");
var addBorderButton = document.getElementById("add-border");
var roundBorderButton = document.getElementById("add-rounding");
var guineaPigText = document.getElementById("guinea-pig");


function clickSection (event) {
	var sectionText = event.target.innerText;
	if (event.target.className === "article-section") {
		outputTarget.innerHTML = `You clicked on the ${sectionText} section.`;
	}
}

window.addEventListener("click", clickSection);

pageTitle.addEventListener("mouseover", function (){
	outputTarget.innerHTML = `You moved your mouse over the header.`;
});

pageTitle.addEventListener("mouseleave", function (){
	outputTarget.innerHTML = `You left me!!!`;
});

inputField.addEventListener("keyup", function (event) {
	outputTarget.innerHTML = event.target.value;
});

addColorButton.addEventListener("click", function () {
	guineaPigText.classList.add("addcolor");
});

hulkifyButton.addEventListener("click", function () {
	guineaPigText.classList.add("hulkify");
});

addBorderButton.addEventListener("click", function () {
	guineaPigText.classList.add("addborder");
});

roundBorderButton.addEventListener("click", function () {
	guineaPigText.classList.add("roundborder");
});


















