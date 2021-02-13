Fronkensteen.quiz = {}
Fronkensteen.quiz.shuffle_quiz_questions = true;
Fronkensteen.quiz.shuffle_quiz_answers = true;
Fronkensteen.quiz.correct_response = "Correct!";
Fronkensteen.quiz.incorrect_response = "Sorry, that is incorrect.";

Fronkenmark.preScripts["quiz"] = function(text,code,trusted){
  let lines = code.split("\n");
  let questions = [];
  let answers = [];
  let correct = [];
  let answerbuf = [];
  let barequestion;
  let bareanswer;
  let quiz_id = "quiz-" + Fronkensteen.no_dash_uuid();
  let result = "<div class='quiz' id='" + quiz_id + "'>\n";
  for(var i = 0; i < lines.length; i++){
      lines[i] = lines[i].trim();
  }
  for(var i = 0; i < lines.length; i++){
      if(lines[i].match(/^([0-9]+)[\)\.]/) === null){
        result = result + "Error: expecting question number at line: " + lines[i] + "</div>\n";
        return Fronkenmark.installSubstitute(result);
      }
      barequestion = lines[i].replace(/^([0-9]+)[\)\.]\s*/,"")
      questions.push(Fronkenmark.processContent(barequestion));
      answerbuf = [];
      i = i + 1;
      while((i < lines.length) && (lines[i].match(/^([a-z\*]+)[\)\.]/) !== null)){
        bareanswer = lines[i].replace(/^([a-z\*]+[\)\.]\s+)/,"");
        answerbuf.push(Fronkenmark.processContent(bareanswer));
        if(lines[i].match(/^\*/) !== null){
          correct.push(bareanswer)
        }
        i = i + 1;
      }
      answers.push(answerbuf);
      i = i - 1;
    }
    let shuffledquestions;
    if(Fronkensteen.quiz.shuffle_quiz_questions === true){
      shuffledquestions = Fronkensteen.shuffle(questions.length);
    }
    else {
      shuffledquestions = Fronkensteen.nullshuffle(questions.length);
    }
    let currentanswers;
    let currentcorrect;
    let shuffledanswers;
    let answername;
    for(var i = 0; i < questions.length; i++){
        result = result + "<div class='quizquestion' id='" + quiz_id + "-q" + (i + 1) + "'>\n" + (i + 1) + ") " + questions[shuffledquestions[i]] + "</div>\n";
        result = result + "<div class='quizanswers'>\n";
          currentanswers = answers[shuffledquestions[i]];
          currentcorrect = correct[shuffledquestions[i]];
          if(Fronkensteen.quiz.shuffle_quiz_answers === true){
            shuffledanswers = Fronkensteen.shuffle(currentanswers.length);
          }
          else {
            shuffledanswers = Fronkensteen.nullshuffle(currentanswers.length)
          }
          answername = quiz_id + "-q-" + (i+1) + "-answers";
          for(var j = 0; j < shuffledanswers.length; j++){
            result = result + "<div class='quizanswer'><input class='quizselection' type='radio' name='" + answername + "' value='"
            if(currentanswers[shuffledanswers[j]] === currentcorrect){
              result = result + "true"
            }
            else{
              result = result + "false"
            }
            result = result + "' />\n"  + currentanswers[shuffledanswers[j]] + "</div>\n"
          }
          result = result + "</div>\n"
    }

    result = result + "</div>\n"
    return Fronkenmark.installSubstitute(result);
}

BiwaScheme.define_libfunc("set-shuffle-quiz-questions!",1,1, function(ar){
    Fronkensteen.quiz.shuffle_quiz_questions = ar[0];
  });

BiwaScheme.define_libfunc("set-shuffle-quiz-answers!",1,1, function(ar){
  Fronkensteen.quiz.shuffle_quiz_answers = ar[0];
});

BiwaScheme.define_libfunc("set-quiz-incorrect-response!",1,1, function(ar){
  Fronkensteen.quiz.incorrect_response = ar[0];
});
BiwaScheme.define_libfunc("set-quiz-correct-response!",1,1, function(ar){
  Fronkensteen.quiz.correct_response = ar[0];
});

BiwaScheme.define_libfunc("get-quiz-incorrect-response",0,0, function(ar){
  return Fronkensteen.quiz.incorrect_response;
});
BiwaScheme.define_libfunc("get-quiz-correct-response",0,0, function(ar){
  return Fronkensteen.quiz.correct_response;
});
