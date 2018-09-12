import {
  LOGIN_USER,
  LOG_OUT_USER
} from './actionTypes'

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