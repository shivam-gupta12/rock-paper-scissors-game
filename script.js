var userScore = 0;
var compScore = 0;

var choices = document.querySelectorAll(".button-img");
var user_score = document.querySelector("#user-score");
var comp_score = document.querySelector("#comp-score");
var message = document.querySelector("#msg");

var genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
  
var drawGame = () => {
    message.innerText = "Game was Draw. Play again.";
    message.style.backgroundColor = "#081b31";
    message.style.color = "white"
};

var showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        user_score.innerText = userScore;
        message.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    } else {
        compScore++;
        comp_score.innerText = compScore;
        message.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
    }
};

var playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();
  
    if (userChoice === compChoice) {
      //Draw Game
      drawGame();
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
      } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
  };

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });
