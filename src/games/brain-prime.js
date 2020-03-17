import runGameEngine from '../index.js';
import getRandom from '../utils.js';

const isPrime = (number) => {
  const sqrtNumber = Math.sqrt(number);
  for (let i = 2; i <= sqrtNumber; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const runGamePrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getGameData = () => {
    const number = getRandom();
    const correctAnswer = `${getCorrectAnswer(number)}`;
    const question = String(number);
    return {
      question,
      correctAnswer,
    };
  };
  runGameEngine(description, getGameData);
};

export default runGamePrime;
