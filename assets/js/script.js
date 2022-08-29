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
      return "Paper covers rock You Lose 😔";
    } else if (computer === "Scissors") {
      return "Rock crushes scissors You Win! 😊";
    } else if (computer === "Lizard") {
      return "Rock crushes lizard You Win! 😊";
    } else {
      return "Spock vaporizes rock You Lose 😔";
    }

//Paper

  } else if (player === "Paper") {
    if (computer === "Rock") {
      return "Paper covers rock You Win! 😊";
    } else if (computer === "Scissors") {
      return "Scissors cut paper You Lose 😔";
    } else if (computer === "Lizard") {
      return "Lizard eats paper You Lose 😔";
    } else {
      return "Paper disproves spock You Win! 😊";
    }

//Scissors

  } else if (player === "Scissors") {
    if (computer === "Rock") {
      return "Rock crushes scissors You Lose 😔";
    } else if (computer === "Paper") {
      return "Scissors cut paper You Win! 😊";
    } else if (computer === "Lizard") {
      return "Scissors decapitate lizard You Win! 😊";
    } else {
      return "Spock smashes scissors You Lose 😔";
    }

//LIZARD

  } else if (player=== "Lizard") {
    if (computer === "Rock") {
      return "Rock crushes lizard You Lose 😔";
    } else if (computer === "Paper") {
      return "lizard eats paper You Win! 😊";
    } else if (computer === "Scissors") {
      return "scissors decapitate lizard You Lose 😔";
    } else {
      return "lizard poisons spock You Win! 😊";
    }

//SPOCK

  } else if (player === "Spock") {
    if (computer === "Rock") {
      return "Spock vaporizes rock You Win! 😊";
    } else if (computer === "Paper") {
      return "Paper disproves spock You Lose 😔";
    } else if (computer === "Scissors") {
      return "Spock smashes scissors You Win! 😊 ";
    } else {
      return "Lizard poisons spock You Lose 😔";
    }
  }
};