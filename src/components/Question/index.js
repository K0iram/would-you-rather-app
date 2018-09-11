import React from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer }  from '../../actions/shared'
import moment from 'moment'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'



import './style.css'


const Question = (props) => {

  const handleAnswer = (option) => {
    const { onSubmitAnswer, user, question } = props
    const { id, optionOne} = question
    const selectedOption = optionOne.text === option.text
      ? 'optionOne'
      : 'optionTwo'

    onSubmitAnswer(user.id, id, selectedOption)
  }

  const { question, user} = props
  const { author, optionOne, optionTwo, date, id } = question
  const hasAnsweredQuestion = user.answers.hasOwnProperty(id)

  return (
    <div>
      <Paper className='question-card pullDown'>
        <div className='question-card__user'>
          <Avatar src={author.avatarURL}/>
          <ListItemText primary={author.name} secondary={moment(date).format('ll')} />
        </div>
        {hasAnsweredQuestion ? (
          <div className='question-card__answered pullDown' id='flip' >
              <h5>Would You Rather</h5>
              <p>{optionOne.text} <strong>or</strong> {optionTwo.text}</p>
              <h5>You Answered:</h5>
              <p>{question[user.answers[id]].text}</p>
          </div>
          ) : (
          <div className='question-card__questions pullDown'>
            <h5>Would You Rather</h5>
            <Button onClick={() => handleAnswer(optionOne)} variant='outlined' color='primary'>
              {optionOne.text}
            </Button>
            <p>or</p>
            <Button onClick={() => handleAnswer(optionTwo)} variant='outlined' color='primary'>
              {optionTwo.text}
            </Button>
          </div>
          )
        }
      </Paper>
    </div>
  )
}

const mapStateToProps = ({dispatch}) => {
  return {
    dispatch
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitAnswer: (userId, qid, option) => dispatch(handleQuestionAnswer(userId, qid, option))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)