import gameEngine from '../index.js';
import getRandom from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = (number) => {
  if (isPrime(number)) {
    return 'yes';
  }
  return 'no';
};

const runGamePrime = () => {
  const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getRound = () => {
    const number = getRandom();
    const correctAnswer = getCorrectAnswer(number);
    return {
      elements: number,
      answer: correctAnswer,
    };
  };
  gameEngine(rulesGame, getRound);
};

export default runGamePrime;
