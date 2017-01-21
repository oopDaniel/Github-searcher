/* eslint-disable no-constant-condition, space-in-parens */
import { call, fork, put, take } from 'redux-saga/effects';
import api from './../services/API';
import * as types from './../consts/actionTypes';
import * as actions from './../actions';


export function* fetchUser(id) {
  try {
    const response = yield call(api.getUser, id);
    yield put( actions.fetchUserSucceeded(response) );
  } catch (error) {
    yield put( actions.fetchUserFailed(error) );
  }
}

export function* watchFetchUser() {
  while (true) {
    const { target } = yield take(types.FETCH_USER_REQUEST);
    yield fork(fetchUser, target);
  }
}

export function* fetchUserDetail(id) {
  try {
    const response = yield call(api.getUserDetail, id);
    yield put( actions.fetchUserDetailSucceeded(response) );
  } catch (error) {
    yield put( actions.fetchUserDetailFailed(error) );
  }
}

export function* fetchRepo(id) {
  try {
    const response = yield call(api.getRepo, id);
    yield put( actions.fetchRepoSucceeded(response) );
  } catch (error) {
    yield put( actions.fetchRepoFailed(error) );
  }
}

export function* watchFetchUserDetail() {
  while (true) {
    const { target } = yield take(types.FETCH_USER_DETAIL_REQUEST);
    yield fork(fetchUserDetail, target);
    yield fork(fetchRepo, target);
  }
}

export default function* rootSaga() {
  yield fork(watchFetchUser);
  yield fork(watchFetchUserDetail);
}
