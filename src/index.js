import readlineSync from 'readline-sync';

export const welcomeUser = () => {
  console.log('Welcome to the Brain Games!\n');
};

export const introUser = () => {
  let userName = readlineSync.question('May I have your name? ');
  if (userName === '') {
    userName = 'noname';
  }
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const postRules = (rules) => console.log(rules);

export const postQuestion = (...elemets) => {
  let questionString = 'Question:';
  const newElements = elemets.reduce((acc, val) => acc.concat(val), []);
  for (let i = 0; i < newElements.length; i += 1) {
    questionString += ` ${newElements[i]}`;
  }
  console.log(questionString);
};

export const getUserAnswer = () => readlineSync.question('Your answer: ');

export const isResult = (userAnswer, correctAnswer) => {
  const answer1 = String(userAnswer).toLowerCase();
  const answer2 = String(correctAnswer).toLowerCase();
  return (answer1 === answer2 ? true : false);
};

export const postGameOver = (answerUser, correctAnswer, name) => {
  console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${correctAnswer}".
Let's try again, ${name}!`);
  return false;
};

export const postCorrectResoult = () => console.log('Correct!');

export const postCongratulations = (name) => console.log(`Congratulations, ${name}!`);

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;
