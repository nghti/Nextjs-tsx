export const actionTypes = {
  AUTH_LOGIN_REQUEST: 'AUTH_LOGIN_REQUEST',
  AUTH_LOGIN_SUCCESS: 'AUTH_LOGIN_SUCCESS',
  AUTH_LOGIN_FAILURE: 'AUTH_LOGIN_FAILURE',
  AUTH_LOGOUT_REQUEST: 'AUTH_LOGOUT_REQUEST',
  AUTH_LOGOUT_SUCCESS: 'AUTH_LOGOUT_SUCCESS',
  AUTH_LOGOUT_FAILURE: 'AUTH_LOGOUT_FAILURE',
}

export function loginRequest(user: any) {
  return { type: actionTypes.AUTH_LOGIN_REQUEST, user }
}

export function loginSuccess(token: any) {
  return { type: actionTypes.AUTH_LOGIN_REQUEST, token }
}

export function loginFailure(error: any) {
  return { type: actionTypes.AUTH_LOGIN_REQUEST, error }
}

export function logoutRequest() {
  return { type: actionTypes.AUTH_LOGOUT_REQUEST }
}

export function logoutSuccess() {
  return { type: actionTypes.AUTH_LOGIN_REQUEST }
}

export function logoutFailure(error: any) {
  return { type: actionTypes.AUTH_LOGIN_REQUEST, error }
}
