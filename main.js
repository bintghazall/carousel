const buttons =  document.querySelectorAll("[data-carousel-button]")
const images = document.querySelectorAll("[data-image]")
// console.log(images)
// console.log(buttons)


//add event listener to the image to display arrow when hover 
images.forEach(image =>{
    image.addEventListener('mouseenter',() =>{
        buttons.forEach(button =>{

            button.style.display = "block"
        })
    })

    // //add event listener to the image to takeaway arrow when mouse leaves image
    image.addEventListener('mouseleave',() =>{
        buttons.forEach(button =>{

            button.style.display = "none"
        })
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