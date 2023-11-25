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

const play = () => {
  const userNum = getUserInput();
  if (!userNum) return;

  numArray[1] = userNum;
  console.log(numArray);
};

const $submitButton = document.querySelector('#submit');
$submitButton.addEventListener('click', play);
