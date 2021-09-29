var readlinesync = require('readline-sync');
score=0

var userName = readlinesync.question("What's your Name? ")

console.log("Welcome", userName + " to Donovans Quiz!!")
console.log("---------------------------")
console.log("Each question carries 1 mark each, if you get 3 marks you will enter level 2")
console.log("---------------------------")
console.log("LEVEL 1")


// function 
function play(question, answer) {
  var userAnswer = readlinesync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right answer!")
    score= score + 1
  } else {
    console.log("Ooops..Wrong answer")
  
  }
  console.log("score is:", score)
  console.log("-------------")
}

// calling function

var questions = [{
  question: "where do i live? ",
  answer: "old goa"
},{
  question: "what is the name of my Dog? ",
  answer: "rambo"
},{
 question: "what is my fav drink? ",
  answer: "tea"

}]

// loop
 for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

 
// condition for next level
if (score===3)
{
  // function level 2
 function play(question, answer) 
 { 
  var userAnswer = readlinesync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right answer!")
    score= score + 1
  } else {
    console.log("Ooops..Wrong answer")
  
  }
  console.log("score is:", score)
  console.log("-------------")
 }

console.log("-----------")
console.log("CONGRATS!! You have successfully completed level 1!")
console.log("-----------")
console.log("WELCOME TO LEVEL 2")
console.log("-----------")
// calling function level 2
play("what is my middle name? ", "cain")
play("what is my girlfriends name? ", "malaika")
play("what is the name of the drumkit that I use? ", "mapex")
play("what cymbals do i use? ", "zildjian")
play("what does Donovan love the most? ", "food")

console.log("FINAL SCORE:", score)
console.log("THANK YOU AND SEE YOU AGAIN!!")

} else {
  console.log("SUCKERRRR!! Try Again for level 2")
}


// add data structure and high scores
highScores = [{
  name: "Donovan",
  score: 8
},{
  name: "Malaika",
  score: 5
}
]

// consition for high scores
for (var i=0; i< highScores.length; i++) {
  if (score > highScores[i].score) {
    console.log("CONGRATS! You beat the high score!")
    break
  } else {
    break
  }
}

// push and display high scores
highScores.push({name:userName, score: score})

console.log("-----------\nHIGH SCORES")
for (var i=0; i< highScores.length; i++) {
  console.log(highScores[i].name, ":", highScores[i].score,"\n----------");
}

console.log("PLEASE SEND SCREENSHOT OF YOUR SCORE SO THAT I CAN UPDATE THE HIGHSCORE DATABASE")

console.log("THANK YOU AND SEE YOU AGAIN FOR THE NEXT SESSION!!")