import gameEngine from '../index.js';
import getRandom from '../utils.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getCorrectAnswer = (number) => {
  if (isEven(number)) {
    return 'yes';
  }
  return 'no';
};

const runGameEven = () => {
  const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getRound = () => {
    const number = getRandom();
    const correctAnswer = getCorrectAnswer(number);
    return {
      elements: number,
      answer: correctAnswer,
    };
  };
  gameEngine(rulesGame, getRound);
};

export default runGameEven;
