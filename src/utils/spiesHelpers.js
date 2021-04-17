import { pluralize } from 'numeralize-ru';

export const getSpiesCountArray = (playersCount) => {
  if (playersCount <= 4) {
    return [1];
  }

  const spiesCount = Math.ceil(playersCount / 2 - 1);

  const array = new Array(spiesCount).fill(null);

  return array.map((_, i) => i + 1);
};

export const generateSpiesCount = (playersCount, spiesCount) => {
  const result = [];

  do {
    // 1 сгенерировать случ число от ПК до СК
    const randomNumber = Math.floor(Math.random() * playersCount) + 1;

    // 2 если этого числа нет в ресулт, то добавить
    if (result.indexOf(randomNumber) === -1) {
      result.push(randomNumber);
    }
  } while (result.length < spiesCount);

  return result;
};

const getWordsByCategory = (words, ids) =>
  words.filter((item) => ids.indexOf(item.categoryId) !== -1);

export const getRandomWordByCategories = (words, ids) => {
  const wordsList = getWordsByCategory(words, ids);

  return wordsList[Math.floor(Math.random() * wordsList.length)].name;
};

export const countPlayers = (count) =>
  pluralize(count, 'игрок', 'игрока', 'игроков');

export const countSpies = (count) =>
  pluralize(count, 'шпион', 'шпиона', 'шпионов');

export const timeCount = (count) =>
  pluralize(count, 'минута', 'минуты', 'минут');
