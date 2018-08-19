export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export const setAuthedUser = (user) => {
  return {
    type: SET_AUTHED_USER,
    user
  }
}

export const handleSetAuthedUser = (id) => {
  return (dispatch, getState) => {
    const { users } = getState()
    dispatch(setAuthedUser(users[id]))
  }
}