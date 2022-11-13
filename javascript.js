function getComputerChoice(){
    /*
    randomly returns either "Rock", "Paper", or "Scissors"
    */
    const dict = {
        0: "Rock",
        1: "Paper",
        2: "Scissors"
    };
    // random int between 0 and 2 inclusive
    choice = Math.floor(Math.random() * 3);
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
    returns string describing result of a round based on player and computer selections
    */
    playerSelection = capitalize(playerSelection);
    if (playerSelection == computerSelection) {
        return `Tie! You both picked ${playerSelection}!`;
    } else if (checkWin(playerSelection, computerSelection)){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}
