const chat = document.querySelector('.chat-widget')
chat.addEventListener("click", function () {
    chat.classList.add('chat-widget_active')
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const input = document.getElementById("chat-widget__input")
const robot = ['люблю сосиски', "хочу в Париж","прекрасно, но позвоните позже", "Очень люблю грозу в начале мая"]
input.addEventListener("keydown", function (e) {
    let text = input.value;
      if (e.code == "Enter" && text) {
        input.value = ""
        const messages = document.querySelector('.chat-widget__messages');
        let time = new Date()
        let hour = time.getHours()
        let min = time.getMinutes()
        messages.innerHTML += `
            <div class="message message_client">
            <div class="message__time">${hour}:${min}</div>
            <div class="message__text">
            ${text}
            </div>
            </div>
        `;
        messages.innerHTML += `
            <div class="message">
            <div class="message__time">${hour}:${min}</div>
            <div class="message__text">
            ${robot[getRandomInt(robot.length - 1)]}
            </div>
            </div>
        `;
    }

})
