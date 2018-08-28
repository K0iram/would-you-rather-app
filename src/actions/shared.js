import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api'
import { receiveUsers, updateUserAnswers, updateUserQuestions } from '../actions/users'
import { receiveQuestions, saveAnswer, addQuestion } from '../actions/questions'
import { loginUser, logoutUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const checkForUser = (dispatch) => {
  const persistedUser = window.localStorage.getItem('user') || null

  if(persistedUser) {
    dispatch(handleLoginUser(persistedUser))
  }
}

export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveQuestions(questions))
        dispatch(receiveUsers(users))
        checkForUser(dispatch)
      })
      .then(() => dispatch(hideLoading()))
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
    dispatch(showLoading())
    const { authedUser } = getState()
    return saveQuestion({
      optionOneText: questionOne,
      optionTwoText: questionTwo,
      author: authedUser.id
    })
    .then(question => {
      dispatch(addQuestion(question))
      dispatch(updateUserQuestions(question))
    })
    .finally(() => dispatch(hideLoading()))
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
