import { everyNth } from '../src/everyNth';

describe('everyNth test', () => {
  test('should get every nth character in given string', () => {
    const actual = everyNth('iLoveJavaScript', 3);
    const expected = 'ivaSi';

    expect(actual).toEqual(expected);
  });
});
