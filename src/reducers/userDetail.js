import {
  FETCH_USER_DETAIL_SUCCEEDED,
  FETCH_REPO_SUCCEEDED,
  FETCH_USER_DETAIL_FAILED,
  FETCH_REPO_FAILED,
} from './../consts/actionTypes';

function userDetail(state = {
  info: {
    data: {},
    err: '',
  },
  repo: {
    data: [],
    err: '',
  },
}, action) {
  switch (action.type) {
    case FETCH_USER_DETAIL_SUCCEEDED: {
      return {
        ...state,
        info: {
          data: action.response,
          err: '',
        },
      };
    }
    case FETCH_REPO_SUCCEEDED: {
      return {
        ...state,
        repo: {
          data: action.response,
          err: '',
        },
      };
    }
    case FETCH_USER_DETAIL_FAILED: {
      return {
        ...state,
        info: {
          data: {},
          err: action.error,
        },
      };
    }
    case FETCH_REPO_FAILED: {
      return {
        ...state,
        repo: {
          data: [],
          err: action.error,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export default userDetail;
