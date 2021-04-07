export function getSpiesCountArray (playersCount) {
  if(playersCount <= 4) {
    return [1]
  }

  const spiesCount = Math.ceil(playersCount / 2 - 1);

  const array = new Array(spiesCount).fill(null);

  return array.map((_, i) => {
    return ++i
  })
}

export function generateSpiesCount(playersCount, spiesCount) {
  let result = [];

  do {
    // 1 сгенерировать случ число от ПК до СК
    const randomNumber = Math.floor(Math.random() * playersCount) + spiesCount;

    // 2 если этого числа нет в ресулт, то добавить
    if(result.indexOf(randomNumber) === -1) {
      result.push(randomNumber)
    }

  } while(result.length < spiesCount);

  return result
}
