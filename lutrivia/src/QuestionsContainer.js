import React from 'react'
import Question from './Question'

class QuestionsContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    updateStateName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <div>
                {this.props.questions.map(
                    (question) => {
                        return (
                            <Question 
                                key={question.index} 
                                question={question} 
                                checkAnswer={this.props.checkAnswer} 
                                answeredQuestions={this.props.answeredQuestions} />
                        )
                    }
                )}
                <form onSubmit>
                    <label for="name">Name</label>
                    <input for="name" type="text" value={this.state.name} onChange={this.updateStateName}></input>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default QuestionsContainer