// user choice

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    }else {
      console.log('What game are you playing?')
    }
  };
  
  // computer choice
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return 'rock';
    }else if (randomNumber === 1) {
      return 'paper';
    }else if (randomNumber === 2) {
      return 'scissors';
    }
  }

  // determine the winner
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'Winner winner chicken dinner!';
    }
    if (userChoice === computerChoice) {
      return 'We have a tie! Try again.';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'LOOOOSSEEEERRR!';
        } else {
          return 'Winner winner chicken dinner!';
        }
    }else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'LOOOOSSEEEERRR!';
        } else {
          return 'Winner winner chicken dinner!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'LOOOOSSEEEERRR!';
        } else {
          return 'Winner winner chicken dinner!';
        }
    }
  }