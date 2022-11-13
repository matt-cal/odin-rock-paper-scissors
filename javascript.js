function getComputerChoice(){
    const dict = {
        0: "Rock",
        1: "Paper",
        2: "Scissors"
    };
    choice = Math.floor(Math.random() * 3);
    return dict[choice];
}

console.log("hello");