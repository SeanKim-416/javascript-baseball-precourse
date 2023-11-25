import createComputerNum from './createComputerNum.js';

const COMPUTER_NUM = createComputerNum();
const numArray = [COMPUTER_NUM, null];

const getUserInput = () => {
  const $userInput = document.querySelector('#user-input');

  if (isNaN($userInput.value)) {
    $userInput.value = '';
    alert('올바른 값을 입력하세요.');
    return;
  }
  return $userInput.value;
};

const getResult = (computerNum, myNum) => {
  const hitData = {
    strike: 0,
    ball: 0,
    isWin: false,
  };

  for (const num of myNum) {
    const numIndex = myNum.indexOf(num);
    if (computerNum.indexOf(num) === numIndex) {
      hitData.strike += 1;
    } else if (computerNum.includes(num)) {
      hitData.ball += 1;
    }
  }
  return hitData;
};

const checkGameWin = ({ strike }) => {
  return strike === 3 ? true : false;
};

const formatResult = (gameResult) => {
  const { strike, ball } = gameResult;
  const resultTemplate = [];

  if (strike) resultTemplate.push(`${strike}스트라이크`);
  if (ball) resultTemplate.unshift(`${ball}볼`);

  return resultTemplate.length ? resultTemplate.join(' ') : '낫싱';
};

const printResult = (text = '') => {
  const $resultDiv = document.querySelector('#result');
  $resultDiv.textContent = text;
};

const showSuggestion = () => {
  document.querySelector('#suggestion').style.display = 'block';
};

const hideSuggestion = () => {
  document.querySelector('#suggestion').style.display = 'none';
};

const play = () => {
  const userNum = getUserInput();
  if (!userNum) return;

  numArray[1] = userNum;
  console.log(numArray);

  // 비교 수행
  const gameResult = getResult(numArray[0], numArray[1]);

  if (checkGameWin(gameResult)) {
    printResult('🎉 정답을 맞추셨습니다!🎉');
    showSuggestion();

    return;
  }

  printResult(formatResult(gameResult));
};

const $submitButton = document.querySelector('#submit');
$submitButton.addEventListener('click', play);

const resetGame = () => {
  numArray[0] = createComputerNum();
  const $userInput = document.querySelector('#user-input');
  $userInput.value = '';
  const $result = document.querySelector('#result');
  $result.textContent = '';
  hideSuggestion();
};

const $restartButton = document.querySelector('#game-restart-button');
$restartButton.addEventListener('click', resetGame);
