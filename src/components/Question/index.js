import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer }  from '../../actions/shared'
import moment from 'moment'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';



import './style.css'


class Question extends Component {

  handleAnswer = (option) => {
    const { dispatch, authedUser, question } = this.props
    const { id, optionOne, optionTwo } = question
    if(optionOne.text === option.text) {
      dispatch(handleQuestionAnswer(authedUser.id, id, 'optionOne'))
    } else if (optionTwo.text === option.text) {
      dispatch(handleQuestionAnswer(authedUser.id, id, 'optionTwo'))
    }
  }

  questionButton = (text, option) => {
    const { authedUser } = this.props
    const buttonVar = option.votes.includes(authedUser.id) ? "contained" : "outlined"

    return option.votes.length ? (
      <Badge color="secondary" badgeContent={option.votes.length}>
        <Button variant={buttonVar} color="primary">
          {text}
        </Button>
      </Badge>
      ) : (
      <Button onClick={() => this.handleAnswer(option)}variant={buttonVar} color="primary">
        {text}
      </Button>
      )
  }
  render() {
    const { question } = this.props
    const { author, optionOne, optionTwo, date } = question
    return (
      <div>
      <ListItem>
        <Paper className='question-card'>
          <div className='question-card__user'>
            <Avatar src={author.avatarURL}/>
            <ListItemText primary={author.name} secondary={moment(date).format('ll')} />
          </div>
          <div className="question-card__questions">
            <h5>Would You Rather</h5>
            {this.questionButton(optionOne.text, optionOne)}
            <p>or</p>
            {this.questionButton(optionTwo.text, optionTwo)}
          </div>
        </Paper>
      </ListItem>
      <Divider/>
      </div>
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
      },
      date: question.timestamp
    }
  }
}

export default connect(mapStateToProps)(Question)