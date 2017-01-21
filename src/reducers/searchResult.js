import { FETCH_USER_SUCCEEDED } from './../consts/actionTypes';

function searchResult(state = [], action) {
  switch (action.type) {
    case FETCH_USER_SUCCEEDED: {
      return action.response.items;
    }
    default: {
      return state;
    }
  }
}

export default searchResult;
