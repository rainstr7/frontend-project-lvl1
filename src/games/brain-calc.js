import runGameEngine from '../index.js';
import getRandom from '../utils.js';

const getCorrectAnswer = (number1, number2, signRound) => {
  switch (signRound) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default: return false;
  }
};
const allOperators = ['+', '-', '*'];

const getOperator = (selectIndex) => allOperators[selectIndex];

const description = 'What is the result of the expression?';

const getGameData = () => {
  const number1 = getRandom();
  const number2 = getRandom();
  const operator = getOperator(getRandom(0, allOperators.length - 1));
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(getCorrectAnswer(number1, number2, operator));
  return {
    question,
    correctAnswer,
  };
};

const runGameCalc = () => runGameEngine(description, getGameData);

export default runGameCalc;
