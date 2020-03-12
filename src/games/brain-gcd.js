import gameEngine from '../index.js';
import getRandom from '../utils.js';

const getCorrectAnswer = (number1, number2) => {
  let gcd = 1;
  for (let i = 1; i <= number1 && i <= number2; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};
const runGameGcd = () => {
  const rulesGame = 'Find the greatest common divisor of given numbers.';
  const getRound = () => {
    const number1 = getRandom();
    const number2 = getRandom();
    const correctAnswer = getCorrectAnswer(number1, number2);
    return {
      elements: [number1, number2],
      answer: correctAnswer,
    };
  };
  gameEngine(rulesGame, getRound);
};

export default runGameGcd;
