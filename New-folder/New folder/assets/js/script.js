//Setting the timer
var timerInterval
function setTime() {
  timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = "Time:" + " " + secondsLeft;
      if (secondsLeft === 0) {
         quizOver()
      }

    }, 1000);
}

//Array with quiz questions and answers
var questions = [
  {
    q: "JavaScript is a ___ -side programming language.",
    ans: [
       "Client",
       "Server",
       "Both",
       "None",
    ],
    correct: "Both",
  },

  {
    q: "Which of the following will write the message “Hello DataFlair!” in an alert box??",
    ans: ["alertBox(“Hello DataFlair!”);", 
          "alert(Hello DataFlair!);", 
          "msgAlert(“Hello DataFlair!”);", 
          "alert(“Hello DataFlair!”);"],
    correct: "alert(“Hello DataFlair!”);",
  },
  {
    q: "Function is Used To Parse a String To Int:",
    ans: [
      "Integer.Parse",
      "Int.Parse",
      "Parse.Int",
      "None",
    ],
    correct: "Int.Parse",
  },
  {
    q: "How do you find the minimum of x and y using JavaScript?",
    ans: [
      "min(x,y);",
      "Math.min(x,y)",
      "Math.min(xy)",
      "min(xy);",
    ],
    correct: "Math.min(x,y)",
  },
  {
    q: "How do you call function named 'myFunction':",
    ans: [
      "myFunction{}",
      "myFunction[]",
      "myFunction()",
      "none of these",
    ],
    correct: "myFunction()",
  },
  {
    q: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
    ans: [
      "if(x 2)",
      "if(x = 2)",
      "if(x == 2)",
      "if(x != 2 )",
    ],
    correct: "if(x == 2)",
  },
  {
    q: "What is the correct JavaScript syntax to print “DataFlair” in the console?",
    ans: [
       "print(“DataFlair”);",
       "console.print(“DataFlair”);",
       "console.log(“DataFlair”);",
       "log.console(“DataFlair”);",
    ],
    correct: "console.log(“DataFlair”);",
  },
  {
    q: "JavaScript File Has An Extension of:",
    ans: [
       ".js",
       ".java",
       ".javascript",
       ".css",
    ],
    correct: ".js",
  },
];

console.log(questions[0]["q"]);
console.log(questions[0]["ans"][0]);
console.log(questions[0]["ans"][1]);
console.log(questions[0]["ans"][3]);
console.log(questions[0]["correct"]);

//Function to start quiz
var indexQ = 0;
var timeEl = document.querySelector(".time");
var secondsLeft = 75;
var win = 0;
var lost = 0;

  $("#start").on("click", function () {
  $("h1").text("");
  $("h2").text("");
  $("#quiz-rules").hide()
  $("#start").hide();
  

  setTime();
  nextQuestion()
});

 //When user clicks answer, then function check the answer
 //if it is correct, then it will reflect on theamount of scores in var win
 //if it is incorrect, than var lost and 10 seconds will be deducted from remaining time

function checkedAnswer() {
  console.log($(this));
  console.log($(this).text());



  if (questions[indexQ].correct == $(this).text()) {
     console.log(questions[indexQ].correct)
     console.log($(this).text())
    win++;
    console.log("Correct"+win);
    $("#result").text("CORRECT!");
  } else {
    lost++;
    console.log("You answered wrong"+ lost);
    secondsLeft = secondsLeft-10
    $("#result").text("WRONG!");
  }
  indexQ ++

  if( questions.length > indexQ){
    nextQuestion()
   } else {

    quizOver()
    secondsLeft === 0

   }
   return win
}

// Next question function

 function nextQuestion(){
     $("#quiz").empty()
 // Text content of a question
  $("<h3>").text(questions[indexQ]["q"]).appendTo("#quiz");

 // Buttons with the answers
  $("<button  class='btn btn-start qBtn'>")
    .text(questions[indexQ].ans[0])
    .appendTo("#quiz")
    .on("click", checkedAnswer);
  $("<button  class='btn btn-start qBtn'>")
    .text(questions[indexQ].ans[1])
    .appendTo("#quiz")
    .on("click", checkedAnswer);
  $("<button  class='btn btn-start qBtn'>")
    .text(questions[indexQ].ans[2])
    .appendTo("#quiz")
    .on("click", checkedAnswer);
  $("<button  class='btn btn-start qBtn'>")
    .text(questions[indexQ].ans[3])
    .appendTo("#quiz")
    .on("click", checkedAnswer);

 }


function quizOver(){
    clearInterval(timerInterval)
    $("#quiz").empty()
    $("<button id='quizOver' class='btn'>").text("QUIZ DONE").appendTo("#quiz")
    $("<p>").text("Please, click on the button to save your scores").appendTo("#quiz")
    $("#result").hide()
    $('#quizOver').on('click',function(event){
    $('#quiz').empty()
    $('<h1>').text("All Done").appendTo('#quiz')
    $('<p id="final_scores">').text('You scored '+ win + ' out of 8').appendTo('#quiz')  
    $('<div class=container style="width: 60%;">').appendTo('#quiz')
    $('<div class="input-group mb-3">  <input id =submitScores type="text" class="form-control" placeholder="Please, enter your initials"  aria-describedby="basic-addon2"> <div class="input-group-append">  <button class="btn btn-outline-secondary" type="button" id="submit">').appendTo('.container')
    $('#submit').text('Submit')
    $('#submitscores').empty()
    console.log("Scores have been submitted")
    
    var initials =$(this).parent().siblings("input").val() ;
    var key = win;
    console.log(initials);
    console.log(key)

    var newScore ={score:win,name:initials}
    var highScores = JSON.parse(localStorage.getItem("highScores")) ||[]
    highScores.push(newScore)
    localStorage.setItem("highScores",JSON.stringify(highScores))
    $(this).parent().siblings("input").val("")
  });

  }


  $('#submit').on("click",function(event){
  $('#submitscores').empty()
  console.log("Scores have been submitted")
  var initials =$(this).parent().siblings("input").val() ;
  var key = win;
  console.log(initials);
  console.log(key)

  var newScore ={score:win,name:initials}
  var highScores = JSON.parse(localStorage.getItem("highScores")) ||[]
  highScores.push(newScore)
  localStorage.setItem("highScores",JSON.stringify(highScores))
  $(this).parent().siblings("input").val("")
});
