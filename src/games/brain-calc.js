import gameEngine from '../index.js';
import getRandom from '../utils.js';

const getCorrectAnswer = (number1, number2, sign) => {
  switch (sign) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default: return false;
  }
};

const generateSign = (number) => {
  switch (number) {
    case 0: return '+';
    case 1: return '-';
    case 2: return '*';
    default: return false;
  }
};

const runGameCalc = () => {
  const rulesGame = 'What is the result of the expression?';
  const getRound = () => {
    const number1 = getRandom();
    const number2 = getRandom();
    const sign = generateSign(getRandom(0, 3));
    const correctAnswer = getCorrectAnswer(number1, number2, sign);
    return {
      elements: [number1, sign, number2],
      answer: correctAnswer,
    };
  };
  gameEngine(rulesGame, getRound);
};

export default runGameCalc;
