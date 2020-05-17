const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const moles = document.querySelectorAll('.mole')
let lastHole;
let timeUp = false;
let score = 0;

//function randome time for pop of mole
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];

    //prevent same hole
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(700, 1000); //get randome time to determine how long mole should peep
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up'); //mole down after random time
        if (!timeUp) {
            peep();
        }
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 20000) //show random moles for 15 seconds
}

function wack(e) {
    if (!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove('up'); //refers to clicked item
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', wack))