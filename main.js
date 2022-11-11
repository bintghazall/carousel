const buttons =  document.querySelectorAll("[data-carousel-button]")
// const images = document.querySelectorAll("[data-image]")
const images = document.querySelector("[data-container]")
// console.log(images)
// console.log(buttons)


//add event listener to the image to display arrow when hover 
// the event listener is added to the container because it houses the arrows too

images.addEventListener('mouseenter', () =>{
    buttons.forEach(button =>{
        button.style.display = "block"
    })
})

//add event listener to the image to takes-away the arrows when mouse leaves image-container
// this is also added to the container too
images.addEventListener('mouseleave', () =>{
    buttons.forEach(button =>{
        button.style.display = "none"
    })
})
// console.log(buttons)
// scrolling through and looping on image dispslay
buttons.forEach(button =>{
    button.addEventListener("click", () => {
        const offset = button.dataset.arrowButton === "next" ? 1 : -1;
        const slides = button
        .closest("[data-container]")
        .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")

        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        // console.log(slides.children)

        if (newIndex < 0) newIndex = slides.children.length -1
        if (newIndex >= slides.children.length) newIndex=0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})