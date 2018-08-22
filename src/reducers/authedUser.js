import { LOGIN_USER, LOG_OUT_USER} from '../actions/authedUser'


const authedUser = (state = null, action) => {
  switch(action.type) {
    case LOGIN_USER :
      return action.user
    case LOG_OUT_USER :
      return null
    default :
      return state
  }
}

export default authedUser