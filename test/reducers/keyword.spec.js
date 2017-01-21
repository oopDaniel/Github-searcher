/* eslint-disable no-unused-vars, no-constant-condition,
  import/no-extraneous-dependencies, no-multi-spaces,
  padded-blocks, key-spacing */
import test from 'tape';
import keyword from './../../src/reducers/keyword';
import { CHANGE_INPUT } from './../../src/consts/actionTypes';


test('Keyword reducer', (assert) => {
  let msg    = 'must be an empty string as default value';
  let expect = '';
  let actual = keyword(undefined, { type: 'I don\'t know' });

  assert.equal(actual, expect, msg);


  msg    = 'must handle changes to input';
  expect = 'APPLE';
  actual = keyword('PINE', {
    type: CHANGE_INPUT,
    word: 'APPLE',
  });

  assert.equal(actual, expect, msg);

  assert.end();
});
