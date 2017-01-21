import { CHANGE_INPUT } from './../consts/actionTypes';

function keyword(state = '', action) {
  switch (action.type) {
    case CHANGE_INPUT: {
      return action.word;
    }
    default: {
      return state;
    }
  }
}

export default keyword;
