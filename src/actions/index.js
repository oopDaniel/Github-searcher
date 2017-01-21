import * as types from './../consts/actionTypes';


export function fetchUserRequest(target) {
  return {
    type: types.FETCH_USER_REQUEST,
    target,
  };
}

export function fetchUserSucceeded(response) {
  return {
    type: types.FETCH_USER_SUCCEEDED,
    response,
    receivedAt: Date.now(),
  };
}

export function fetchUserFailed(error) {
  return {
    type: types.FETCH_USER_FAILED,
    error,
    receivedAt: Date.now(),
  };
}

export function fetchUserDetailRequest(target) {
  return {
    type: types.FETCH_USER_DETAIL_REQUEST,
    target,
  };
}

export function fetchUserDetailSucceeded(response) {
  return {
    type: types.FETCH_USER_DETAIL_SUCCEEDED,
    response,
    receivedAt: Date.now(),
  };
}

export function fetchUserDetailFailed(error) {
  return {
    type: types.FETCH_USER_DETAIL_FAILED,
    error,
    receivedAt: Date.now(),
  };
}

export function fetchRepoSucceeded(response) {
  return {
    type: types.FETCH_REPO_SUCCEEDED,
    response,
    receivedAt: Date.now(),
  };
}

export function fetchRepoFailed(error) {
  return {
    type: types.FETCH_REPO_FAILED,
    error,
    receivedAt: Date.now(),
  };
}


export function changeInput(word) {
  return {
    type: types.CHANGE_INPUT,
    word,
  };
}

