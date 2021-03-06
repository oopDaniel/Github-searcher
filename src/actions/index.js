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

export function fetchReposSucceeded(response) {
  return {
    type: types.FETCH_REPOS_SUCCEEDED,
    response,
    receivedAt: Date.now(),
  };
}

export function fetchReposFailed(error) {
  return {
    type: types.FETCH_REPOS_FAILED,
    error,
    receivedAt: Date.now(),
  };
}

export function fetchReadmeRequest(user, repo) {
  return {
    type: types.FETCH_README_REQUEST,
    user,
    repo,
  };
}

export function fetchReadmeSucceeded(response) {
  return {
    type: types.FETCH_README_SUCCEEDED,
    response,
    receivedAt: Date.now(),
  };
}

export function fetchReadmeFailed(error) {
  return {
    type: types.FETCH_README_FAILED,
    error,
    receivedAt: Date.now(),
  };
}

export function cleanReadme() {
  return {
    type: types.CLEAN_README,
  };
}

export function changeInput(word) {
  return {
    type: types.CHANGE_INPUT,
    word,
  };
}

