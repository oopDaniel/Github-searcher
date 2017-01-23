import {
  FETCH_USER_DETAIL_SUCCEEDED,
  FETCH_REPOS_SUCCEEDED,
  FETCH_USER_DETAIL_FAILED,
  FETCH_REPOS_FAILED,
} from './../consts/actionTypes';

function userDetail(state = {
  info: {
    data: {},
    err: '',
  },
  repos: {
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
    case FETCH_REPOS_SUCCEEDED: {
      return {
        ...state,
        repos: {
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
    case FETCH_REPOS_FAILED: {
      return {
        ...state,
        repos: {
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
