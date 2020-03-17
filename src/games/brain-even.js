import runGameEngine from '../index.js';
import getRandom from '../utils.js';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const getGameData = () => {
  const number = getRandom();
  const question = String(number);
  const correctAnswer = getCorrectAnswer(number);
  return {
    question,
    correctAnswer,
  };
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runGameEven = () => {
  runGameEngine(description, getGameData);
};

export default runGameEven;
