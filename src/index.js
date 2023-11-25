function makeRandomIndex(arrayLength) {
  const randomIndex = Math.floor(Math.random() * arrayLength);

  return randomIndex;
}

console.log(makeRandomIndex(9));
