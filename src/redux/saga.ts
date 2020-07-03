import { all, call, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '@/redux/actions';
import Router from 'next/router';
import { toast } from 'react-toastify';

import * as authService from '@/pages/api/auth';
import { setToken, removeToken } from '@/utils/helpers';

function* login(action: any) {
  try {
    const data = yield call(authService.loginRequest, action.user);
    removeToken();
    setToken(data.data.token);
    Router.push('/');
    toast.success('Login Success!');
  } catch (err) {
    // yield put(failure(err))
    toast.error('Logout Error!');
  }
}

function* logout() {
  try {
    removeToken();
    Router.push('/auth');
    toast.success('Logout Success!');
  } catch (err) {
    // yield put(failure(err))
    toast.error('Logout Error!');
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.AUTH_LOGIN_REQUEST, login), takeLatest(actionTypes.AUTH_LOGOUT_REQUEST, logout)]);
}

export default rootSaga;
