import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'



import './style.css'


class QuestionPreview extends Component {

  render() {
    const { question} = this.props
    const { author, optionOne, optionTwo, date, id } = question

    return (
      <Paper className='question-preview-card pullDown'>
        <div className='question-preview-card__user'>
          <Avatar src={author.avatarURL}/>
          <ListItemText primary={author.name} secondary={moment(date).format('ll')} />
        </div>
        <div className='question-preview-card__questions pullDown'>
          <h5>Would You Rather</h5>
         <p>{`${optionOne.text} OR ${optionTwo.text}`}</p>
        </div>
        <Link to={`/question/${id}`}><Button color='primary' variant='contained'>Answer It!</Button></Link>
      </Paper>
    )
  }
}

const mapStateToProps = ({authedUser, users, questions}, { id }) => {
  const question = questions[id]

  return {
    user: users[authedUser.id],
    question: {
      id: id,
      author: users[question.author],
      optionOne: {
        text: question.optionOne.text.toUpperCase()
      },
      optionTwo: {
        text: question.optionTwo.text.toUpperCase()
      },
      date: question.timestamp
    }
  }
}

export default connect(mapStateToProps)(QuestionPreview)