import sumArray from './func';

describe('func tests', () => {
  test('should sum the array of numbers', () => {
    const fixture = [1,2,3,4,5];
    const sum = sumArray(...fixture);

    expect(sum).toEqual(10);
  });
});