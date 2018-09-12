import {
  RECEIVE_USERS,
  UPDATE_USER_QUESTIONS,
  UPDATE_USER_ANSWERS
} from './actionTypes'

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export const updateUserAnswers =(user, qid, option) => {
  return {
    type: UPDATE_USER_ANSWERS,
    user,
    qid,
    option
  }
}

export const updateUserQuestions = (question) => {
  return {
    type: UPDATE_USER_QUESTIONS,
    question
  }
}