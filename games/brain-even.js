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

const isEven = (number) => (number % 2 === 0 ? true : false);

const getCorrectAnswer = (number) => (isEven(number) === true ? 'yes' : 'no');

const gameEven = () => {
  welcomeUser();
  const [minDiaposon, maxDiaposon] = [0, 101];
  const name = introUser();
  const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';
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

export default gameEven;
