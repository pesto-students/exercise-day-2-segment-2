import factorial from '../src/factorial';

describe('factorial test', () => {
  test('should find factorial of an integer', () => {
    const actual = factorial(5);
    const expected = 120;

    expect(actual).toEqual(expected);
  });

  test('should find factorial of 0', () => {
    // delete next line and replace it with proper test
    expect(true).toEqual(false);
  });
});
