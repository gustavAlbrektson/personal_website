const navSlide = function() {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");
	
	burger.addEventListener("click", function() {
		//Toggle nav
		nav.classList.toggle("nav-active");

		//Animate links
		navLinks.forEach(function(link, index) {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});
		
		//Burger animation
		burger.classList.toggle("toggle");
	});
}

navSlide();


/*
const dropdown = function() {
	const dd_button = document.querySelector(".dd-games");
	const dd_es = document.getElementById("dd-es");
	const dd_pj = document.getElementById("dd-pj");
	const dd_gm = document.getElementById("dd-gm");
	const dd_ms = document.getElementById("dd-ms");

	//Show drop down menu
	dd_button.addEventListener("mouseover", function() {
		dd_es.classList.add("dropdown-item-active");
		dd_pj.classList.add("dropdown-item-active");
		dd_gm.classList.add("dropdown-item-active");
		dd_ms.classList.add("dropdown-item-active");
	});
	
	//Hide drop down menu
	dd_button.addEventListener("mouseout", function() {
		dd_es.classList.remove("dropdown-item-active");
		dd_pj.classList.remove("dropdown-item-active");
		dd_gm.classList.remove("dropdown-item-active");
		dd_ms.classList.remove("dropdown-item-active");
	});
}

const testButton = function() {
	const button = document.querySelector(".test");

	button.addEventListener("mouseover", function() {
		//Turn on
		button.classList.add("test-active");
	});

	button.addEventListener("mouseout", function() {
		//Turn off
		button.classList.remove("test-active");
	});
}

const imageInteract = function() {
	const image = document.querySelector("img");

	image.addEventListener("click", function() {
		//Interact with image
		image.classList.add("image-interact");
	});
}

testButton();
navSlide();
dropdown();
imageInteract();






/*
const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");
	
	burger.addEventListener("click", () => {
		//Toggle nav
		nav.classList.toggle("nav-active");
		
		//Animate links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});

		//Burger animation
		burger.classList.toggle("toggle");
	});
}
*/