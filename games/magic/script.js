$(document).ready(function () {
  var ball = {};
  ball.listOfAnswers = ["It is certain", "Without a doubt", "Yes", "Outlook good", "You may rely on it", "Reply hazy, ask again later", "Better not tell you now", "Concentrate and ask again", "Do not count on it", "My sources say no", "Outlook not good", "Very doubtful"];

  $("#answer").hide();
  ball.answerQuestion = function (question) {
    $("#answer").fadeIn(4000);
    var randomNumber = Math.random();
    var randomNumberArray = randomNumber * this.listOfAnswers.length;
    var randomIndex = Math.floor(randomNumberArray);
    var randomAnswer = this.listOfAnswers[randomIndex];
    $("#8ball").attr("src", "answersideo.png");
    $("#answer").text(randomAnswer);
    console.log(question);
    console.log(randomAnswer);
  };

  $("#answer").hide();
  setTimeout(function () {
    var onClick = function () {
      var question = prompt("ASK A YES/NO QUESTION");
      ball.answerQuestion(question);
      $("#8ball").effect("shake");
    };

    $("#questionButton").click(onClick);
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
  }, 500);
});