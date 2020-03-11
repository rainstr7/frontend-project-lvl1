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

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = (number) => (isPrime(number) === true ? 'yes' : 'no');

const runGamePrime = () => {
  welcomeUser();
  const [minDiaposon, maxDiaposon] = [0, 101];
  const name = introUser();
  const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  postRules(rulesGame);
  for (let i = 0; i < 3; i += 1) {
    const number = getRandom(minDiaposon, maxDiaposon);
    postQuestion(number);
    const answerUser = getUserAnswer();
    const correctAnswer = getCorrectAnswer(number);
    const resoult = isResult(answerUser, correctAnswer);
    if (!resoult) {
      return postGameOver(answerUser, correctAnswer, name);
    }
    postCorrectResoult();
  }
  postCongratulations(name);
  return true;
};

export default runGamePrime;
