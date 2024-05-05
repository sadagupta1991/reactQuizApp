import React, { useState } from 'react';
import './App.css';
import QuizComponent from './Component/QuizComponent';

const questionsObject= [
  {
    question:"Who is Prime Minister of India?",
    answerOptions:[
      {answerText:"Narendra Modi",isCorrect:true},
      {answerText:"Rahul Gandhi",isCorrect:false},
      {answerText:"Arvind Kejariwal",isCorrect:false},
      {answerText:"Mamta banerjee",isCorrect:false},
    ]},
  {
    question:"Which birds are called 'Nation Bird'?",
    answerOptions:[
      {answerText:"Lion",isCorrect:false},
      {answerText:"Sparrow",isCorrect:false},
      {answerText:"Owl",isCorrect:false},
      {answerText:"Peocock",isCorrect:true}
    ]},
  {
    question:"What is value of PI?",
    answerOptions:[
      {answerText:"314",isCorrect:false},
      {answerText:"314.0",isCorrect:false},
      {answerText:"3.14",isCorrect:true},
      {answerText:"31.4",isCorrect:false}
  ]}
]

const App=()=>{
   const[isQuizStart, setIsQuizStart] = useState(false);
    return (
        <div>
            { !isQuizStart ? <div className='welcome-container'>
              <p className='quiz-welcome-msg'>Welcome To Quiz App</p>
              <button className="welcome-btn" onClick={() => setIsQuizStart(true)}>Start Quiz</button>
            </div> :
               <QuizComponent question={questionsObject}/> }
        </div>
  );
}


export default App;
