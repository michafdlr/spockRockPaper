const playerScoreEl = document.getElementById('playerScore')
const playerChoiceEl = document.getElementById('playerChoice')
const computerScoreEl = document.getElementById('computerScore')
const computerChoiceEl = document.getElementById('computerChoice')
const resultText = document.getElementById('resultText')

const playerScissors = document.getElementById('playerScissors')
const playerRock = document.getElementById('playerRock')
const playerPaper = document.getElementById('playerPaper')
const playerLizard = document.getElementById('playerLizard')
const playerSpock = document.getElementById('playerSpock')

const computerScissors = document.getElementById('computerScissors')
const computerRock = document.getElementById('computerRock')
const computerPaper = document.getElementById('computerPaper')
const computerLizard = document.getElementById('computerLizard')
const computerSpock = document.getElementById('computerSpock')

const resetIcon = document.getElementById('reset-icon')
const allGameIcons = document.querySelectorAll('.far')


const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = ''
let computerScore = 0
let playerScore = 0


const resetIcons = () => {
  allGameIcons.forEach(icon => {
    icon.classList.remove('selected')
  })
}

// Player Selection
const checkResult = (playerChoice) => {
  resetIcons();
  selectRandom();
  displayComputerChoice();
  getResult(playerChoice);
}

const select = (playerChoice) => {
  checkResult(playerChoice)
  playerChoiceEl.textContent = `--- Your Choice: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`
  switch (playerChoice) {
    case 'scissors':
      playerScissors.classList.add('selected')
      break
    case 'rock':
      playerRock.classList.add('selected')
      break
    case 'lizard':
      playerLizard.classList.add('selected')
      break
    case 'spock':
      playerSpock.classList.add('selected')
      break
    case 'paper':
      playerPaper.classList.add('selected')
      break
    default:
      console.log('not implemented')
  }
}


// Computer Selection

const selectRandom = () => {
  const possible = ['scissors', 'rock', 'paper', 'lizard', 'spock']
  computerChoice = possible[Math.floor(Math.random() * possible.length)]
}

const displayComputerChoice = () => {
  computerChoiceEl.textContent = `--- Computer Choice: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`
  switch (computerChoice) {
    case 'scissors':
      computerScissors.classList.add('selected')
      break
    case 'rock':
      computerRock.classList.add('selected')
      break
    case 'lizard':
      computerLizard.classList.add('selected')
      break
    case 'spock':
      computerSpock.classList.add('selected')
      break
    case 'paper':
      computerPaper.classList.add('selected')
      break
    default:
      console.log('not implemented')
  }
}

// Display winner and points

const getResult = (playerChoice) => {
  if (choices[computerChoice].defeats.includes(playerChoice)) {
    resultText.textContent = 'Computer Won :-('
    computerScore++
    computerScoreEl.textContent = computerScore
  } else if (choices[playerChoice].defeats.includes(computerChoice)) {
    resultText.textContent = 'You Won :-)'
    playerScore++
    playerScoreEl.textContent = playerScore
  } else {
    resultText.textContent = 'Tie :-/'
  }
}

// Reset

const resetAll = () => {
  resetIcons();
  playerScore = 0;
  computerScore = 0;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  computerScoreEl.textContent = computerScore;
  playerScoreEl.textContent = playerScore;
  resultText.textContent = ''
}

resetIcon.addEventListener('click', resetAll)
