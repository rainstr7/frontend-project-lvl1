import runGameEngine from '../index.js';
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

const description = 'What number is missing in the progression?';

const getGameData = () => {
  const progression = getArithmeticProgression([getRandom()], getRandom());
  const numberHideIndex = getRandom(0, 9);
  const hideIndexProgression = getHideIndexProgression(progression, numberHideIndex);
  const question = hideIndexProgression.join(' ');
  const correctAnswer = String(progression[numberHideIndex]);
  return {
    question,
    correctAnswer,
  };
};

const runGameEven = () => runGameEngine(description, getGameData);

export default runGameEven;
