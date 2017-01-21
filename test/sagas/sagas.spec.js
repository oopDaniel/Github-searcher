/* eslint-disable no-unused-vars, no-constant-condition,
  import/no-extraneous-dependencies, no-multi-spaces,
  padded-blocks, no-prototype-builtins */

import test from 'tape';
import { call, fork, put, take } from 'redux-saga/effects';
import * as actions from './../../src/actions';
import * as types from './../../src/consts/actionTypes';
import api from './../../src/services/API';
import {
  watchFetchUser,
  watchFetchUserDetail,
  fetchUser,
  fetchUserDetail,
  fetchRepo,
} from './../../src/sagas/sagas';


test('Watcher for fetching \'user\' request saga', (assert) => {
  const iterator = watchFetchUser();
  let msg        = 'must take every \'user\' request and call according func';
  let expect     = take(types.FETCH_USER_REQUEST);
  let actual     = iterator.next().value;

  assert.deepEqual(actual, expect, msg);


  msg      = 'must call fetchLatest with proper params';
  expect   = fork(fetchUser, 'APPLE');
  actual   = iterator.next({ target: 'APPLE' }).value;

  assert.deepEqual(actual, expect, msg);


  msg      = 'must go back to beginning of loop';
  expect   = take(types.FETCH_USER_REQUEST);
  actual   = iterator.next().value;

  assert.deepEqual(actual, expect, msg);

  assert.end();
});


test('Fetching \'user\' saga', (assert) => {

  let msg    = 'must call getUser API as the initial step';
  let mock   = 'PPAP';
  const iterator = fetchUser(mock);
  let expect = call(api.getUser, mock);
  let actual = iterator.next().value;

  assert.deepEqual(actual, expect, msg);


  msg    = 'must dispatch success after a successful API call';
  mock   = [
    { id: 'APPLEPEN', login: 'apple_pen', avatar_url: '' },
    { id: 'PINEAPPLE', login: 'pineapple', avatar_url: '' },
  ];
  const getMock = () => (mock);
  expect = put(actions.fetchUserSucceeded(mock));
  actual = iterator.next(getMock()).value;
  expect.PUT.action.receivedAt = null;
  actual.PUT.action.receivedAt = null;

  assert.deepEqual(actual, expect, msg);


  msg       = 'must dispatch failure when an error occurred';
  const err = 'Something bad happened...';
  expect = put(actions.fetchUserFailed(err));
  actual = iterator.throw(err).value;
  expect.PUT.action.receivedAt = null;
  actual.PUT.action.receivedAt = null;

  assert.deepEqual(actual, expect, msg);


  assert.ok(iterator.next().done, 'must be finished');

  assert.end();
});


test('Watcher for fetching \'userDetail\' request saga', (assert) => {
  const iterator = watchFetchUserDetail();
  let msg    = 'must take every \'userDetail\' request and call according func';
  let expect = take(types.FETCH_USER_DETAIL_REQUEST);
  let actual = iterator.next().value;

  assert.deepEqual(actual, expect, msg);


  msg    = 'must call \'fetchUserDetail\' with proper param';
  expect = fork(fetchUserDetail, 'APPLE');
  actual = iterator.next({ target: 'APPLE' }).value;

  assert.deepEqual(actual, expect, msg);


  msg    = 'must call \'fetchRepo\' with proper param';
  expect = fork(fetchRepo, 'APPLE');
  actual = iterator.next().value;

  assert.deepEqual(actual, expect, msg);


  msg      = 'must go back to beginning of loop';
  expect   = take(types.FETCH_USER_DETAIL_REQUEST);
  actual   = iterator.next().value;

  assert.deepEqual(actual, expect, msg);

  assert.end();
});


test('Fetching \'userDetail\' saga', (assert) => {

  let msg    = 'must call getUserDetail API as the initial step';
  let mock   = 'PPAP';
  const iterator = fetchUserDetail(mock);
  let expect = call(api.getUserDetail, mock);
  let actual = iterator.next().value;

  assert.deepEqual(actual, expect, msg);


  msg    = 'must dispatch success after a successful API call';
  mock   = {
    name: 'Apple',
    login: 'apple',
    avatar_url: '',
    location: 'Singapore',
    created_at: 'yesterday',
  };
  const getMock = () => (mock);
  expect = put(actions.fetchUserDetailSucceeded(mock));
  actual = iterator.next(getMock()).value;
  expect.PUT.action.receivedAt = null;
  actual.PUT.action.receivedAt = null;

  assert.deepEqual(actual, expect, msg);


  msg       = 'must dispatch failure when an error occurred';
  const err = 'Something really bad happened...';
  expect = put(actions.fetchUserDetailFailed(err));
  actual = iterator.throw(err).value;
  expect.PUT.action.receivedAt = null;
  actual.PUT.action.receivedAt = null;

  assert.deepEqual(actual, expect, msg);


  assert.ok(iterator.next().done, 'must be finished');

  assert.end();
});


test('Fetching \'repo\' saga', (assert) => {

  let msg    = 'must call getUserDetail API as the initial step';
  let mock   = 'PPAP';
  const iterator = fetchRepo(mock);
  let expect = call(api.getRepo, mock);
  let actual = iterator.next().value;

  assert.deepEqual(actual, expect, msg);


  msg    = 'must dispatch success after a successful API call';
  mock   = [
    { id: 123, name: 'applePen', description: 'my nice project' },
    { id: 456, name: 'pineApplePen', description: 'another nice project' },
  ];
  const getMock = () => (mock);
  expect = put(actions.fetchRepoSucceeded(mock));
  actual = iterator.next(getMock()).value;
  expect.PUT.action.receivedAt = null;
  actual.PUT.action.receivedAt = null;

  assert.deepEqual(actual, expect, msg);


  msg       = 'must dispatch failure when an error occurred';
  const err = 'Something extremely bad happened...';
  expect = put(actions.fetchRepoFailed(err));
  actual = iterator.throw(err).value;
  expect.PUT.action.receivedAt = null;
  actual.PUT.action.receivedAt = null;

  assert.deepEqual(actual, expect, msg);


  assert.ok(iterator.next().done, 'must be finished');

  assert.end();
});
