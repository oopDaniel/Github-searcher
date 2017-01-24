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

export function* fetchUserDetail(id) {
  try {
    const response = yield call(api.getUserDetail, id);
    yield put( actions.fetchUserDetailSucceeded(response) );
  } catch (error) {
    yield put( actions.fetchUserDetailFailed(error) );
  }
}

export function* fetchRepos(id) {
  try {
    const response = yield call(api.getRepos, id);
    yield put( actions.fetchReposSucceeded(response) );
  } catch (error) {
    yield put( actions.fetchReposFailed(error) );
  }
}

export function* fetchReadme(id, repo) {
  try {
    const response = yield call(api.getReadme, id, repo);
    yield put( actions.fetchReadmeSucceeded(response) );
  } catch (error) {
    yield put( actions.fetchReadmeFailed(error) );
  }
}

export function* watchFetchUser() {
  while (true) {
    const { target } = yield take(types.FETCH_USER_REQUEST);
    yield fork(fetchUser, target);
  }
}

export function* watchFetchUserDetail() {
  while (true) {
    const { target } = yield take(types.FETCH_USER_DETAIL_REQUEST);
    yield fork(fetchUserDetail, target);
    yield fork(fetchRepos, target);
  }
}

export function* watchFetchReadme() {
  while (true) {
    const { user, repo } = yield take(types.FETCH_README_REQUEST);
    yield fork(fetchReadme, user, repo);
  }
}

export default function* rootSaga() {
  yield fork(watchFetchUser);
  yield fork(watchFetchUserDetail);
  yield fork(watchFetchReadme);
}
