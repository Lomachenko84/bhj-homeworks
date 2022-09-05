const tab = document.getElementsByClassName("tab")
const content = document.getElementsByClassName("tab__content")
for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', function (e) {
        for (let q = 0; q < tab.length; q++) {
            tab[q].classList.remove('tab_active')
            content[q].classList.remove('tab__content_active')
        }
        e.preventDefault()
        tab[i].classList.add('tab_active')
        content[i].classList.add('tab__content_active')
    })
}