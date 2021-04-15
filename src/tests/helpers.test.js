const { getSpiesCountArray } = require('./spiesHelpers');

test('Проверка на работоспособность', () => {
  expect(getSpiesCountArray(3)).toBe([1]);
});
