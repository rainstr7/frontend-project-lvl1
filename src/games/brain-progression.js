import gameEngine from '../index.js';
import getRandom from '../utils.js';

const getArithmeticProgression = (element, step, length = 10) => {
  if (element.length === length) {
    return element;
  }
  element.push(element[element.length - 1] + step);
  return getArithmeticProgression(element, step);
};

const getHideIndexProgression = (progression, index) => progression
  .map((element, current) => (current === index ? '..' : element));

const rulesGame = 'What number is missing in the progression?';

const getRound = () => {
  const progression = getArithmeticProgression([getRandom()], getRandom());
  const numberHideIndex = getRandom(0, 10);
  const hideIndexProgression = getHideIndexProgression(progression, numberHideIndex);
  const correctAnswer = `${progression[numberHideIndex]}`;
  return {
    elements: hideIndexProgression,
    correctAnswer,
  };
};

const runGameEven = () => gameEngine(rulesGame, getRound);

export default runGameEven;
