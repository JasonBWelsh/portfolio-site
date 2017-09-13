$(document).ready(function() {

	const header = document.querySelector(".main-header");
	const mainNav = document.querySelector(".main-nav");
	const nameIcon = document.querySelector(".name-icon");
	const mainNavList = document.querySelector(".main-nav-list");
	const headerDownArrow = document.querySelector(".header-down-arrow");

	const aboutText = document.querySelector(".about-text");
	const aboutList = document.querySelector(".about-list");
	const aboutCards = aboutText.querySelectorAll(".about-card");


	const skillsList = document.querySelector(".skills-list");

	//fade in header
	/*function fadeInHeaderEls() {
		header.classList.remove("hide");
		header.classList.add("show");
	}
	fadeInHeaderEls();*/

	(function() {
		header.classList.remove("hide");
		header.classList.add("show");
	})();

	// set initial .display class on about-coding
	for (let i = 0; i < aboutCards.length; i += 1) {
		if (aboutCards[i].classList.contains("about-coding")) {
			aboutCards[i].classList.add("display");
		}
	}

	// add .highlight-about class to first about list item on page load
	function highlightAboutCode() {
		let LIS = aboutList.children;
		LIS[0].classList.add("highlight-about");
	}
	highlightAboutCode();

	// click about list to show about card
	aboutList.addEventListener('click', (e) => {
		if (e.target.tagName === 'LI') {
			let LI = e.target;
			// add highlighted class on LI when clicked
			let LIS = aboutList.children;
			// remove .highlight-about from about LIS when a click happens
			for (let i = 0; i < LIS.length; i += 1) {
				if (LIS[i].classList.contains("highlight-about")) {
					LIS[i].classList.remove("highlight-about");
				}
			}
			// add .highlight-about to clicked LI
			LI.classList.add("highlight-about");
			// loop over about-cards and remove .display class
			for ( let i = 0; i < aboutCards.length; i += 1) {
				if (aboutCards[i].classList.contains("display")) {
					aboutCards[i].classList.remove("display");
				}
			}
			// check LI type and show proper card
			// check for coding
			let lis = aboutList.children;
			if (LI.textContent === 'Coding') {
				aboutCards[0].classList.add("display");
			} else if (LI.textContent === 'Health') {
				aboutCards[1].classList.add("display");
			} else if (LI.textContent === 'Puppies') {
				aboutCards[2].classList.add("display");
			} else if (LI.textContent === 'Music') {
				aboutCards[3].classList.add("display");
			} else if (LI.textContent === 'Other') {
				aboutCards[4].classList.add("display");
			}
		}
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


});

