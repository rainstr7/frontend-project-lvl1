import readlineSync from 'readline-sync';

const isResult = (userAnswer, correctAnswer) => userAnswer.toLowerCase() === correctAnswer;

const runGameEngine = (description, getGameData) => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ') || 'no name';
  console.log(`Hello, ${name}!`);
  console.log(description);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const round = getGameData();
    console.log(`Question: ${round.question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (!(isResult(answerUser, round.correctAnswer))) {
      console.log(`"${answerUser || 'no answer'}" is wrong answer ;(. Correct answer was "${round.correctAnswer}".
Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGameEngine;
