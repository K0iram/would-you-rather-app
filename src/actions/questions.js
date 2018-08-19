import { saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'


const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question
  }
}

export const handleAddQuestion = (questionOne, questionTwo) => {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestion({
      optionOneText: questionOne,
      optionTwoText: questionTwo,
      author: authedUser.id
    })
    .then((question) => dispatch(addQuestion(question)))
  }
}


export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}