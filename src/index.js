import createComputerNum from './createComputerNum.js';
import { showSuggestion, hideSuggestion, printResult } from './handleElement.js';
import { getResult, getUserInput, checkGameWin, formatResult } from './utils.js';

const COMPUTER_NUM = createComputerNum();
const numArray = [COMPUTER_NUM, null];

const resetGame = () => {
  numArray[0] = createComputerNum();
  const $userInput = document.querySelector('#user-input');
  $userInput.value = '';
  const $result = document.querySelector('#result');
  $result.textContent = '';
  hideSuggestion();
};

const play = () => {
  const userNum = getUserInput();
  if (!userNum) return;

  numArray[1] = userNum;

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

const $restartButton = document.querySelector('#game-restart-button');
$restartButton.addEventListener('click', resetGame);
