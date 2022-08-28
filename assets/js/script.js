/* Copied from Youtube tutorial https://www.youtube.com/watch?v=n1_vHArDBRA */

const playerText = document.querySelector("#player");
const computerText = document.querySelector("#computer");
const resultText = document.querySelector("#result");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 5) + 1;

    switch(randNum){
      case 1:
        computer = "Rock";
        break;
      case 2:
        computer = "Paper";
        break;
      case 3:
        computer = "Scissors";
        break;
        case 4:
            computer = "Spock";
            break;
        case 5:
            computer = "Lizard";
            break;
    }
}

function checkWinner () {
    if(player == computer){
        return "Draw!";
    }

/* Rock */
else if (player == 'Rock'){
    if (computer == 'Paper' || 'Spock'){
        result = 'You lose!';
    } else {
        result = 'You win!';
    }
}

/* Paper */ 
else if (player == 'Paper'){
    if (computer == 'Lizard' || 'Scissors'){
        result = 'You lose!';
    } else {
        result = 'You win!';
    }
}

/* Scissors */
    else if (player == 'Scissors'){
        if (computer == 'Spock' || 'Rock'){
            result = 'You lose!';
        } else {
            result = 'You win!';
    }
}

/* Lizard */
else if (player == 'Lizard'){
    if (computer == 'Rock' || 'Scissors'){
        result = 'You Lose!';
    } else {
        result = 'You Win!';
    }
}

/* Spock */
else if (player == 'Spock'){
    if (computer == 'Paper' || 'Lizard'){
        result = 'You lose!';
    } else {
        result = 'You win!';
    }
}
}