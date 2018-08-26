import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Question from '../Question'
import Icon from '@material-ui/core/Icon'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import { PieChart, Legend } from 'react-easy-chart'

import './style.css'


class QuestionPage extends Component {

  render() {
    const { question, authedQuestion, user, isAnswered, optionOnePercentage, optionTwoPercentage } = this.props
    const { optionOne, optionTwo } = question

    if(!authedQuestion) {
      return <Redirect to='/not_found'/>
    }

    const optOneLength = optionOne.votes.length
     const optTwoLength = optionTwo.votes.length


    const chartData = [
      {
        key: `${optionOne.text} - ${optOneLength > 1 ? `${optOneLength} votes` : `${optOneLength} vote`} - ${optionOnePercentage}%`,
        value: optionOne.votes.length,
        color: '#3f51b5'
       },
      {
        key: `${optionTwo.text} - ${optTwoLength > 1 ? `${optTwoLength} votes` : `${optTwoLength} vote`} - ${optionTwoPercentage}%`,
        value: optionTwo.votes.length,
        color: '#74c474' }
    ]

     const config = [
      {color: '#3f51b5'},
      {color: '#74c474'}
    ]

    return (
      <div className={isAnswered ? 'question-container with-results pullDown' : 'question-container'}>
        <Link to='/'>
          <div className='question-container__back'>
            <Icon><KeyboardArrowLeft/></Icon>
            <p>Back To All Questions</p>
          </div>
        </Link>
        <Question question={question} user={user}/>
        {isAnswered &&
          <div className='results'>
            <PieChart
              size={200}
              innerHoleSize={100}
              data={chartData}
            />
            <div>
              <h4>All Results:</h4>
              <Legend data={chartData} dataId={'key'} config={config}/>
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({authedUser, users, questions}, props) => {
  const { questionId } = props.match.params
  const question = questions[questionId]
  const isQuestion = Object.keys(questions).includes(questionId)
  const user = users[authedUser.id]
  const isAnswered = Object.keys(user.answers).includes(questionId)
  const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length

  return {
    authedQuestion: isQuestion,
    isAnswered,
    user: user,
    question: {
      id: questionId,
      author: users[question.author],
      optionOne: {
        votes: question.optionOne.votes,
        text: question.optionOne.text.toUpperCase()
      },
      optionTwo: {
        votes: question.optionTwo.votes,
        text: question.optionTwo.text.toUpperCase()
      },
      date: question.timestamp
    },
    optionOnePercentage: Math.floor((question.optionOne.votes.length / totalVotes) * 100),
    optionTwoPercentage: Math.floor((question.optionTwo.votes.length / totalVotes) * 100)
  }
}

export default connect(mapStateToProps)(QuestionPage)