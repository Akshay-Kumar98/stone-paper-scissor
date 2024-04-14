let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msgText = document.querySelector('.msgtext')
const userVal = document.querySelector('.user-val')
const compVal = document.querySelector('.comp-val')


const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    // const randomIndex = Math.floor(Math.random() * options.length);
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex]

}

const drawGame = () => {
    msgText.innerText = "It's a Draw! Please play again"
    msgText.style.backgroundColor = "#000"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++
        userVal.innerText = userScore
        msgText.innerText = `You win the game! ${userChoice} bests ${compChoice}`
        msgText.style.backgroundColor = "green"
    }

    else {
        compScore++
        compVal.innerText = compScore
        msgText.innerText = `You Lose! Computer win the game! ${compChoice} beats ${userChoice}`
        msgText.style.backgroundColor = "red"
    }
}

const playgame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    }

    else {
        let userWin = true;


        if (userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;
        }

        else if (userChoice === 'paper') {
            userWin = compChoice === 'scissor' ? true : false;
        }

        else {
            userWin = compChoice === 'rock' ? false : true
        }

        showWinner(userWin, userChoice, compChoice);
    }
}



choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const choiceId = choice.getAttribute('id');
        playgame(choiceId);
    })
})