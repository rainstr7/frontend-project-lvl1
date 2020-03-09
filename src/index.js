import readlineSync from 'readline-sync';

export const welcomeUser = () => {
  console.log('Welcome to the Brain Games!\n');
};

export const introUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
const isEven = (number) => (number % 2 === 0 ? true : false);

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isResoutGame = (answer, correctAnswer) => (answer === correctAnswer ? true : false);

const generateSign = (number) => {
  switch (number) {
    case 0: return '+';
    case 1: return '-';
    case 2: return '*';
    default: return false;
  }
};

const generateTrueAnswer = (number1, number2, sign) => {
  switch (sign) {
    case '+': return String(number1 + number2);
    case '-': return String(number1 - number2);
    case '*': return String(number1 * number2);
    default: return false;
  }
};

export const gameEven = () => {
  welcomeUser();
  const [minDiaposon, maxDiaposon] = [0, 101];
  const name = introUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandom(minDiaposon, maxDiaposon);
    console.log(`Question: ${number}`);
    const answerUser = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(number) === true ? 'yes' : 'no';
    const resoult = isResoutGame(answerUser.toLowerCase(), correctAnswer);
    if (!resoult) {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${correctAnswer}".
Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

export const gameCalc = () => {
  welcomeUser();
  const [minDiaposon, maxDiaposon] = [0, 101];
  const name = introUser();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandom(minDiaposon, maxDiaposon);
    const number2 = getRandom(minDiaposon, maxDiaposon);
    const sign = generateSign(getRandom(0, 3));
    console.log(`Question: ${number1} ${sign} ${number2}`);
    const answerUser = readlineSync.question('Your answer: ');
    const correctAnswer = generateTrueAnswer(number1, number2, sign);
    const resoult = isResoutGame(answerUser, correctAnswer);
    if (!resoult) {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${correctAnswer}".
Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
const generateTrueAnswer2 = (number1, number2) => {
  let gcd = 1;
  for (let i = 1; i <= number1 && i <= number2; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      gcd = i;
    }
  }
  return String(gcd);
};

export const gameGcd = () => {
  welcomeUser();
  const [minDiaposon, maxDiaposon] = [0, 101];
  const name = introUser();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandom(minDiaposon, maxDiaposon);
    const number2 = getRandom(minDiaposon, maxDiaposon);
    console.log(`Question: ${number1} ${number2}`);
    const answerUser = readlineSync.question('Your answer: ');
    const correctAnswer = generateTrueAnswer2(number1, number2);
    const resoult = isResoutGame(answerUser, correctAnswer);
    if (!resoult) {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${correctAnswer}".
Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
const generateProgression = () => {
  const firstElement = getRandom(0, 100);
  const step = getRandom(0, 100);
  const result = [firstElement];
  for (let i = 0; i < 9; i += 1) {
    result.push(result[i] + step);
  }
  return result;
};

const hideIndexProgression = (progression, index) => {
  const progressionWithHideEl = [...progression];
  progressionWithHideEl[index] = '..';
  return progressionWithHideEl;
};

export const gameProgression = () => {
  welcomeUser();
  const name = introUser();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const progression = generateProgression();
    const hideIndex = getRandom(0, 10);
    console.log(`Question: ${hideIndexProgression(progression, hideIndex)}`);
    const answerUser = readlineSync.question('Your answer: ');
    const correctAnswer = String(progression[hideIndex]);
    const resoult = isResoutGame(answerUser, correctAnswer);
    if (!resoult) {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${correctAnswer}".
Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
