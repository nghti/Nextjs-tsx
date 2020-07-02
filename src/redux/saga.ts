import { all, call, takeLatest } from 'redux-saga/effects'
import { actionTypes } from '@/redux/actions'
import Router from 'next/router'
import { toast } from 'react-toastify'

import * as authService from '@/pages/api/auth';
import { setToken, removeToken } from '@/utils/helpers'

function* login(action:any) {
  try {
    const data = yield call(authService.loginRequest, action.user)
    removeToken()
    setToken(data.data.token)
    toast.success('Login Success!')
    Router.push('/')
  } catch (err) {
    // yield put(failure(err))
    toast.error('Logout Error!')
  }
}

function* logout() {
  try {
    removeToken()
    toast.success('Logout Success!')
    Router.push('/auth')
  } catch (err) {
    // yield put(failure(err))
    toast.error('Logout Error!')
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.AUTH_LOGIN_REQUEST, login),
    takeLatest(actionTypes.AUTH_LOGOUT_REQUEST, logout),
  ])
}

export default rootSaga
