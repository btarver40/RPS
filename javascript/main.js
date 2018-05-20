var rps = ["Rock", "Paper", "Scissors"];
var results = document.getElementById("results")
var choices = document.getElementById("choices")
var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissors = document.getElementById("scissors")
var win = 0
var lose = 0




rock.addEventListener('click',function(){
  // results.innerHTML = ""
  // choices.innerHTML = ""
  console.log("it worked")
  var random = rps[Math.floor(Math.random()*rps.length)]
  console.log(random)
  if (random === "Paper"){
    choices.innerHTML = "Computer chose paper"
    results.innerHTML = "You Lose"
    score.innerHTML = win ++ ,"Computer's Score" 
  } 
  else if (random === "Rock"){
    choices.innerHTML = "Computer chose rock"
    results.innerHTML = "You tied"
  }
  else {
    choices.innerHTML = "Computer chose scissors"
    results.innerHTML = "You Win"
    my_score.innerHTML = win ++ ,"Your Score" 
  }
})

paper.addEventListener('click',function(){
  console.log("paper worked")
  var random = rps[Math.floor(Math.random()*rps.length)]
  console.log(random)
  if (random === "Scissors"){
  choices.innerHTML = "Computer chose scissors"
  results.innerHTML = "You Lose Suckaa!"
  score.innerHTML = win ++ ,"Computer's Score"
  }
  else if (random === "Paper"){
    choice.innerHTML = "Computer chose paper"
    results.innerHTML = "It's a tie!"
  }
  else {
    choices.innerHTML = "Computer chose rock"
    results.innerHTML = "Winnerrrr!"
    my_score.innerHTML = win ++ ,"Your Score" 
  }
})

scissors.addEventListener('click',function(){
  console.log("scissors worked")
  var random = rps[Math.floor(Math.random()*rps.length)]
  console.log(random)
  if (random === "Rock"){
    choices.innerHTML = "Computer chose rock"
    results.innerHTML = "You Loser!"
    score.innerHTML = win ++ ,"Computer's Score"
  } 
  else if (random === "Scissors"){
    choices.innerHTML = "Computer chose scissors"
    results.innerHTML = "You tied"
  }
  else {
    choices.innerHTML = "Computer chose paper"
    results.innerHTML = "You are a winner!"
    my_score.innerHTML = win ++ ,"Your Score" 
    // score.innerHTML = results ++
  }
})



// v paper = document.getElementById("paper")



