import readlineSync from 'readline-sync';

const roundsCount = 3;

const runGameEngine = (description, getGameData) => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, "${name}"!`);
  console.log(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = getGameData();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser.toLowerCase() !== correctAnswer) {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, "${name}"!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, "${name}"!`);
};

export default runGameEngine;
