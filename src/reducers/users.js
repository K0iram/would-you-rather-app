import {
  RECEIVE_USERS,
  UPDATE_USER_ANSWERS,
  UPDATE_USER_QUESTIONS
} from '../actions/actionTypes'


const users = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
      case UPDATE_USER_ANSWERS:
        return {
          ...state,
          [action.user]: {
            ...state[action.user],
            answers: {
              ...state[action.user].answers,
              [action.qid]: action.option
            }
          }
        }
        case UPDATE_USER_QUESTIONS:
          return {
            ...state,
            [action.question.author]: {
              ...state[action.question.author],
              questions: [...state[action.question.author].questions, action.question.id]
            }
          }
    default :
      return state
  }
}

export default users
