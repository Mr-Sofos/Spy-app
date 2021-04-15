export function getSpiesCountArray(playersCount) {
  if (playersCount <= 4) {
    return [1];
  }

  const spiesCount = Math.ceil(playersCount / 2 - 1);

  const array = new Array(spiesCount).fill(null);

  return array.map((_, i) => {
    return ++i;
  });
}

export function generateSpiesCount(playersCount, spiesCount) {
  let result = [];

  do {
    // 1 сгенерировать случ число от ПК до СК
    const randomNumber = Math.floor(Math.random() * playersCount) + 1;

    // 2 если этого числа нет в ресулт, то добавить
    if (result.indexOf(randomNumber) === -1) {
      result.push(randomNumber);
    }
  } while (result.length < spiesCount);

  return result;
}

const getWordsByCategory = (words, ids) => {
  return words.filter((item) => ids.indexOf(item.categoryId) !== -1);
};

export const getRandomWordByCategory = (words, ids) => {
  const wordsList = getWordsByCategory(words, ids);

  return wordsList[Math.floor(Math.random() * wordsList.length)].name;
};
