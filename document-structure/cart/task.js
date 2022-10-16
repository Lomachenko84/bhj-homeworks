const product = document.querySelector(".cart__products")
const image = document.querySelector(".product__image")
const value = document.querySelector(".product__quantity-value")
let plus = document.querySelectorAll(".product__quantity-control_inc")
plus.forEach((el) => {
    el.addEventListener("click", function () {
        let sibling = el.previousElementSibling
        sibling.textContent = parseInt(sibling.textContent)+1
    })
})

let minus = document.querySelectorAll(".product__quantity-control_dec")
minus.forEach((el) => {
    el.addEventListener("click", function(){
        let sibling = el.nextElementSibling
        sibling.textContent = parseInt(sibling.textContent)
        if (parseInt(sibling.textContent) > 1){
            sibling.textContent = parseInt(sibling.textContent)-1
        }

    })   
})

let add = document.querySelectorAll(".product__add")
add.forEach((el) =>{
    el.addEventListener("click", function (e) {
        e.preventDefault()
        let prod = e.target.parentNode.parentNode.parentNode.getAttribute("data-id")
        let cart = document.getElementsByClassName("cart__product")
        let text = e.target.previousElementSibling.querySelector(".product__quantity-value").textContent
        
        if (cart.length !== 0 && Array.from(cart).some((elem) => prod === elem.getAttribute("data-id"))){
            let y = document.querySelector('.cart__products').querySelector(`[data-id="${prod}"]`).querySelector(".cart__product-count")
            y.textContent = parseInt(y.textContent) + parseInt(text)
                         
        } else {
            let srcs = e.target.parentNode.parentNode.previousElementSibling.src
            let pro = document.createElement('div')
            pro.classList.add("cart__product")
            pro.setAttribute("data-id", prod)
            let img = document.createElement("img")
            img.classList.add("cart__product-image")
            img.src = srcs
            //sibling.textContent = parseInt(sibling.textContent)
            let count = document.createElement("div")
            count.classList.add("cart__product-count")
            count.textContent = text
            pro.appendChild(img)
            pro.appendChild(count)
            product.appendChild(pro)
        }
            
    })
    
})
let imgs = document.querySelectorAll('.product__image')
imgs.forEach((el) =>{
    el.addEventListener("click", function (e) {
        e.preventDefault()
        let sib = el.nextElementSibling
        sib.textContent = parseInt(sibling.textContent)
    })
})