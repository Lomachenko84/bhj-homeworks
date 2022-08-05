const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let deceased = 0;
let misses = 0;
let getHole = index => document.getElementById(`hole${index}`)
for (let holeIndex = 1; holeIndex < 10; holeIndex++) {
    let hole = getHole(holeIndex);
    hole.onclick = function () {
        if (hole.classList.contains('hole_has-mole')) {
            deceased++;
            dead.textContent = deceased;
        } else {
            misses++;
            lost.textContent = misses;
        }
        if (deceased == 5) {

            alert('выиграл');
            deceased = 0;
            misses = 0;
            dead.textContent = deceased;
            lost.textContent = misses;
        }
        if (misses == 5) {

            alert('проиграл');
            deceased = 0;
            misses = 0;
            lost.textContent = misses;
            dead.textContent = deceased;
        }
    }

}