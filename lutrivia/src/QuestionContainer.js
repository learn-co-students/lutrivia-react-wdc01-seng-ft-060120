import React from 'react'
import Question from './Question'
import SubmitForm from './SubmitForm'

const QuestionContainer = props => {

  function renderQuestions() {
    // alert('enters funciton')
    // <Question />
    return props.questionList.slice( 0, 4 ).map( ( q, idx ) => 
      <Question
        key={idx}
        question={q}
      />
    )
  }

  return (
    <div>
      {renderQuestions()}
      <SubmitForm />
    </div>
  )
}

export default QuestionContainer
