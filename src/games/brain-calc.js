import gameEngine from '../index.js';
import getRandom from '../utils.js';

const getCorrectAnswer = (number1, number2, signRound) => {
  switch (signRound) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default: return false;
  }
};
const allSign = ['+', '-', '*'];

const getSign = (selectIndex) => allSign[selectIndex];

const rulesGame = 'What is the result of the expression?';

const getRound = () => {
  const number1 = getRandom();
  const number2 = getRandom();
  const sign = getSign(getRandom(0, allSign.length));
  const correctAnswer = `${getCorrectAnswer(number1, number2, sign)}`;
  return {
    elements: [number1, sign, number2],
    correctAnswer,
  };
};

const runGameCalc = () => gameEngine(rulesGame, getRound);

export default runGameCalc;
