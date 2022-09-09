import inquirer from 'inquirer';

const chosenNumbers: Array<number> = [];
const randomNumbers: Array<number> = [];

const startApp = async (): Promise<void> => {
  do {
    const result = await inquirer.prompt([
      {
        name: 'number',
        type: 'input',
        message: 'Podaj liczbe... ',
      },
    ]);

    if (validateInput(result.number)) {
      chosenNumbers.push(parseInt(result.number));
    }
  } while (chosenNumbers.length < 6);

  do {
    const number: number = randomNewNumber();
    if (validateRandomNumber(number)) {
      randomNumbers.push(number);
    }
  } while (randomNumbers.length < 6);

  printResult();
};

const validateInput = (text: string): boolean => {
  const numberInput = parseInt(text);

  if (
    numberInput >= 1 &&
    numberInput <= 49 &&
    !chosenNumbers.includes(numberInput)
  ) {
    return true;
  }

  return false;
};

const randomNewNumber = (): number => {
  return Math.floor(Math.random() * 49 + 1);
};

const countNumbers = (): number => {
  let number = 0;
  for (let i = 0; i < randomNumbers.length; i++) {
    if (chosenNumbers.includes(randomNumbers[i])) {
      number++;
    }
  }
  return number;
};

const validateRandomNumber = (number: number): boolean => {
  if (number >= 1 && number <= 49 && !randomNumbers.includes(number)) {
    return true;
  } else return false;
};

const printResult = (): void => {
  console.log(`You have ${countNumbers()} correct numbers`);
};

startApp();
