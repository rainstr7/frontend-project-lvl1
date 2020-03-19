import runGameEngine from '../index.js';
import getRandom from '../utils.js';

const progressionLength = 10;

const getArithmeticProgression = (element, step) => {
  const progression = [element];
  const iterations = () => {
    if (progression.length === progressionLength) {
      return progression;
    }
    progression.push(progression[progression.length - 1] + step);
    return iterations(progression, step);
  };
  return iterations();
};

const getProgressionWithMissing = (progression, index) => progression
  .map((element, current) => (current === index ? '..' : element));

const description = 'What number is missing in the progression?';


const getGameData = () => {
  const progression = getArithmeticProgression(getRandom(), getRandom());
  const indexMissing = getRandom(0, progressionLength - 1);
  const progressionWithMissing = getProgressionWithMissing(progression, indexMissing);
  const question = progressionWithMissing.join(' ');
  const correctAnswer = String(progression[indexMissing]);
  return {
    question,
    correctAnswer,
  };
};

const runGameEven = () => runGameEngine(description, getGameData);

export default runGameEven;
