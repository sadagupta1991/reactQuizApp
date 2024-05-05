import React, { useState }  from "react";

const QuizComponent = (props) => {
    const[currentQuestion, setCurrentQuestion]=useState(0);
    const[showScore, setShowScore]=useState(false);
    const[score,setScore]=useState(0);

    const{ question=[] } = props;
    
    const handleAnswerButtonClick=(isCorrect)=>{
        if(isCorrect===true){
            setScore(score+1);       
        }
        const nextQuestion= currentQuestion + 1;
        if(nextQuestion <question.length){
        setCurrentQuestion(nextQuestion)
        }
        else {
        setShowScore(true);
        }
    }

    return (
        <div className="quiz-app-container">
        {showScore ? <div className="quiz-app-score"><p className="quiz-thank-you-text">Thank You!</p><p className="quiz-score-text">Your score is {score}</p></div> :
          <div className="quiz-app-question-answer-section">
            <div className="quiz-app-question-text"><span className="quiz-app-question-number">{currentQuestion +1}.</span>{question[currentQuestion].question}</div>
            <div className="quiz-app-option-section">
            {question[currentQuestion].answerOptions.map((answerOptions, index) => {
              return (
                <button className="quiz-app-option-button" key={index} onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
              )
            })}
            </div>
          </div>
        }
      </div>   
    )
}

export default QuizComponent;