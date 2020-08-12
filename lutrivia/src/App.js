import React, { Component } from 'react'
import HeadBar from './HeadBar'
import Menu from './Menu'
import QuestionContainer from './QuestionContainer'
import Data from './data'
import 'semantic-ui-css/semantic.min.css'
import { Container, Grid } from 'semantic-ui-react'

class App extends Component {
  state = {
      questionList: Data.questions
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Grid>
            <div>
              <HeadBar />
              <Menu />
              <QuestionContainer
                questionList={ this.state.questionList }
              />
            </div>
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}

export default App;
