let step = true, // gamer's step
    playerCountBalls = 10,
    compCountBalls = 10,
    playButton = document.querySelector('.play'),
    playerBag = document.querySelector('.player-bag'),
    compImage = document.querySelector('.comp-image'),
    playerImage = document.querySelector('.player-image'),
    playerCount = document.querySelector('.player__count'),
    playerCountBtn = document.querySelector('.player__count-btn'),
    evenBtn = document.querySelector('.even'),
    oddBtn = document.querySelector('.odd'),
    playText = document.querySelector('.play__text'),
    results = document.querySelector('.game__results'),
    guessCompBalls,
    guessPlayerBalls,
    compEvenOdd,
    messages = {
        'wrong_bet': 'Wrong bet',
        'step_456': 'Guess 456! <br>Place your bet and choose Even/Odd',
        'win_456': 'Game over! 456 wins!',
        'res_456': '456 placed a bet',
        'step_001': 'Guess 001! <br>Place your bet</br>',
        'win_001': 'Game over! 001 wins!',
        'res_001': '001 placed a bet',
    };
let compTotal = document.querySelector('.comp__total'),
    playerTotal = document.querySelector('.player__total');

playButton.addEventListener('click', () => {
    playButton.classList.add('hidden');
    playerCountBalls = 10;
    compCountBalls = 10;
    results.innerHTML = '';
    compImage.src = '../images/10balls/001-sad.jpg';
    playerImage.src = '../images/10balls/456-sad.jpg';
    playerCount.removeAttribute('disabled');
    playerCountBtn.removeAttribute('disabled');
    evenBtn.setAttribute('disabled', 'disabled');
    oddBtn.setAttribute('disabled', 'disabled');
    createBalls(playerCountBalls, compCountBalls);
    stepPlayers(step);
});

function createBalls(playerCount, compCount) {
    playerCount >= 20 || playerCount <= 0 ?
        playerBag.setAttribute('src', `../images/10balls/empty.png`) :
        playerBag.setAttribute('src', `../images/10balls/${playerCount}balls.png`);
    playerTotal.innerHTML = playerCount;
};

function compGuess() {
    guessCompBalls = Math.round(Math.random() * (compCountBalls - 1) + 1);
    compEvenOdd = Math.round(Math.random());
};

function stepPlayers(step) {
    console.log(step);
    compGuess();

    if (step) {
        playText.innerHTML = messages.step_456;
        playerCount.removeAttribute('disabled');
        playerCountBtn.removeAttribute('disabled');
        playerCountBtn.removeEventListener('click', handlePlayerStep);
        playerCountBtn.addEventListener('click', handlePlayerStep);
        evenBtn.setAttribute('disabled', 'disabled');
        oddBtn.setAttribute('disabled', 'disabled');
    } else {
        playText.innerHTML = messages.step_001;
        playerCountBtn.setAttribute('disabled', 'disabled');
        playerCount.setAttribute('disabled', 'disabled');
        evenBtn.removeAttribute('disabled');
        oddBtn.removeAttribute('disabled');
    }
}

// Вынесенная функция-обработчик
function handlePlayerStep() {
    guessPlayerBalls = Number(playerCount.value);

    if (guessPlayerBalls == 0 || guessPlayerBalls > playerCountBalls || guessPlayerBalls <= 0) {
        playText.innerHTML = messages.wrong_bet;
        setTimeout(() => {
            playText.innerHTML = messages.step_456;
            playerCount.value = '';
        }, 2000);
    } else {
        playerCountBtn.setAttribute('disabled', 'disabled');
        playerCount.setAttribute('disabled', 'disabled');
        evenBtn.removeAttribute('disabled');
        oddBtn.removeAttribute('disabled');
        playerCount.value = '';
    }
}

evenBtn.addEventListener('click', () => {
    checkWinner(guessCompBalls, guessPlayerBalls, 0, step);
    writeBets(messages.res_456, guessPlayerBalls, 0); // 0 = even 
    step = !step;
    stepPlayers(step);
});
oddBtn.addEventListener('click', () => {
    checkWinner(guessCompBalls, guessPlayerBalls, 1, step);
    writeBets(messages.res_456, guessPlayerBalls, 1); // 1 = odd
    step = !step;
    stepPlayers(step);
});

function writeBets(messBet, countBalls, choices) {
    if (countBalls === undefined || countBalls === null) {
        console.error('Error: countBalls is not defined.');
        return;
    } else {
        let item = document.createElement('div');
        item.innerHTML = `${messBet} <strong>${countBalls}</strong> chose ${choices ? 'odd' : 'even'}.`;
        results.appendChild(item);
    }
};

function writeReultStep(gamer, countBalls) {
    if (countBalls === undefined || countBalls === null) {
        console.error('Error: countBalls is not defined.');
        return;
    } else {
        let item = document.createElement('div');
        item.innerHTML = `Player ${gamer} is winner. He has ${countBalls} balls.`;
        results.appendChild(item);
    }
};

function writeWinnerInRound(gamer, valuePlayer) {
    let item = document.createElement('div');
    item.innerHTML = `${gamer} won ${valuePlayer}.`;
    results.appendChild(item);
}

function disabledButtons() {
    playerCountBtn.setAttribute('disabled', 'disabled');
    playerCount.setAttribute('disabled', 'disabled');
    evenBtn.setAttribute('disabled', 'disabled');
    oddBtn.setAttribute('disabled', 'disabled');
};

function checkWinner(valueComp, valuePlayer, check, step) {
    if ((valueComp % 2 == check && step) || (valuePlayer % 2 != check && !step)) {
        playerCountBalls += valuePlayer;
        compCountBalls -= valuePlayer;
        compImage.src = '../images/10balls/001-sad.jpg';
        playerImage.src = '../images/10balls/456-happy.jpg';
        writeWinnerInRound('456', valuePlayer);
    } else {
        playerCountBalls -= valuePlayer;
        compCountBalls += valuePlayer;
        compImage.src = '../images/10balls/001-happy.jpg';
        playerImage.src = '../images/10balls/456-sad.jpg';
        writeWinnerInRound('001', valuePlayer);
    }

    createBalls(playerCountBalls, compCountBalls);

    if (playerCountBalls >= 20) {
        playText.innerHTML = messages.win_456;
        playButton.classList.remove('hidden');
        disabledButtons();
        setTimeout(() => {
            writeReultStep('456', valuePlayer);
        }, 500);
    } else if (compCountBalls >= 20) {
        playText.innerHTML = messages.win_001;
        playButton.classList.remove('hidden');
        disabledButtons();
        setTimeout(() => {
            writeReultStep('001', valuePlayer);
        }, 500);
    }
}

