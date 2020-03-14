import gameEngine from '../index.js';
import getRandom from '../utils.js';

const isPrime = (number) => {
  const sqrtNumber = Math.sqrt(number);
  for(let i = 2; i <= sqrtNumber; i++)
    if(number % i === 0) {
      return false;
    } 
  return number > 1;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const runGamePrime = () => {
  const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getRound = () => {
    const number = getRandom();
    const correctAnswer = `${getCorrectAnswer(number)}`;
    return {
      elements: number,
      correctAnswer,
    };
  };
  gameEngine(rulesGame, getRound);
};

export default runGamePrime;
