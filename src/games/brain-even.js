import gameEngine from '../index.js';
import getRandom from '../utils.js';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const getRound = () => {
  const number = getRandom();
  const correctAnswer = getCorrectAnswer(number);
  return {
    elements: number,
    correctAnswer,
  };
};

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const runGameEven = () => {
  gameEngine(rulesGame, getRound);
};

export default runGameEven;
