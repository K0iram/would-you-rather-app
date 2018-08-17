import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'

import './style.css'


class Question extends Component {

  render() {
    console.log(this.props.question)
    const { question } = this.props
    const { author, optionOne, optionTwo } = question

    return (
      <Paper className='question'>
        <div className="question__author">
          <Avatar src={author.avatarURL}/>
          <h3>{author.name}</h3>
        </div>
        <button>{optionOne.text}</button><span>{optionOne.votes.length}</span>
        <button>{optionTwo.text}</button><span>{optionTwo.votes.length}</span>
      </Paper>
    )
  }
}

const mapStateToProps = ({authedUser, users, questions}, { id }) => {
  const question = questions[id]

  return {
    authedUser,
    question: {
      id: id,
      author: users[question.author],
      optionOne: {
        votes: question.optionOne.votes,
        text: question.optionOne.text
      },
      optionTwo: {
        votes: question.optionTwo.votes,
        text: question.optionTwo.text
      }
    }
  }
}

export default connect(mapStateToProps)(Question)