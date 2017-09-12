
const header = document.querySelector(".main-header");
const mainNav = document.querySelector(".main-nav");
const nameIcon = document.querySelector(".name-icon");
const mainNavList = document.querySelector(".main-nav-list");
const headerDownArrow = document.querySelector(".header-down-arrow");

const skillsList = document.querySelector(".skills-list");

//fade in header
$(document).ready(function() {
	header.classList.remove("hide");
	header.classList.add("show");
});

// set random skills list item change
function highlightSkill() {
	let skills = skillsList.children; // li els
	let x = skills.length;
	let ranNum = Math.floor(Math.random() * x) + 1;
	for ( let i = 0; i < skills.length; i += 1 ) {
		let curSkill = skills[i];
		let dataSkill = parseInt(curSkill.getAttribute("data-skill"), 10);
		function removeHighlightSkill() {
			curSkill.classList.remove("highlight-skill-item");
		}
		if ( dataSkill === ranNum ) {
			curSkill.classList.add("highlight-skill-item");
			timeoutID = window.setTimeout(removeHighlightSkill, 2000);
		}
	}
}
var intervalID = window.setInterval(highlightSkill, 3000);

// click skill list li to add class to child span
skillsList.addEventListener('click', (e) => {
	let target = e.target;
	if (target.tagName === 'LI') {
		let skillSpan = target.firstElementChild;
		skillSpan.classList.add("grow-skill");
		function shrinkSkillSpan() {
			skillSpan.classList.remove("grow-skill");
		}
		timeoutID = window.setTimeout(shrinkSkillSpan, 1000);
	} else if (target.tagName === 'SPAN') {
		target.classList.add("grow-skill");
		function shrinkTarget() {
			target.classList.remove("grow-skill");
		}
		timeoutID = window.setTimeout(shrinkTarget, 1000);
	}
});