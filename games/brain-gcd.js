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
} from '../src/index.js';

const getCorrectAnswer = (number1, number2) => {
  let gcd = 1;
  for (let i = 1; i <= number1 && i <= number2; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const gameGcd = () => {
  welcomeUser();
  const [minDiaposon, maxDiaposon] = [0, 101];
  const name = introUser();
  const rulesGame = 'Find the greatest common divisor of given numbers.';
  postRules(rulesGame);
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandom(minDiaposon, maxDiaposon);
    const number2 = getRandom(minDiaposon, maxDiaposon);
    postQuestion(number1, number2);
    const answerUser = getUserAnswer();
    const correctAnswer = getCorrectAnswer(number1, number2);
    const resoult = isResult(answerUser, correctAnswer);
    if (!resoult) {
      return postGameOver(answerUser, correctAnswer, name);
    }
    postCorrectResoult();
  }
  postCongratulations(name);
  return true;
};

export default gameGcd;
