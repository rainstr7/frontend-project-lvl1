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

export const gameEven = () => {
  const [minDiaposon, maxDiaposon] = [0, 101];
  const name = introUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandom(minDiaposon, maxDiaposon);
    console.log(`Question: ${number}`);
    const answerUser = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(number) === true ? 'yes' : 'no';
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
