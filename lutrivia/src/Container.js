import React, {Fragment} from 'react'
import Data from './data'
import Header from './Header'
import QuestionsContainer from './QuestionsContainer'

class Container extends React.Component {

    state = {
        questions: [],
        score: 0,
        answeredQuestions: []
    }

    componentDidMount() {
        this.setState({
            questions: Data.questions.map((question, index) => {return {...question, index: index}})
        })
    }

    checkAnswer = (userAnswer, question, event) => {
        let score = this.state.score

        if (question.answer === userAnswer) {
            event.target.style.backgroundColor = 'green'
            score = score + 1
        } else {
            event.target.style.backgroundColor = 'red'
        }

        this.setState({
            score: score,
            answeredQuestions: [...this.state.answeredQuestions, {index: question.index, answer: userAnswer}]
        })
    }

    resetGame = () => {
        this.setState({
            score: 0,
            answeredQuestions: []
        })
    }

    render() {
        return (
            <Fragment>
                <Header score={this.state.score} resetGame={this.resetGame} />
                <QuestionsContainer 
                    questions={this.state.questions} 
                    checkAnswer={this.checkAnswer} 
                    answeredQuestions={this.state.answeredQuestions} />
            </Fragment>
        )
    }
}

export default Container