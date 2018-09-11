const fun = require('../src/returnAFunction');

describe('returnAFunction', () => {
  test('should return a Function', () => {
    expect(typeof fun).toContain('function');
  });
});
