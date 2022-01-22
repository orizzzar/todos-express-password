const arraySum = require('../arrays').arraySum;

describe('Testing array utils', () => {
  test('Testing arraySum() with zero values', () => {
    expect(arraySum([]))
      .toEqual(0);
  });

  test('Testing arraySum() with one value', () => {
    expect(arraySum([10]))
      .toEqual(10);
  });

  test('Testing arraySum() with multiple values', () => {
    expect(arraySum([10, 20, 30, 5]))
      .toEqual(10 + 20 + 30 + 5);
  });
})

