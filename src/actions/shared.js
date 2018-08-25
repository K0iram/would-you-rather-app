import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api'
import { receiveUsers, updateUserAnswers, updateUserQuestions } from '../actions/users'
import { receiveQuestions, saveAnswer, addQuestion } from '../actions/questions'
import { loginUser, logoutUser } from '../actions/authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'

export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

export const handleLoginUser = (id) => {
  return (dispatch, getState) => {
    const { users } = getState()
    dispatch(loginUser(users[id]))
  }
}

export const handleLogoutUser = () => {
  return (dispatch) => {
    dispatch(logoutUser(null))
  }
}

export const handleAddQuestion = (questionOne, questionTwo) => {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    return saveQuestion({
      optionOneText: questionOne,
      optionTwoText: questionTwo,
      author: authedUser.id
    })
    .then(question => {
      dispatch(addQuestion(question))
      dispatch(updateUserQuestions(question))
      dispatch(hideLoading())
    })
  }
}

export const handleQuestionAnswer = (user, qid, option) => {
  return (dispatch) => {
    dispatch(showLoading())
    saveQuestionAnswer({
      authedUser: user,
      qid,
      answer: option
    })
    .then(() => {
      dispatch(saveAnswer(user, qid, option))
      dispatch(updateUserAnswers(user,qid, option))
      dispatch(hideLoading())
    })
  }
}
