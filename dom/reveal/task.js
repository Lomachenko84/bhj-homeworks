const reveal = document.getElementsByClassName("reveal")
let height = window.innerHeight
document.addEventListener('scroll', function (e) {
    for (let i = 0; reveal.length > i; i++) {
        if (reveal[i].getBoundingClientRect().top <= height) {
            reveal[i].classList.add('reveal_active')
        }
    }
})
