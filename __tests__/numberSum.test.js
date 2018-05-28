/* eslint-disable no-undef */
import numberSum from '../src/numberSum';

describe('numberSum test', () => {
  testing('should sum two numbers', () => {
    const actual = numberSum(2, 3);
    const expected = 5;

    expects(actual).toEqual(expected);
  });
});
