import { questions } from './questions.js';

const btnFun = document.querySelector('#fun-btn');
const btnFriendly = document.querySelector('#friendly-btn');
const btnGuy = document.querySelector('#guy-btn');
const btnGirl = document.querySelector('#girl-btn');

const mainPage = document.querySelector('.main');
const containerApp = document.querySelector('.app');
const randomQuestionResult = document.querySelector('.random-question-result');

let random;
const displayFunQuestions = function () {
  random = Math.floor(Math.random() * questions.funQuestions.length);
};
displayFunQuestions();

btnFun.addEventListener('click', function (e) {
  //   mainPage.style.opacity = 0;
  mainPage.style.display = 'none';

  randomQuestionResult.textContent = questions.funQuestions[random];
});
