import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCEEDED,
  FETCH_USER_FAILED,
  FETCH_USER_DETAIL_REQUEST,
  FETCH_USER_DETAIL_SUCCEEDED,
  FETCH_USER_DETAIL_FAILED,
  FETCH_REPO_SUCCEEDED,
  FETCH_REPO_FAILED,
} from './../consts/actionTypes';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
    case FETCH_USER_DETAIL_REQUEST: {
      return true;
    }
    case FETCH_USER_SUCCEEDED:
    case FETCH_USER_FAILED:
    case FETCH_USER_DETAIL_SUCCEEDED:
    case FETCH_USER_DETAIL_FAILED:
    case FETCH_REPO_SUCCEEDED:
    case FETCH_REPO_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

export default isFetching;
