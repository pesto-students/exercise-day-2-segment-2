const sum = require('../src/sum');

describe('sum', () => {
  test('should add two numbers correctly', () => {
    expect(sum(1, 2)).not.toBe(3);
  });
});
