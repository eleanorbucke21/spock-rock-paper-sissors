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

  //Rock
  else if (player === "Rock") {
    if (computer === "Paper") {
      computerScore++;
      scoreWindow.innerText = playerScore + " : " + computerScore;
      return "Paper covers rock You Lose 😔";
    } else if (computer === "Scissors") {
      playerScore++;
      scoreWindow.innerText = playerScore + " : " + computerScore;
      return "Rock crushes scissors You Win! 😊";
    } else if (computer === "Lizard") {
      playerScore++;
      scoreWindow.innerText = playerScore + " : " + computerScore;
      return "Rock crushes lizard You Win! 😊";
    } else {
      computerScore++;
      scoreWindow.innerText = playerScore + " : " + computerScore;
      return "Spock vaporizes rock You Lose 😔";
    }

    //Paper

  } else if (player === "Paper") {
    if (computer === "Rock") {
      playerScore++;
      scoreWindow.innerText = playerScore + " : " + computerScore;
      return "Paper covers rock You Win! 😊";
    } else if (computer === "Scissors") {
      computerScore++;
      scoreWindow.innerText = playerScore + " : " + computerScore;
      return "Scissors cut paper You Lose 😔";
    } else if (computer === "Lizard") {
      computerScore++;
      scoreWindow.innerText = playerScore + " : " + computerScore;
      return "Lizard eats paper You Lose 😔";
    } else {
      playerScore++;
      scoreWindow.innerText = playerScore + " : " + computerScore;
      return "Paper disproves spock You Win! 😊";
    }

    //Scissors

  } else if (player === "Scissors") {
    if (computer === "Rock") {
      computerScore++;
      scoreWindow.innerText = playerScore + " : " + computerScore;
      return "Rock crushes scissors You Lose 😔";
    } else if (computer === "Paper") {
      playerScore++;
      scoreWindow.innerText = playerScore + " : " + computerScore;
      return "Scissors cut paper You Win! 😊";
    } else if (computer === "Lizard") {
      playerScore++;
      scoreWindow.innerText = playerScore + " : " + computerScore;
      return "Scissors decapitate lizard You Win! 😊";
    } else {
      computerScore++;
      scoreWindow.innerText = playerScore + " : " + computerScore;
      return "Spock smashes scissors You Lose 😔";
    }

    //LIZARD

  } else if (player === "Lizard") {
    if (computer === "Rock") {
      computerScore++;
      scoreWindow.innerText = playerScore + " : " + computerScore;
      return "Rock crushes lizard You Lose 😔";
    } else if (computer === "Paper") {
      playerScore++;
      scoreWindow.innerText = playerScore + " : " + computerScore;
      return "lizard eats paper You Win! 😊";
    } else if (computer === "Scissors") {
      computerScore++;
      scoreWindow.innerText = playerScore + " : " + computerScore;
      return "scissors decapitate lizard You Lose 😔";
    } else {
      playerScore++;
      scoreWindow.innerText = playerScore + " : " + computerScore;
      return "lizard poisons spock You Win! 😊";
    }

    //SPOCK

  } else if (player === "Spock") {
    if (computer === "Rock") {
      playerScore++;
      scoreWindow.innerText = playerScore + " : " + computerScore;
      return "Spock vaporizes rock You Win! 😊";
    } else if (computer === "Paper") {
      computerScore++;
      scoreWindow.innerText = playerScore + " : " + computerScore;
      return "Paper disproves spock You Lose 😔";
    } else if (computer === "Scissors") {
      playerScore++;
      scoreWindow.innerText = playerScore + " : " + computerScore;
      return "Spock smashes scissors You Win! 😊 ";
    } else {
      computerScore++;
      scoreWindow.innerText = playerScore + " : " + computerScore;
      return "Lizard poisons spock You Lose 😔";
    }
  }
};