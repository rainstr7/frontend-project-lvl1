import runGameEngine from '../index.js';
import getRandom from '../utils.js';

const getCalc = (number1, number2, operator) => {
  switch (operator) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default: return false;
  }
};
const operators = ['+', '-', '*'];

const getOperator = (selectIndex) => operators[selectIndex];

const description = 'What is the result of the expression?';

const getGameData = () => {
  const number1 = getRandom();
  const number2 = getRandom();
  const operator = getOperator(getRandom(0, operators.length - 1));
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(getCalc(number1, number2, operator));
  return {
    question,
    correctAnswer,
  };
};

const runGameCalc = () => runGameEngine(description, getGameData);

export default runGameCalc;
