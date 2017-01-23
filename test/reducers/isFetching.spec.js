/* eslint-disable no-unused-vars, no-constant-condition,
  import/no-extraneous-dependencies, no-multi-spaces,
  padded-blocks, key-spacing */
import test from 'tape';
import isFetching from './../../src/reducers/isFetching';
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCEEDED,
  FETCH_USER_FAILED,
  FETCH_USER_DETAIL_REQUEST,
  FETCH_USER_DETAIL_SUCCEEDED,
  FETCH_USER_DETAIL_FAILED,
  FETCH_REPOS_SUCCEEDED,
  FETCH_REPOS_FAILED,
} from './../../src/consts/actionTypes';


test('IsFetching reducer', (assert) => {
  let msg    = 'must be set to true for FETCH_USER_REQUEST';
  let expect = true;
  let actual = isFetching(undefined, { type: FETCH_USER_REQUEST });

  assert.equal(actual, expect, msg);


  msg    = 'must be set to true for FETCH_USER_DETAIL_REQUEST';
  expect = true;
  actual = isFetching(false, { type: FETCH_USER_DETAIL_REQUEST });

  assert.equal(actual, expect, msg);


  msg    = 'must be set to false for FETCH_USER_SUCCEEDED';
  expect = false;
  actual = isFetching(true, { type: FETCH_USER_SUCCEEDED });

  assert.equal(actual, expect, msg);


  msg    = 'must be set to false for FETCH_USER_FAILED';
  expect = false;
  actual = isFetching(true, { type: FETCH_USER_FAILED });

  assert.equal(actual, expect, msg);


  msg    = 'must be set to false for FETCH_USER_DETAIL_SUCCEEDED';
  expect = false;
  actual = isFetching(true, { type: FETCH_USER_DETAIL_SUCCEEDED });


  msg    = 'must be set to false for FETCH_USER_DETAIL_FAILED';
  expect = false;
  actual = isFetching(true, { type: FETCH_USER_DETAIL_FAILED });

  assert.equal(actual, expect, msg);


  msg    = 'must be set to false for FETCH_REPOS_SUCCEEDED';
  expect = false;
  actual = isFetching(true, { type: FETCH_REPOS_SUCCEEDED });

  assert.equal(actual, expect, msg);


  msg    = 'must be set to false for FETCH_REPOS_FAILED';
  expect = false;
  actual = isFetching(true, { type: FETCH_REPOS_FAILED });

  assert.equal(actual, expect, msg);

  assert.end();
});
