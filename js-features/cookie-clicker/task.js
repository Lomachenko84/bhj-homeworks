const elementclick = document.getElementById("clicker__counter")
let elem = document.getElementById("cookie")
let click = 0;
let n = 0;
elem.onclick = function () {
    if (n==0) {
        elem.style.height = '500px';
        elem.style.width = '900px';
        n=1
    } else if (n==1) {
        elem.style.height = '50px';
        elem.style.width = '100px';
        n=0
    }
    click++;
    elementclick.textContent = click

}
