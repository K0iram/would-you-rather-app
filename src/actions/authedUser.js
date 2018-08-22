export const LOGIN_USER = 'LOGIN_USER'
export const LOG_OUT_USER = 'LOG_OUT_USER'

export const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    user
  }
}

export const logoutUser = () => {
  return {
    type: LOG_OUT_USER
  }
}