const gameGrid = document.getElementById('game-grid');
const targetMovesElement = document.getElementById('target-moves');
const movesCountElement = document.getElementById('moves-count');
const newGameButton = document.getElementById('new-game-button');
const timerElement = document.getElementById('timer');

let lights = [];
let targetMoves = 0;
let movesCount = 0;
let timerInterval;
let initialTime = 14 * 60;
let timeLeft;

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = initialTime;
    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        timerElement.textContent = `Timer: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            alert('Time is up!');
        } else {
            timeLeft--;
        }
    }, 1000);
}

function createLights() {
    lights = [];
    targetMoves = 0;
    movesCount = 0;

    gameGrid.innerHTML = '';

    for (let i = 0; i < 25; i++) {
        const light = document.createElement('div');
        light.classList.add('light');
        light.dataset.index = i;
        light.addEventListener('click', toggleLight);
        gameGrid.appendChild(light);

        lights.push(light);
    }

    generateRandomLights();
    updateTargetMoves();
    updateMovesCount();
    startTimer();
}

function generateRandomLights() {
    let numLightsOn = Math.floor(Math.random() * 15) + 1;

    for (let i = 0; i < numLightsOn; i++) {
        let randomIndex = Math.floor(Math.random() * 25);
        lights[randomIndex].classList.add('on');
    }
}

function toggleLight(event) {
    const light = event.target;
    const index = parseInt(light.dataset.index);

    light.classList.toggle('on');

    toggleAdjacentLights(index);
    checkWin();
    movesCount++;
    updateMovesCount();
}

function toggleAdjacentLights(index) {
    const row = Math.floor(index / 5);
    const col = index % 5;

    const adjacentIndices = [
        index - 5,
        index + 5,
        index - 1,
        index + 1
    ];

    adjacentIndices.forEach(adjIndex => {
        const adjRow = Math.floor(adjIndex / 5);
        const adjCol = adjIndex % 5;

        if (
            adjIndex >= 0 && adjIndex < 25 &&
            (adjRow === row || adjCol === col)
        ) {
            const adjacentLight = lights[adjIndex];
            adjacentLight.classList.toggle('on');
        }
    });
}

function checkWin() {
    let allLightsOff = true;

    for (const light of lights) {
        if (light.classList.contains('on')) {
            allLightsOff = false;
            break;
        }
    }

    if (allLightsOff) {
        alert('Congratulations! You won in ' + movesCount + ' moves!');
        generateRandomLights();
        updateTargetMoves();
        movesCount = 0;
        updateMovesCount();
    }
}

function updateTargetMoves() {
    targetMoves = Math.floor(Math.random() * 10) + 1;
    targetMovesElement.textContent = targetMoves;
}

function updateMovesCount() {
    movesCountElement.textContent = movesCount;
}

createLights();

newGameButton.addEventListener('click', function () {
    createLights();
    resetTimer();
});