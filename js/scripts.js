
const header = document.querySelector(".main-header");
const mainNav = document.querySelector(".main-nav");
const nameIcon = document.querySelector(".name-icon");
const mainNavList = document.querySelector(".main-nav-list");
const headerDownArrow = document.querySelector(".header-down-arrow");

//fade in header
$(document).ready(function() {
	header.classList.remove("hide");
	header.classList.add("show");
});

// hover over name icon to highlight nav links
nameIcon.addEventListener('mouseover', (e) => {
	let items = mainNavList.children;
	for ( let i=0; i < items.length; i += 1 ) {
		items[i].classList.add("highlight-links");
	}
});
nameIcon.addEventListener('mouseout', () => {
	let items = mainNavList.children;
	for ( let i=0; i < items.length; i += 1 ) {
		items[i].classList.remove("highlight-links");
	}
});

// header down arrow removes header and sticks nav
headerDownArrow.addEventListener('click', () => {
	mainNav.style.position = "fixed";
	mainNav.style.top = 0;
	header.classList.add("shrink-ray");
});