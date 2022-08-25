const value = document.querySelectorAll(".dropdown__value")
for (let i = 0; i < value.length; i++){
    value[i].addEventListener('click', function (e) {
        if (value[i].nextElementSibling) {
            e.preventDefault()
            value[i].nextElementSibling.classList.toggle('dropdown__list_active')
        }
    })
    
    const windows = value[i].nextElementSibling.querySelectorAll(".dropdown__item")
    
    for (let j = 0; windows.length > j; j++) {
          windows[j].addEventListener('click', function (e) {
                   if (value[i].nextElementSibling) {
                value[i].nextElementSibling.classList.toggle('dropdown__list_active')
            }
            
            value[i].textContent = e.currentTarget.querySelector(".dropdown__link").textContent
            e.preventDefault()
        })
    }   
}

