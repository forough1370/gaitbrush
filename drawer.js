
const canvasTag = document.querySelector("canvas")

canvasTag.width = window.innerWidth *2 
canvasTag.height = window.innerHeight *2


canvasTag.style.width = window.innerWidth + "px"
canvasTag.style.height = window.innerHeight + "px"


const context = canvasTag.getContext("2d")
context.scale(2, 2)


let i = 0
const images = ["image3.png", "image2.png", "image1.png"].map(src => {
	const image = document.createElement("img")
	image.src = src
	return image
})

/*const image = document.createElement("img")
	image.src = "image4.png"*/


document.addEventListener("mousemove", function (event) {

	if (images[i].complete) {
		context.drawImage(images[i], event.pageX - 50, event.pageY - 50, 100, 100)
	}
})



canvasTag.addEventListener("click", function (){
	i = i + 1
})