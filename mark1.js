var readlineSync = require('readline-sync');

var score = 0;

var questionOne = "Am I older than 25? ";
var answerOne = "yes";



function play(question, answer) {
  // input
  var userAnswer = readlineSync.question(question);

  console.log("You entered " + userAnswer);

  // processing
  if (userAnswer === answer) {
    // output
    console.log("You are right!");
    score = score + 1;
    console.log("Score is: " + score)
  } else {
    // output
    console.log("You are wrong!");
    score = score - 1;
    console.log("Score is: " + score)
  }
}

play(questionOne, answerOne)





var questionTwo = "Am I from the city Hyderabad? ";
var answerTwo = "no";
play(questionTwo, answerTwo)

var questionThree = "Is my favorite book Bhagavad Gita?";
var answerThree = "yes";
play(questionThree , answerThree)

var questionFour = "Is my favorite holiday spot Las Vegas?";
var answerFour = "no";
play(questionFour , answerFour)

var questionFive = "Is my favorite bike Hayabusa?"
var answerFive = "no";
play(questionFive , answerFive)