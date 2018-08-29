import React, { Component } from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAddQuestion }  from '../../actions/shared'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import './style.css'


class NewQuestion extends Component {
  state={
    questionOne: '',
    questionTwo: ''
  }

  questionInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    const {questionOne, questionTwo} = this.state
    const { onSubmitQuestion, history } = this.props
    onSubmitQuestion(questionOne, questionTwo)
    this.setState({
      questionOne: '',
      questionTwo: ''
    })
    return history.push('/')
  }

  render() {
    return (
      <div className='new-question-container'>
        <h1>Add A New Question!</h1>
        <div className="new-question">
          <Paper className='new-question-card'>
            <h3>Would You Rather:</h3>
            <Input
              value={this.state.questionOne}
              name='questionOne'
              placeholder='Question One'
              onChange={this.questionInputChange}
              inputProps={{
                'aria-label': 'Question One',
              }}
            />
            <h5>OR</h5>
            <Input
              value={this.state.questionTwo}
              name='questionTwo'
              placeholder='Question Two'
              onChange={this.questionInputChange}
              inputProps={{
                'aria-label': 'Question Two',
              }}
            />
            <Button
              variant='contained'
              color='primary'
              disabled={this.state.questionOne === '' || this.state.questionTwo === ''}
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </Paper>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({authedUser}) => {
  return {
    authedUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitQuestion: (questionOne, questionTwo) => dispatch(handleAddQuestion(questionOne, questionTwo))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewQuestion))