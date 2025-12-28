const startNum = window.prompt("Write the starting number...");
const endNum = window.prompt("Write the ending number...");

const simpleLoop = (x, y) => {
  let result = x;
  for (let fistNum = x; fistNum <= y; fistNum++) {
    result = result + fistNum;
  }
  return result;
};

const resultDisplay = document.getElementById("resultDisplay");
resultDisplay.innerHTML = simpleLoop(parseInt(startNum), parseInt(endNum));
