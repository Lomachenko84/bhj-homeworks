const slider = document.querySelectorAll(".slider__item")


const next = document.querySelector(".slider__arrow_next")
const prev = document.querySelector(".slider__arrow_prev")
let index = 0;
let activeSlide = (index) => {
    let slide = document.querySelector(".slider__item_active");
    slide.classList.remove('slider__item_active');
    slider[index].classList.add("slider__item_active");
}
const nextSlide = () => {
    if (index == slider.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}
const prevSlide = () => {
    if (index == slider.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}
next.onclick = nextSlide;
prev.onclick = prevSlide;