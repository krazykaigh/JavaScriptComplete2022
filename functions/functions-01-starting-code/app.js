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

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, '').toUpperCase();
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


const getComputerChoice = () => {
  randomChoice = Math.random();
  if (randomChoice < 0.34) {
    return ROCK;
  } else if (randomChoice < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice ? RESULT_DRAW :
  (cChoice === ROCK && pChoice === PAPER) ||
  (cChoice === PAPER && pChoice === SCISSORS) ||
  (cChoice === SCISSORS && pChoice === ROCK) ?
  RESULT_PLAYER_WINS :
  RESULT_COMPUTER_WINS;

// const getWinner = (cChoice, pChoice) => {
//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if(cChoice === ROCK && pChoice === SCISSORS) {
//     return RESULT_COMPUTER_WINS;
//   } else if (cChoice === PAPER && pChoice === ROCK) {;
//     return RESULT_COMPUTER_WINS;
//   } else if (cChoice === SCISSORS && pChoice === PAPER) {;
//     return RESULT_COMPUTER_WINS;
//   } else {
//     return 'Player Wins!';
//   }
// };


startGameBtn.addEventListener('click', () => {
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


// not related to game

const sumUp = (CBFunction, ...numbers) => { //spread operator in parameter list.
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  CBFunction(sum);
};

const showResult = (result) => {
  alert('The result after adding all numbers is ' + result);
}

console.log(sumUp(showResult, 1, 12, 154, 3, -2));
console.log(sumUp(showResult, 1, 12, 154, 3, -23, 233, 122, 32));
