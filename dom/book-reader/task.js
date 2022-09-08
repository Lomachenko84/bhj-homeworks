const book = document.getElementById("book")
let controls = document.getElementsByClassName('font-size')
for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener("click", function (e) {
        e.preventDefault();
        for (let q = 0; q < controls.length; q++) {
            controls[q].classList.remove('font-size_active')
        }
        controls[i].classList.add('font-size_active')
        if (controls[i].classList.contains("font-size_big")){
            book.classList.remove('book_fs-small')
            book.classList.add('book_fs-big')
        }else if (controls[i].classList.contains("font-size_small")){
            book.classList.remove('book_fs-big')
            book.classList.add('book_fs-small')
        }else{
            book.classList.remove('book_fs-big')
            book.classList.remove('book_fs-small')
        }
    })
}