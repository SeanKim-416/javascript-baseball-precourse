const showSuggestion = () => {
  document.querySelector('#suggestion').style.display = 'block';
};

const hideSuggestion = () => {
  document.querySelector('#suggestion').style.display = 'none';
};

const printResult = (text = '') => {
  const $resultDiv = document.querySelector('#result');
  $resultDiv.textContent = text;
};

export { showSuggestion, hideSuggestion, printResult };
