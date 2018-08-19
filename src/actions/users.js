export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER_ANSWERS = 'UPDATE_USER_ANSWERS'
export const UPDATE_USER_QUESTIONS = 'UPDATE_USER_QUESTIONS'

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