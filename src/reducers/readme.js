import {
  FETCH_README_SUCCEEDED,
  FETCH_README_FAILED,
  CLEAN_README,
} from './../consts/actionTypes';

function readme(state = {
  data: '',
  err: null,
}, action) {
  switch (action.type) {
    case FETCH_README_SUCCEEDED: {
      return {
        ...state,
        data: action.response.content,
      };
    }
    case FETCH_README_FAILED: {
      return {
        ...state,
        err: action.error,
      };
    }
    case CLEAN_README: {
      return {
        data: '',
        err: null,
      };
    }
    default: {
      return state;
    }
  }
}

export default readme;
