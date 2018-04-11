/**
 * Pass the test below and then complete 100% coverage 
 */

import Stack from '../src/stack';

describe('stack test', () => {
  let myStack;
  beforeEach(() => {
    myStack = new Stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
  });

  test('should push elements to stack in order', () => {
    const actual = myStack.items;
    const expected = [3, 2, 1];

    expect(actual).toEqual(expected);
  });

});
