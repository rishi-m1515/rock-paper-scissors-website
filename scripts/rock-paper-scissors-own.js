let playerRock = document.querySelector('.player-rock');
let playerPaper = document.querySelector('.player-paper');
let playerScissors = document.querySelector('.player-scissors');
let compRock = document.querySelector('.comp-rock');
let compPaper = document.querySelector('.comp-paper');
let compScissors = document.querySelector('.comp-scissors');
let resultEl = document.querySelector('.result');
let playerScoreEl = document.querySelector('.player-score');
let compScoreEl = document.querySelector('.computer-score');

let playerSelection = '';
let computerSelection = '';
let selectedColor = 'rgb(177, 51, 255)';
let unselectedColor = 'rgba(2, 51, 55, 0.199)'
let playerScore = 0;
let compScore = 0;

playerRock.addEventListener('click', () => {
  selectOption('player-rock');
  playerSelection = 'rock';
  declareResult();
});
playerPaper.addEventListener('click', () => {
  selectOption('player-paper');
  playerSelection = 'paper';
  declareResult();
});
playerScissors.addEventListener('click', () => {
  selectOption('player-scissors');
  playerSelection = 'scissors';
  declareResult();
});

function declareResult() {
  let result = playGame();

  if (result === 'win') {
    resultEl.innerHTML = 'YOU WIN!';
    resultEl.style.backgroundColor = 'rgb(0,255,0)';
    playerScore++;
    playerScoreEl.innerHTML = playerScore;
  } else if (result === 'lose') {
    resultEl.innerHTML = 'YOU LOSE!'
    resultEl.style.backgroundColor = 'rgb(230, 49, 49)';
    compScore++;
    compScoreEl.innerHTML = compScore;
  } else if (result === 'tie') {
    resultEl.innerHTML = 'TIE!';
    resultEl.style.backgroundColor = 'rgb(255, 128, 0)';
  }
  playerRock.disabled = true;
  playerPaper.disabled = true;
  playerScissors.disabled = true;
  setTimeout(() => {
    resetAll();
    playerRock.disabled = false;
    playerPaper.disabled = false;
    playerScissors.disabled = false;
  }, 1000);
}

function playGame() {
  selectComputerOption();
  if (playerSelection === computerSelection) {
    return 'tie';
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      return 'win';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return 'win';
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      return 'win';
    }
  }
  return 'lose';
}

function selectComputerOption() {
  let choice = Math.floor(Math.random()*3 + 1);
  let optionArr = ['rock', 'paper', 'scissors'];
  setTimeout(selectOption('computer-' + optionArr[(choice-1)]), 1000);
  computerSelection = optionArr[choice-1];
}

function selectOption(option) {
  if (option === 'player-rock') {
    playerRock.style.backgroundColor = selectedColor;
    playerPaper.style.backgroundColor = unselectedColor;
    playerScissors.style.backgroundColor = unselectedColor;
  } else if (option === 'player-paper') {
    playerRock.style.backgroundColor = unselectedColor;
    playerPaper.style.backgroundColor = selectedColor;
    playerScissors.style.backgroundColor = unselectedColor;
  } else if (option === 'player-scissors') {
    playerRock.style.backgroundColor = unselectedColor;
    playerPaper.style.backgroundColor = unselectedColor;
    playerScissors.style.backgroundColor = selectedColor;
  }

  else if (option === 'computer-rock') {
    compRock.style.backgroundColor = selectedColor;
    compPaper.style.backgroundColor = unselectedColor;
    compScissors.style.backgroundColor = unselectedColor;
  } else if (option === 'computer-paper') {
    compRock.style.backgroundColor = unselectedColor;
    compPaper.style.backgroundColor = selectedColor;
    compScissors.style.backgroundColor = unselectedColor;
  } else if (option === 'computer-scissors') {
    compRock.style.backgroundColor = unselectedColor;
    compPaper.style.backgroundColor = unselectedColor;
    compScissors.style.backgroundColor = selectedColor;
  }
}

function resetAll() {
  playerSelection = '';
  computerSelection = '';
  resultEl.innerHTML = 'PICK MOVE';
  resultEl.style.backgroundColor = 'rgb(86, 86, 86)';

  playerRock.style.backgroundColor = unselectedColor;
  playerPaper.style.backgroundColor = unselectedColor;
  playerScissors.style.backgroundColor = unselectedColor;

  compRock.style.backgroundColor = unselectedColor;
  compPaper.style.backgroundColor = unselectedColor;
  compScissors.style.backgroundColor = unselectedColor;
}