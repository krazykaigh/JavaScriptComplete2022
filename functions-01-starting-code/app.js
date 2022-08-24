/*jshint esversion: 8 */

const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS!';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS!';
let PLAYER_SELECTION = null;
let COMPUTER_SELECTION = null;

let gameIsRunning = false;

const getPlayerChoice = function() {
  const selection = prompt (`${ROCK}, ${PAPER}, or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};


const getComputerChoice = function() {
  randomChoice = Math.random();
  if (randomChoice < 0.34) {
    return ROCK;
  } else if (randomChoice < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = function(cChoice, pChoice) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if(cChoice === ROCK && pChoice === SCISSORS) {
    return RESULT_COMPUTER_WINS;
  } else if (cChoice === PAPER && pChoice === ROCK) {;
    return RESULT_COMPUTER_WINS;
  } else if (cChoice === SCISSORS && pChoice === PAPER) {;
    return RESULT_COMPUTER_WINS;
  } else {
    return 'Player Wins!';
  }
};


startGameBtn.addEventListener('click', function startGame() {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  PLAYER_SELECTION = getPlayerChoice();
  console.log(`Player chose ${PLAYER_SELECTION}`);
  COMPUTER_SELECTION = getComputerChoice();
  console.log(`Computer chose ${COMPUTER_SELECTION}`);
  console.log(getWinner(COMPUTER_SELECTION, PLAYER_SELECTION));
  gameIsRunning = false;
}); 