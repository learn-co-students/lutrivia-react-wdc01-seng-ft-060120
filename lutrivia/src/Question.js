import React from 'react'

const Question = (props) => {

    const { text, index, answer } = props.question
    const disabledCheck = props.answeredQuestions.map(q => {return q.index}).includes(index) ? true : false
    let color1
    let color2

    if ( disabledCheck) {
        const userAnswer = props.answeredQuestions.find(question => question.index === index).answer
        if (userAnswer === answer) {
            color1 = 'green'
        } else if (userAnswer !== answer) {
            color2 = 'red'
        }
    }


    return (
        <div>
            <h4>{text}</h4>

            <button 
                style={{backgroundColor: color1 }}
                disabled={disabledCheck}
                onClick={(event) => {props.checkAnswer(true, props.question, event)}}
                >
                    True
            </button>

            <button 
                style={{backgroundColor: color2 }}
                disabled={disabledCheck}
                onClick={(event) => {props.checkAnswer(false, props.question, event)}}
                >
                    False
            </button>
        </div>
    )
}

export default Question