// Player  One
let score = document.getElementById("score")
let scoreBoard = document.getElementById("comp");
let scoreBoard2 = document.getElementById("player1");
let counter = 1;


const pressX = () => {
    let scorpion = Math.floor(Math.random() * 10);
    let subZero = Math.floor(Math.random() * 10);

    if (scorpion === subZero) {
        console.log("draw")

    } else if (scorpion > subZero) {
        scoreBoard2.innerHTML = counter.toString();
        counter++;
        return counter;
    } else {
        scorpion < subZero
        scoreBoard.innerHTML = counter.toString();
        counter++;
        return counter;
    }

}


const pressSquare = () => {
    let scorpion = Math.floor(Math.random() * 10);
    let subZero = Math.floor(Math.random() * 10);

    if (scorpion === subZero) {
        console.log("draw")

    } else if (scorpion > subZero) {
        scoreBoard2.innerHTML = counter.toString();
        counter++;
        return counter;
    } else {
        scorpion < subZero
        scoreBoard.innerHTML = counter.toString();
        counter++;
        return counter;
    }

}
const pressCircle = () => {
    let scorpion = Math.floor(Math.random() * 10);
    let subZero = Math.floor(Math.random() * 10);

    if (scorpion === subZero) {
        console.log("draw")

    } else if (scorpion > subZero) {
        scoreBoard2.innerHTML = counter.toString();
        counter++;
        return counter;
    } else {
        scorpion < subZero
        scoreBoard.innerHTML = counter.toString();
        counter++;
        return counter;
    }

}

