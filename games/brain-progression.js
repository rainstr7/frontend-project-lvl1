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

const generateProgression = (minDiaposon, maxDiaposon) => {
  const firstElement = getRandom(minDiaposon, maxDiaposon);
  const step = getRandom(minDiaposon, maxDiaposon);
  const result = [firstElement];
  for (let i = 0; i < 9; i += 1) {
    result.push(result[i] + step);
  }
  return result;
};

const hideIndexProgression = (progression, index) => {
  const progressionWithHideEl = [...progression];
  progressionWithHideEl[index] = '..';
  return progressionWithHideEl;
};

const getCorrectAnswer = (progression, hideIndex) => progression[hideIndex];

const gameProgression = () => {
  welcomeUser();
  const [minDiaposon, maxDiaposon] = [0, 101];
  const name = introUser();
  const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  postRules(rulesGame);
  for (let i = 0; i < 3; i += 1) {
    const progression = generateProgression(minDiaposon, maxDiaposon);
    const hideIndex = getRandom(0, 10);
    postQuestion(hideIndexProgression(progression, hideIndex));
    const answerUser = getUserAnswer();
    const correctAnswer = getCorrectAnswer(progression, hideIndex);
    const resoult = isResult(answerUser, correctAnswer);
    if (!resoult) {
      return postGameOver(answerUser, correctAnswer, name);
    }
    postCorrectResoult();
  }
  postCongratulations(name);
  return true;
};

export default gameProgression;
