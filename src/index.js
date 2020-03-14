import readlineSync from 'readline-sync';

const postQuestion = (...elemets) => {
  let questionString = 'Question:';
  const newElements = elemets.reduce((acc, val) => acc.concat(val), []);
  for (let i = 0; i < newElements.length; i += 1) {
    questionString += ` ${newElements[i]}`;
  }
  console.log(questionString);
};

const isResult = (userAnswer, correctAnswer) => userAnswer.toLowerCase() === correctAnswer;

const gameEngine = (rulesGame, getRound) => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ') || 'no name';
  console.log(`Hello, ${name}!`);
  console.log(rulesGame);
  for (let i = 0; i < 3; i += 1) {
    const round = getRound();
    postQuestion(round.elements);
    const answerUser = readlineSync.question('Your answer: ');
    if (!(isResult(answerUser, round.correctAnswer))) {
      console.log(`"${answerUser || 'no answer'}" is wrong answer ;(. Correct answer was "${round.correctAnswer}".
Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

export default gameEngine;
