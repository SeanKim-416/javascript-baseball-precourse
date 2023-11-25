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
  };

  for (const num of myNum) {
    const numIndex = myNum.indexOf(num);
    if (computerNum.indexOf(num) === numIndex) {
      hitData.strike += 1;
    } else if (computerNum.includes(num)) {
      hitData.ball += 1;
    }
  }
  console.log(hitData.strike, hitData.ball);
};

const play = () => {
  const userNum = getUserInput();
  if (!userNum) return;

  numArray[1] = userNum;
  console.log(numArray);

  // 비교 수행
  getResult(numArray[0], numArray[1]);
};

const $submitButton = document.querySelector('#submit');
$submitButton.addEventListener('click', play);
