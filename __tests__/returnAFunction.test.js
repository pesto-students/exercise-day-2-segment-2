const fun = require('../src/returnAFunction');

describe('returnAFunction', () => {
  test('should return a Function', () => {
    expect(fun).toBeInstanceOf('Function');
  });
});
