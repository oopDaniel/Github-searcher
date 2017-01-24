import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCEEDED,
  FETCH_USER_FAILED,
  FETCH_USER_DETAIL_REQUEST,
  FETCH_USER_DETAIL_SUCCEEDED,
  FETCH_USER_DETAIL_FAILED,
  FETCH_REPOS_SUCCEEDED,
  FETCH_REPOS_FAILED,
  FETCH_README_REQUEST,
  FETCH_README_SUCCEEDED,
  FETCH_README_FAILED,
} from './../consts/actionTypes';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
    case FETCH_USER_DETAIL_REQUEST:
    case FETCH_README_REQUEST: {
      return true;
    }
    case FETCH_USER_SUCCEEDED:
    case FETCH_USER_FAILED:
    case FETCH_USER_DETAIL_SUCCEEDED:
    case FETCH_USER_DETAIL_FAILED:
    case FETCH_REPOS_SUCCEEDED:
    case FETCH_REPOS_FAILED:
    case FETCH_README_SUCCEEDED:
    case FETCH_README_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

export default isFetching;
