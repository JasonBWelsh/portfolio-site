
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

