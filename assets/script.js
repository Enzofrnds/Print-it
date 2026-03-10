const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

function createDots() {
	const dotsContainer = document.querySelector(".dots")
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("span")
		dot.classList.add("dot")
		dotsContainer.appendChild(dot)
	}
	const dots = document.querySelectorAll(".dot")
	dots[0].classList.add("dot_selected")
}

function updateDots(index) {
	const dots = document.querySelectorAll(".dot")
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("dot_selected")
		if (i === index) {
			dots[i].classList.add("dot_selected")
		}
	}
}

function changeSlide() {
	let index = 0
	const leftArrow = document.querySelector(".arrow_left")
	const rightArrow = document.querySelector(".arrow_right")
	const imageElement = document.querySelector(".banner-img")
	const tagLineElement = document.querySelector("#banner p")

	rightArrow.addEventListener("click", () => {
		index = (index + 1) % slides.length
		imageElement.src = `./assets/images/slideshow/${slides[index].image}`
		tagLineElement.innerHTML = slides[index].tagLine
		updateDots(index)
	})

	leftArrow.addEventListener("click", () => {
		index = (index - 1 + slides.length) % slides.length
		imageElement.src = `./assets/images/slideshow/${slides[index].image}`
		tagLineElement.innerHTML = slides[index].tagLine
		updateDots(index)
	})
}

createDots()
changeSlide()
