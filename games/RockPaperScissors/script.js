let playText = document.querySelector('.play-text'),
    userRock = document.querySelector('.rock'),
    userPaper = document.querySelector('.paper'),
    userScissors = document.querySelector('.scissors'),
    buttonPlay = document.querySelector('.button--play'),
    userScore = document.querySelector('.user--score'),
    compScore = document.querySelector('.comp--score'),
    messages = {
        'default_text': 'Hi, dear gamer!)',
        'win_comp': 'Computer wins.',
        'win_user': 'User wins.',
        'draw': 'We have a draw.',
        'win_comp_game': 'Computer wins the game!',
        'win_user_game': 'User wins the game!',
        'win_both_gamers': 'Both players win the game!',
    },
    compChoose,
    userChoose,
    userCount = 0,
    compCount = 0;

function compGuessNumber() {
    compChoose = Math.floor(Math.random() * 3);// 0 to 2
};
function defaultDisabled() {
    userRock.setAttribute('disabled', 'disabled');
    userPaper.setAttribute('disabled', 'disabled');
    userScissors.setAttribute('disabled', 'disabled');
    buttonPlay.removeAttribute('disabled');
};
function defaultSettings() {
    userCount = 0;
    compCount = 0;
    userScore.textContent = userCount;
    compScore.textContent = compCount;
    playText.textContent = messages.default_text;
}
function checkWinner(user) {
    userChoose = user;
    compGuessNumber();
    if (userChoose > compChoose) {
        playText.innerHTML = messages.win_user;
        userCount += 1;
    } else if (userChoose < compChoose) {
        playText.innerHTML = messages.win_comp;
        compCount += 1;
    } else {
        playText.innerHTML = messages.draw;
    }
    userScore.textContent = userCount;
    compScore.textContent = compCount;
    declareWinner();
}
function declareWinner() {
    if (userCount == 5 && compCount == 5) {
        playText.textContent = messages.win_both_gamers;

        setTimeout(() => {
            defaultSettings()
        }, 10000);
    } else if (userCount == 5) {
        playText.textContent = messages.win_user_game;
        defaultDisabled();
        setTimeout(() => {
            defaultSettings()
        }, 10000);
    } else if (compCount == 5) {
        playText.textContent = messages.win_comp_game;
        defaultDisabled();
        setTimeout(() => {
            defaultSettings()
        }, 10000);
    }
}

buttonPlay.addEventListener('click', () => {
    userRock.removeAttribute('disabled');
    userPaper.removeAttribute('disabled');
    userScissors.removeAttribute('disabled');
    buttonPlay.setAttribute('disabled', 'disabled');
});

userRock.addEventListener('click', () => {
    checkWinner(0)
});
userPaper.addEventListener('click', () => {
    checkWinner(1)
});
userScissors.addEventListener('click', () => {
    checkWinner(2)
});