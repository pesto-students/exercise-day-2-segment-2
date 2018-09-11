const returnAString = require('../src/returnAString');

describe('returnAString', () => {
  test('should return a string', () => {
    expect(typeof returnAString()).toContain('string');
  });
});

