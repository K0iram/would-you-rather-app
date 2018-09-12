import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ANSWER_QUESTION
} from './actionTypes'


export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question
  }
}

export const saveAnswer = (user, qid, option) =>{
  return {
    type: ANSWER_QUESTION,
    user,
    qid,
    option
  }
}


