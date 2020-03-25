import runGameEngine from '../index.js';
import getRandom from '../utils.js';

const progressionLength = 10;

const getProgression = (firstElement, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstElement + i * step);
  }
  return progression;
};

const description = 'What number is missing in the progression?';


const getGameData = () => {
  const firstElement = getRandom();
  const step = getRandom();
  const progression = getProgression(firstElement, step);
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
