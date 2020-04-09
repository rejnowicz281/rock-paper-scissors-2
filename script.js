let scoreCounter = document.getElementById("score-counter");
let result = document.getElementById("result");

const player = {
  points: 0,
  rock: document.getElementById("player-rock"),
  paper: document.getElementById("player-paper"),
  scissors: document.getElementById("player-scissors"),
  allButtons: document.querySelectorAll(".player-button")
}
const computer = {
  points: 0,
  rock: document.getElementById("computer-rock"),
  paper: document.getElementById("computer-paper"),
  scissors: document.getElementById("computer-scissors"),
  allButtons: document.querySelectorAll(".computer-button")
}

function makePlayerButtonChosen(chosenButton) {
  for (button of player.allButtons) {
    if (button.classList.contains("chosen")) {
      button.classList.remove("chosen");
    }
  }
  chosenButton.classList.add("chosen");
}

function makeComputerButtonChosen(chosenButton) {
  for (button of computer.allButtons) {
    if (button.classList.contains("chosen")) {
      button.classList.remove("chosen");
    }
  }
  chosenButton.classList.add("chosen");
}

function computerRNG() {
  let rng = Math.floor(Math.random() * 3);
  if (rng == 0) {
    makeComputerButtonChosen(computer.rock);
    return "Rock";
  } else if (rng == 1) {
    makeComputerButtonChosen(computer.paper);
    return "Paper";
  } else if (rng == 2) {
    makeComputerButtonChosen(computer.scissors);
    return "Scissors";
  }
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

  endGameAfterFiveRounds();
}

function endGameAfterFiveRounds() {
  const allChoiceButtons = document.querySelectorAll(".choice button");
  const tryAgainButton = document.getElementById("try-again-button");

  for (button of player.allButtons) {
    button.addEventListener("click", function () {
      if (player.points === 5 || computer.points === 5) {

        for (button of player.allButtons) {
          button.style.pointerEvents = "none";
        }

        for (button of allChoiceButtons) {
          if (button.classList.contains("chosen")) {
            button.classList.remove("chosen");
          }
        }

        tryAgainButton.classList.remove("hidden");

        if (player.points === 5) {
          result.textContent = `Player wins the game!`;
        } else if (computer.points === 5) {
          result.textContent = `Computer wins the game!`;
        }
      }
    });
  }

  tryAgainButton.addEventListener("click", function () {
    window.location.reload();
  });

}

function play() {
  player.rock.addEventListener("click", function () {
    makePlayerButtonChosen(this);
    compareHands("Rock", computerRNG());
  });

  player.paper.addEventListener("click", function () {
    makePlayerButtonChosen(this);
    compareHands("Paper", computerRNG());
  });

  player.scissors.addEventListener("click", function () {
    makePlayerButtonChosen(this);
    compareHands("Scissors", computerRNG());
  });
}

play();