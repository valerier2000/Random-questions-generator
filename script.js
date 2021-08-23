import { questions } from './questions.js';

const btnFun = document.querySelector('#fun-btn');
const btnFriendly = document.querySelector('#friendly-btn');
const btnGuy = document.querySelector('#guy-btn');
const btnGirl = document.querySelector('#girl-btn');

const mainPage = document.querySelector('.main');
const containerApp = document.querySelector('.app');
const randomQuestionResult = document.querySelector('.random-question-result');

const { funQuestions, friendlyQuestions, guyQuestions, girlQuestions } =
  questions;
let random;
const displayFunQuestions = function (category) {
  random = Math.floor(Math.random() * category.length);
};

btnFun.addEventListener('click', function (e) {
  mainPage.style.display = 'none';
  displayFunQuestions(funQuestions);

  randomQuestionResult.textContent = funQuestions[random];
});

btnFriendly.addEventListener('click', function (e) {
  mainPage.style.display = 'none';
  displayFunQuestions(friendlyQuestions);

  randomQuestionResult.textContent = friendlyQuestions[random];
});

btnGuy.addEventListener('click', function (e) {
  mainPage.style.display = 'none';
  displayFunQuestions(guyQuestions);

  randomQuestionResult.textContent = guyQuestions[random];
});

btnGirl.addEventListener('click', function (e) {
  mainPage.style.display = 'none';
  displayFunQuestions(girlQuestions);

  randomQuestionResult.textContent = girlQuestions[random];
});
