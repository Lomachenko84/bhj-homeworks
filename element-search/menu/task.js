const click = document.getElementsByClassName('menu__link');
for (let i = 0; click.length > i; i++) {
    click[i].addEventListener('click', function (e) {
        if (click[i].nextElementSibling) {
            e.preventDefault()
            click[i].nextElementSibling.classList.add('menu_active')
        }
    })
}