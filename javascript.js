function getComputerChoice() {
    /*
    randomly returns either "Rock", "Paper", or "Scissors"
    */
    const dict = {
        0: "Rock",
        1: "Paper",
        2: "Scissors"
    };
    // random int between 0 and 2 inclusive
    let choice = Math.floor(Math.random() * 3);
    return dict[choice];
}

function capitalize(string) {
    /*
    capitalizes first character in string, makes all others lowercase
    returns new string
    */
    string = string.toLowerCase();
    return string.replace(string.charAt(0), string.charAt(0).toUpperCase());
}

function checkWin(playerSelection, computerSelection) {
    /*
    returns true if player beats computer, false otherwise
    */
    if ((playerSelection=="Rock" && computerSelection=="Scissors") || 
    (playerSelection=="Paper" && computerSelection=="Rock") ||
    (playerSelection=="Scissors" && computerSelection=="Paper")) {
        return true;
    }
    return false;
}

function playRound(playerSelection, computerSelection) {
    /*
    returns array where first element is string representing the winner
    second element is string describing result of a round based on player and computer selections
    */
    playerSelection = capitalize(playerSelection);
    if (playerSelection == computerSelection) {
        return ["tie", `Tie! You both picked ${playerSelection}!`];
    } else if (checkWin(playerSelection, computerSelection)){
        return ["player", `You Win! ${playerSelection} beats ${computerSelection}`];
    } else {
        return ["computer", `You Lose! ${computerSelection} beats ${playerSelection}`];
    }
}

function game() {
    /*
    simulates 5 rounds of game
    takes input fpr each round
    prints results to console
    returns nothing
    */
    let playerScore = 0;
    let computerScore  = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose Rock, Paper, or Scissors: ");
        let round = playRound(playerSelection, getComputerChoice());
        let winner = round[0];
        let phrase = round[1];
        if (winner == "player") {
            playerScore++;
        } else if (winner == "computer") {
            computerScore++;
        }
        console.log(phrase);
    }
    console.log(`Final Score:
    Player: ${playerScore}
    Computer: ${computerScore}`);
}

