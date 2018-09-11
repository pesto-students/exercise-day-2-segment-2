const returnAString = require('../src/returnAString');

describe('returnAString', () => {
  test('should return a string', () => {
    expect(returnAString()).toContain('world');
  });
});
