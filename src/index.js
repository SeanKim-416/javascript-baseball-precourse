import createComputerNum from './createComputerNum.js';

const COMPUTER_NUM = createComputerNum();
const numArray = [COMPUTER_NUM, null];

const getUserInput = () => {
  const $userInput = document.querySelector('#user-input');
  // 올바른 값인지 확인
  return $userInput.value;
};

const $submitButton = document.querySelector('#submit');
$submitButton.addEventListener('click', () => {
  numArray[1] = getUserInput();
  console.log(numArray);
});
