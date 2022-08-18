const main = document.getElementById('modal_main');
main.classList.add('modal_active');
let active = main.getElementsByClassName('modal__close modal__close_times');
active[0].onclick = function () {
    main.classList.remove('modal_active')

}

const success = document.getElementById('modal_success');
let show = document.getElementsByClassName('show-success');
show[0].onclick = function () {
    success.classList.add('modal_active');
    this.closest('.modal').style.display = "none";
}
