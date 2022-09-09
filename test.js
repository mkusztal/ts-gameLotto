const arr = [];

const randomNewNumber = () => {
  return Math.floor(Math.random() * 49) + 1;
};

do {
  const randomValue = randomNewNumber();
  arr.push(randomValue);
} while (arr.length < 6);

console.log(arr);
