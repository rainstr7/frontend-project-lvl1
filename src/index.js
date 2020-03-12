import readlineSync from 'readline-sync';

const welcomeUser = () => {
  console.log('Welcome to the Brain Games!\n');
};

const introUser = () => {
  let userName = readlineSync.question('May I have your name? ');
  if (userName === '') {
    userName = 'noname';
  }
  console.log(`Hello, ${userName}!`);
  return userName;
};

const postRules = (rules) => console.log(rules);

const postQuestion = (...elemets) => {
  let questionString = 'Question:';
  const newElements = elemets.reduce((acc, val) => acc.concat(val), []);
  for (let i = 0; i < newElements.length; i += 1) {
    questionString += ` ${newElements[i]}`;
  }
  console.log(questionString);
};

const getUserAnswer = () => readlineSync.question('Your answer: ');

const isResult = (userAnswer, correctAnswer) => {
  const answer1 = String(userAnswer).toLowerCase();
  const answer2 = String(correctAnswer).toLowerCase();
  if (answer1 === answer2) {
    return true;
  }
  return false;
};

const postGameOver = (answerUser, correctAnswer, name) => {
  console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${correctAnswer}".
Let's try again, ${name}!`);
  return false;
};

const postCorrectResoult = () => console.log('Correct!');

const postCongratulations = (name) => console.log(`Congratulations, ${name}!`);

const gameEngine = (rulesGame, getRound) => {
  welcomeUser();
  const name = introUser();
  postRules(rulesGame);
  for (let i = 0; i < 3; i += 1) {
    const round = getRound();
    postQuestion(round.elements);
    const answerUser = getUserAnswer();
    const correctAnswer = round.answer;
    const resoult = isResult(answerUser, correctAnswer);
    if (!resoult) {
      return postGameOver(answerUser, correctAnswer, name);
    }
    postCorrectResoult();
  }
  postCongratulations(name);
  return true;
};

export default gameEngine;
