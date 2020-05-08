const menuElement = document.querySelector(".menu");

function focusMenu(e) {
	menuElement.style.visibility = "visible";
	e.stopPropagation();
}

function toggleMenu() {
	if (menuElement.style.visibility === "visible") {
		menuElement.style.visibility = "hidden";
	} else {
		menuElement.style.visibility = "visible";
	}
}