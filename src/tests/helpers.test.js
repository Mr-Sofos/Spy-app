import { getSpiesCountArray } from '../utils/spiesHelpers';

test('Проверка на работоспособность', () => {
  expect(getSpiesCountArray(3)).toBe([1]);
});
