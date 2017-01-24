/* eslint-disable no-unused-vars, no-constant-condition,
  import/no-extraneous-dependencies, no-multi-spaces,
  padded-blocks, key-spacing */
import test from 'tape';
import userDetail from './../../src/reducers/userDetail';
import {
  FETCH_USER_DETAIL_SUCCEEDED,
  FETCH_USER_DETAIL_FAILED,
  FETCH_REPOS_SUCCEEDED,
  FETCH_REPOS_FAILED,
} from './../../src/consts/actionTypes';


test('UserDetail reducer', (assert) => {
  let msg    = 'must have correct default value for both info & repo';
  let expect = {
    info:  { data: {}, err: '' },
    repos: { data: [], err: '' },
  };
  let actual = userDetail(undefined, { type: 'I don\'t know' });

  assert.deepEqual(actual, expect, msg);


  msg    = 'must handle successful request for fetching user repo';
  expect = ['PEN', 'PINEAPPLE'];
  actual = userDetail(undefined, {
    type: FETCH_REPOS_SUCCEEDED,
    response: ['PEN', 'PINEAPPLE'],
  }).repos.data;

  assert.deepEqual(actual, expect, msg);


  msg    = 'must handle failed request for fetching user repo';
  expect = 'Something bad happened';
  actual = userDetail(undefined, {
    type: FETCH_REPOS_FAILED,
    error: 'Something bad happened',
  }).repos.err;

  assert.deepEqual(actual, expect, msg);


  msg    = 'must handle successful request for fetching user detail';
  expect = { PEN: 'PINEAPPLE' };
  actual = userDetail(undefined, {
    type: FETCH_USER_DETAIL_SUCCEEDED,
    response: { PEN: 'PINEAPPLE' },
  }).info.data;

  assert.deepEqual(actual, expect, msg);


  msg    = 'must handle failed request for fetching user detail';
  expect = 'Something even worse happened';
  actual = userDetail(undefined, {
    type: FETCH_USER_DETAIL_FAILED,
    error: 'Something even worse happened',
  }).info.err;

  assert.deepEqual(actual, expect, msg);

  assert.end();
});
