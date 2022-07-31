const elementtimer = document.getElementById("timer")
const text = elementtimer.textContent;
let y = parseInt(text)
let timer = setInterval(() => {
    --y;
    elementtimer.textContent = y
    if (y === 0) {
        alert('Вы победили в конкурсе!')
        clearInterval(timer);
    }

}, 1000);

