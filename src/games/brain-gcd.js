import gameEngine from '../index.js';
import getRandom from '../utils.js';

const getCorrectAnswer = (number1, number2) => {
  let [x, y] = [number1, number2];
  while (y !== 0) y = x % (x = y);
  return x;
};

const rulesGame = 'Find the greatest common divisor of given numbers.';

const getRound = () => {
  const number1 = getRandom();
  const number2 = getRandom();
  const correctAnswer = `${getCorrectAnswer(number1, number2)}`;
  return {
    elements: [number1, number2],
    correctAnswer,
  };
};

const runGameGcd = () => gameEngine(rulesGame, getRound);

export default runGameGcd;
