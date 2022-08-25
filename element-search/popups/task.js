const main = document.getElementById('modal_main');
main.classList.add('modal_active');
let active = document.getElementsByClassName('modal__close modal__close_times');
for (let i = 0; i < active.length; i++) {
    active[i].onclick = function () {
        this.closest('.modal').classList.remove("modal_active")

    }
}

const success = document.getElementById('modal_success');
let show = document.getElementsByClassName('show-success');
show[0].onclick = function () {
    success.classList.add('modal_active');
    this.closest('.modal').style.display = "none";
}
