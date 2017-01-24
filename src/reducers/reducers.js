import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import isFetching from './isFetching';
import keyword from './keyword';
import result from './searchResult';
import detail from './userDetail';
import readme from './readme';

export default combineReducers({
  isFetching,
  keyword,
  result,
  detail,
  readme,
  routing: routerReducer,
});

