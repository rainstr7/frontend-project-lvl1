import runGameEngine from '../index.js';
import getRandom from '../utils.js';

const getGcd = (number1, number2) => {
  let [x, y] = [number1, number2];
  while (y !== 0) {
    y = x % (x = y);
  }
  return x;
};

const description = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const number1 = getRandom();
  const number2 = getRandom();
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGcd(number1, number2));
  return {
    question,
    correctAnswer,
  };
};

const runGameGcd = () => runGameEngine(description, getGameData);

export default runGameGcd;
