import React from 'react'

const Question = props => {
  let { question } = props
  return (
    <div>
      <br/>
      <div>{ question.text}</div><br/>
      <button className="ui primary button">True</button>
      <button className="ui secondary button">False</button>
    </div>
  )
}

export default Question
