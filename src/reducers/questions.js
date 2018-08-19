import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'


const questions = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
      return {
        ...state,
        [action.question.id]: action.question
      }
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.option]: {
            ...state[action.qid][action.option],
            votes: state[action.qid][action.option].votes.concat([action.user])
          }
        }
      }
    default :
      return state
  }
}

export default questions