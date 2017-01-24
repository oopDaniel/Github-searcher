/* eslint-disable no-unused-vars, no-constant-condition,
  import/no-extraneous-dependencies, no-multi-spaces,
  padded-blocks, key-spacing */
import test from 'tape';
import readme from './../../src/reducers/readme';
import {
  FETCH_README_SUCCEEDED,
  FETCH_README_FAILED,
  CLEAN_README,
} from './../../src/consts/actionTypes';


test('Readme reducer', (assert) => {
  let msg    = 'must have proper default value';
  let expect = {
    data: '',
    err: null,
  };
  let actual = readme(undefined, { type: 'Any action' });

  assert.deepEqual(actual, expect, msg);


  msg    = 'must handle successful request for fetching readme';
  expect = { data: '# This is Markdown', err: null };
  actual = readme(undefined, {
    type: FETCH_README_SUCCEEDED,
    response: { content: '# This is Markdown' },
  });

  assert.deepEqual(actual, expect, msg);


  msg    = 'must handle failed request for fetching readme';
  expect = {
    data: '',
    err: {
      res: { status: 404 },
      message: 'too bad',
    },
  };
  actual = readme(undefined, {
    type: FETCH_README_FAILED,
    error: {
      res: { status: 404 },
      message: 'too bad',
    },
  });

  assert.deepEqual(actual, expect, msg);


  msg    = 'must take the clean up action';
  expect = {
    data: '',
    err: null,
  };
  actual = readme({
    data: 'ApplePen',
    err: null,
  }, { type: CLEAN_README });

  assert.deepEqual(actual, expect, msg);

  assert.end();
});
