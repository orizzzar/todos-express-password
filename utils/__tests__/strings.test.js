const capitalize = require('../strings').capitalize;

describe('Testing string utils', () => {
  test('Testing capitalize() with an empty string', () => {
    expect(capitalize(''))
      .toEqual('');
  });

  test('Testing capitalize() with a word', () => {
    expect(capitalize('dog'))
      .toEqual('Dog');
  });

  test('Testing capitalize() with a sentence', () => {
    expect(capitalize('dog runs.'))
      .toEqual('Dog runs.');
  });
})