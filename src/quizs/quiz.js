import React, { useState } from 'react';
import QuizProcess from './process';
import Option from './option';


export default function Quiz({ data }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    return (<>
        <div className="quiz-container">
            <QuizProcess number={currentQuestion} />
            {showScore ? (<>
                <div className="score-section">Your finished {score} out of {data.length}</div>
            </>) : (<>



                <div className="question_section">
                    <div>
                        <a className='question_text'>Question {currentQuestion + 1} :{data[currentQuestion].questionText}</a>
                    </div>

                    <div className="options">
                        <Option imgPath={data[currentQuestion].answerOptions[0].img} text={data[currentQuestion].answerOptions[0].answerText} />
                        <Option imgPath={data[currentQuestion].answerOptions[1].img} text={data[currentQuestion].answerOptions[1].answerText} />
                        <Option imgPath={data[currentQuestion].answerOptions[2].img} text={data[currentQuestion].answerOptions[2].answerText} />
                        <Option imgPath={data[currentQuestion].answerOptions[3].img} text={data[currentQuestion].answerOptions[3].answerText} />
                        <Option imgPath={data[currentQuestion].answerOptions[4].img} text={data[currentQuestion].answerOptions[4].answerText} />
                    </div>
                </div>


            </>)}

        </div>
    </>);
}