import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { handleSetAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'tylermcginnis'

export const handleInitialData = () => {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(handleSetAuthedUser(AUTHED_ID))
        dispatch(receiveQuestions(questions))
      })
  }
}