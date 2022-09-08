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
  let numberInput: number = +text;

  if (numberInput >= 1 && numberInput <= 49) {
    return true;
  }

  return false;
};

const randomNewNumber = (): number => {
  return Math.floor(Math.random() * 49 + 1);
};

const countNumbers = (): number => {
  let number: number = 0;

  for (let i = 0; randomNumbers.length; i++) {
    number++;
  }

  return number;
};

const validateRandomNumber = (number: number): boolean => {
  if (number >= 1 && number <= 49) {
    return true;
  }
  return false;
};

const printResult = (): void => {
  console.log(`You have ${countNumbers()} correct numbers`);
};

startApp();
