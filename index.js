let compChoice;
function getComputerChoice() {

  const x = Math.floor(Math.random() * 3)
  
  if (x == 0) {
    compChoice = 'rock'
    return (compChoice)
    
  }
  else if (x == 1) {

    compChoice = 'paper'
    return (compChoice)
  }
  else {

    compChoice = 'scissors'
    return (compChoice)
  }
  
}

// getComputerChoice()
let resetings =document.getElementById('reset')

let reseting =document.querySelector('#reset')

const result = document.querySelector('.result');

// let rock = document.getElementById('rock')

// let paper = document.getElementById('paper')

// let scissors = document.getElementById('scissors')

let user = document.getElementById('userScore')

let comp = document.getElementById('compScore')

const squares = document.querySelectorAll('.square')

// console.log(squares)



let userChoice;

   

squares.forEach(squares => {
  squares.onclick = () => {
    userChoice = (squares.value)
    getComputerChoice()
    // console.log(compChoice)
    // console.log(userChoice)
    
    comparison(compChoice,userChoice)
  }
  
})

let playerScore =0;
let computerScore=0;
const comparison=(compChoice,userChoice)=>{
    console.log(compChoice)
    console.log(userChoice)

      if(userChoice === compChoice){
                    result.textContent = 'Tie'
                }
                else if(userChoice == 'rock'){
                    if(compChoice == 'paper'){
                        result.textContent = 'Computer Scores';
                        computerScore++;
                        compScore.innerText = computerScore;
                        winner()
        
                    }else{
                        result.textContent = 'Player Scores'
                        playerScore++;
                        userScore.innerText = playerScore;
                        winner()
                    }
                }
                else if(userChoice == 'scissors'){
                    if(compChoice == 'rock'){
                        result.textContent = 'Computer Scores';
                        computerScore++;
                        compScore.innerText= computerScore;
                        winner()
                    }else{
                        result.textContent = 'Player Scores';
                        playerScore++;
                        userScore.innerText = playerScore;
                        winner()
                    }
                }
                else if(userChoice == 'paper'){
                    if(compChoice == 'scissors'){
                        result.textContent = 'Computer Scores';
                        computerScore++;
                        compScore.innerText = computerScore;
                        winner()
                    }else{
                        result.textContent = 'Player Scores';
                        playerScore++;
                        userScore.innerText= playerScore;
                        winner()
                    }
                }
    
}   

const winner=()=>{
    if(playerScore>=5){result.textContent= '🗿 Player Wins 👑'
    setTimeout(function(){
        window.location.reload()
    }, 1000);
    
    }else if(computerScore>=5){result.textContent=' 🤖Computer Wins 👑'
    setTimeout(function(){
        window.location.reload()
    }, 1000);
}
    
}


// const endgame=()=>{
//     window.location.reload()
// }
reseting.onclick=()=>{
    window.location.reload()
}