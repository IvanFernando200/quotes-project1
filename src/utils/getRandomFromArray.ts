const getRandomArray = (arr: any) => {
  const indexRandom = Math.floor(Math.random() * arr.length);
  return arr[indexRandom];
};

export default getRandomArray;
