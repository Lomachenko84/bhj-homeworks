const input = document.getElementById("task__input")
const form = document.getElementById("tasks__form")
form.addEventListener('submit', function (e) {
    e.preventDefault()
    let text = input.value;
    if (text.trim()) {
        input.value = ""
        let title = document.createElement('div')
        title.classList.add("task__title")
        title.textContent = text;
        let task = document.createElement("div")
        task.classList.add("task")
        let remove = document.createElement("a")
        remove.classList.add("task__remove")
        remove.setAttribute('href', "#")
        remove.innerHTML = '&times;'
        task.appendChild(title)
        task.appendChild(remove)
        
        let q = document.getElementById("tasks__list")
        q.appendChild(task)
        remove.addEventListener("click", function(y) {
            y.preventDefault()
            task.remove()
        })
    }
})

