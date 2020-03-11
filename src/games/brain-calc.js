import {
  welcomeUser,
  introUser,
  postRules,
  getRandom,
  postQuestion,
  getUserAnswer,
  isResult,
  postGameOver,
  postCorrectResoult,
  postCongratulations,
} from '../index.js';

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
  welcomeUser();
  const [minDiaposon, maxDiaposon] = [0, 101];
  const name = introUser();
  const rulesGame = 'What is the result of the expression?';
  postRules(rulesGame);
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandom(minDiaposon, maxDiaposon);
    const number2 = getRandom(minDiaposon, maxDiaposon);
    const sign = generateSign(getRandom(0, 3));
    postQuestion(number1, sign, number2);
    const answerUser = getUserAnswer();
    const correctAnswer = getCorrectAnswer(number1, number2, sign);
    const resoult = isResult(answerUser, correctAnswer);
    if (!resoult) {
      return postGameOver(answerUser, correctAnswer, name);
    }
    postCorrectResoult();
  }
  postCongratulations(name);
  return true;
};

export default runGameCalc;
