const backgroundContentElements = document.querySelectorAll(".bg-content");
const gapElements = document.querySelectorAll(".fg-gap");

const backgroundElementNumber = backgroundContentElements.length;
const gapElementNumber = gapElements.length;

if (backgroundElementNumber != gapElementNumber)
	throw `There must be as many background elements (${backgroundElementNumber}) as gaps (${gapElementNumber}).`;

let bodyHeight;

function onResized() {
	bodyHeight = document.body.getBoundingClientRect().height;
	onScrolled();
};

function onScrolled() {
	let rect;

	for (let i = 0; i < backgroundElementNumber; i++) {
		rect = gapElements[i].getBoundingClientRect();
		
		backgroundContentElements[i].style.top = rect.top + "px";
		
		if (i == 0 || i == 1) {
			backgroundContentElements[i].firstElementChild.style.top = -rect.top + "px";
		} else
			backgroundContentElements[i].firstElementChild.style.top = -rect.top/2 + "px";
	}
}

document.body.onresize = onResized;
document.body.onscroll = onScrolled;

onResized();