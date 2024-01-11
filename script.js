let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (userGuess, computerGuess, target) => {
    let userDifference = Math.abs(target - userGuess);
    let computerDifference = Math.abs(target - computerGuess);

    if (userDifference <= computerDifference) {
        return true;
    } else {
        return false;
    }
}

const updateScore = (winner) => {
    if (winner = "human") {
        humanScore += 1
    } else if (winner = "computer") {
        computerScore += 1
    }
}

const advanceRound = () => {
    currentRoundNumber += 1
}

