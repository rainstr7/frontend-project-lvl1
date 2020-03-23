import runGameEngine from '../index.js';
import getRandom from '../utils.js';

const progressionLength = 10;

const getArithmeticProgression = (firstElement, step) => {
  const arithmeticProgression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    arithmeticProgression.push(firstElement + i * step);
  }
  return arithmeticProgression;
};

const description = 'What number is missing in the progression?';


const getGameData = () => {
  const firstElement = getRandom();
  const step = getRandom();
  const progression = getArithmeticProgression(firstElement, step);
  const hiddenMemberIndex = getRandom(0, progressionLength - 1);
  const correctAnswer = String(progression[hiddenMemberIndex]);
  progression[hiddenMemberIndex] = '..';
  const question = progression.join(' ');
  return {
    question,
    correctAnswer,
  };
};

const runGameEven = () => runGameEngine(description, getGameData);

export default runGameEven;
