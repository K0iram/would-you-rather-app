import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api'
import { receiveUsers, updateUserAnswers, updateUserQuestions } from '../actions/users'
import { receiveQuestions, saveAnswer, addQuestion } from '../actions/questions'
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

export const handleAddQuestion = (questionOne, questionTwo) => {
  return (dispatch, getState) => {
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
  }
}

export const handleQuestionAnswer = (user, qid, option) => {
  return (dispatch) => {
    saveQuestionAnswer({
      authedUser: user,
      qid,
      answer: option
    })
    .then(() => dispatch(saveAnswer(user, qid, option)))
    .then(() => dispatch(updateUserAnswers(user,qid, option)))
  }
}
