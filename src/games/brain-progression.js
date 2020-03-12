import gameEngine from '../index.js';
import getRandom from '../utils.js';

const getNewProgression = (length) => {
  const firstElement = getRandom();
  const step = getRandom();
  const result = [firstElement];
  for (let i = 0; i < length - 1; i += 1) {
    result.push(result[i] + step);
  }
  return result;
};

const getHideIndexProgression = (progression, index) => {
  const progressionWithHideEl = [...progression];
  progressionWithHideEl[index] = '..';
  return progressionWithHideEl;
};

const getCorrectAnswer = (progression, hideIndex) => progression[hideIndex];

const runGameEven = () => {
  const rulesGame = 'What number is missing in the progression?';
  const getRound = () => {
    const progression = getNewProgression(10);
    const numberHideIndex = getRandom(0, 10);
    const hideIndexProgression = getHideIndexProgression(progression, numberHideIndex);
    const correctAnswer = getCorrectAnswer(progression, numberHideIndex);
    return {
      elements: hideIndexProgression,
      answer: correctAnswer,
    };
  };
  gameEngine(rulesGame, getRound);
};

export default runGameEven;
