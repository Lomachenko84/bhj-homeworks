const has = document.querySelectorAll(".has-tooltip")
has.forEach((el) => {
    let coor = el.getBoundingClientRect();
    el.insertAdjacentHTML('afterend',`<div class="tooltip" style="left: ${coor.left}px; top: ${coor.bottom}px">${el.title}</div>`)
    el.addEventListener("click", (e) => {
        e.preventDefault()
        el.nextElementSibling.classList.toggle('tooltip_active')
    })
})