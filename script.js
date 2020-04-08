let scoreCounter = document.getElementById("score-counter");
let result = document.getElementById("result");
const player = {
  points: 0,
  rock: document.getElementById("player-rock"),
  paper: document.getElementById("player-paper"),
  scissors: document.getElementById("player-scissors"),
  allbuttons: document.querySelectorAll(".player-button")
}
const computer = {
  points: 0,
  rock: document.getElementById("computer-rock"),
  paper: document.getElementById("computer-paper"),
  scissors: document.getElementById("computer-scissors"),
  allButtons: document.querySelectorAll(".computer-button")
}

function computerRNG() {
  let rng = Math.floor(Math.random() * 3);
  return (rng == 0) ? "Rock" :
    (rng == 1) ? "Paper" :
      (rng == 2) ? "Scissors" :
        false;
}

function compareHands(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    result.textContent = `${playerSelection} - ${computerSelection}: This round is a tie!`;
  } else if (
    playerSelection === "Rock" && computerSelection === "Scissors" ||
    playerSelection === "Paper" && computerSelection === "Rock" ||
    playerSelection === "Scissors" && computerSelection === "Paper"
  ) {
    player.points++;
    result.textContent = `${playerSelection} - ${computerSelection}: Player wins this round!`;
  } else if (
    computerSelection === "Rock" && playerSelection === "Scissors" ||
    computerSelection === "Paper" && playerSelection === "Rock" ||
    computerSelection === "Scissors" && playerSelection === "Paper"
  ) {
    computer.points++;
    result.textContent = `${playerSelection} - ${computerSelection}: Computer wins this round!`;
  } else {
    result.textContent = ``;
  }

  scoreCounter.textContent = `${player.points} - ${computer.points}`;
}

function play() {
  player.rock.addEventListener("click", function () {
    compareHands("Rock", computerRNG());
  });

  player.paper.addEventListener("click", function () {
    compareHands("Paper", computerRNG());
  });

  player.scissors.addEventListener("click", function () {
    compareHands("Scissors", computerRNG());
  });
}

play();