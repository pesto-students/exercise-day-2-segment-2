import getName from '../src/getName';

describe('throwError test', () => {
  test('should return string with given name', () => {
    const actual = getName('Ramu Garrix');
    const expected = /Ramu/;
    expect(actual).toMatch(expected);
  });

  test('should throw error if argument is not a string', () => {
    const expected = 'name should be of type string';
    expect(() => getName(123)).toThrow(expected);
  });
});
