//Popup

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

// Game

const playerText = document.querySelector("#Player");
const computerText = document.querySelector("#Computer");
const resultText = document.querySelector("#Result");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

let scoreWindow = document.querySelector(".scores");
let playerSelection;
let computerSelection;

let computerScore = 0;
let playerScore = 0;

scoreWindow.prepend(playerScore);
scoreWindow.append(computerScore);

choiceBtns.forEach(button => button.addEventListener("click", () => {
  player = button.id;
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  resultText.textContent = checkWinner();
  scoreWindow.textContent = playerScore + " : " + computerScore;
}));

function computerTurn() {

  const randNum = Math.floor(Math.random() * 5) + 1;

  switch (randNum) {
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
      computer = "Paper";
      break;
    case 5:
      computer = "Scissors";
      break;
  }
}

function checkWinner() {
  if (player == computer) {
    return "Draw!";
  }

  let resultMsg = "";
  //Rock
  if (player === "Rock") {
    if (computer === "Paper") {
      computerScore++;
      resultMsg = "Paper covers rock You Lose 😔";
    } else if (computer === "Scissors") {
      playerScore++;
      resultMsg = "Rock crushes scissors You Win! 😊";
    } else if (computer === "Lizard") {
      playerScore++;
      resultMsg = "Rock crushes lizard You Win! 😊";
    } else {
      computerScore++;
      resultMsg = "Spock vaporizes rock You Lose 😔";
    }

    //Paper

  }  if (player === "Paper") {
    if (computer === "Rock") {
      playerScore++;
      resultMsg =  "Paper covers rock You Win! 😊";
    } else if (computer === "Scissors") {
      computerScore++;
      resultMsg =  "Scissors cut paper You Lose 😔";
    } else if (computer === "Lizard") {
      computerScore++;
      resultMsg =  "Lizard eats paper You Lose 😔";
    } else {
      playerScore++;
      resultMsg =  "Paper disproves spock You Win! 😊";
    }

    //Scissors

  } else if (player === "Scissors") {
    if (computer === "Rock") {
      computerScore++;
      resultMsg =  "Rock crushes scissors You Lose 😔";
    } else if (computer === "Paper") {
      playerScore++;
      resultMsg =  "Scissors cut paper You Win! 😊";
    } else if (computer === "Lizard") {
      playerScore++;
      resultMsg =  "Scissors decapitate lizard You Win! 😊";
    } else {
      computerScore++;
      resultMsg =  "Spock smashes scissors You Lose 😔";
    }

    //LIZARD

  } else if (player === "Lizard") {
    if (computer === "Rock") {
      computerScore++;
      resultMsg =  "Rock crushes lizard You Lose 😔";
    } else if (computer === "Paper") {
      playerScore++;
      resultMsg =  "lizard eats paper You Win! 😊";
    } else if (computer === "Scissors") {
      computerScore++;
      resultMsg =  "scissors decapitate lizard You Lose 😔";
    } else {
      playerScore++;
      resultMsg =  "lizard poisons spock You Win! 😊";
    }

    //SPOCK

  } else if (player === "Spock") {
    if (computer === "Rock") {
      playerScore++;
      resultMsg =  "Spock vaporizes rock You Win! 😊";
    } else if (computer === "Paper") {
      computerScore++;
      resultMsg =  "Paper disproves spock You Lose 😔";
    } else if (computer === "Scissors") {
      playerScore++;
      resultMsg = "Spock smashes scissors You Win! 😊 ";
    } else {
      computerScore++;
      resultMsg = "Lizard poisons spock You Lose 😔";
    }
  }

return resultMsg;

};
