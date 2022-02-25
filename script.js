const screen = document.querySelector(`#screen`);
const reset = document.querySelector(`.delete`);
const nums = document.querySelectorAll(`.num`);
const dot = document.querySelector(`.dot`);
const plus = document.querySelector(`.plus`);
const equals = document.querySelector(`.equals`);
const minuss = document.querySelector(`.minus`);
const divisions = document.querySelector(`.division`);
const multipless = document.querySelector(`.multiply`);

let numbersRecent = [];
let numbersFirst = [];
let string;
let operators = ``;
let commonCount = 0;
let equalsCount = 0;
let show = 0;

console.log(nums);
for (let num of nums) {
  num.addEventListener("click", () => buttonPush(num));
}

reset.addEventListener("click", resetting);
dot.addEventListener("click", buttonPushDot);
plus.addEventListener("click", accumulate);
equals.addEventListener("click", result);
minuss.addEventListener("click", minus);
divisions.addEventListener("click", division);
multipless.addEventListener("click", multiples);

function buttonPush(num) {
  if (equalsCount !== 0) {
    resetting();
  }

  if (numbersRecent.length < 7) {
    numbersRecent.push(num.innerText);
    string = numbersRecent.join(``);
    screen.innerText = string;
    commonCount = 0;
    equalsCount = 0;
  }
}

let counter = 0;

function buttonPushDot() {
  if (equalsCount !== 0) {
    resetting();
  }
  if (counter === 0) {
    if (numbersRecent.length < 7) {
      numbersRecent.push(this.innerText);
      string = numbersRecent.join(``);
      screen.innerText = string;
      commonCount = 0;
    }
  }
  counter++;
}

function resetting() {
  screen.innerText = `0`;
  numbersRecent = [];
  numbersFirst = [];
  counter = 0;
  commonCount = 0;
  equalsCount = 0;
  show = 0;
  operators = ``;
}

function resettingTwo() {
  screen.innerText = show;
  numbersRecent = [];
  counter = 0;
  commonCount = 0;
  equalsCount = 0;
}

function accumulate() {
  if (operators !== `` && commonCount < 1) {
    result();
  }
  if (commonCount < 1) {
    numbersFirst = [...numbersRecent];
    operators = `+`;
    resettingTwo();
    commonCount++;
    equalsCount = 0;
  }
}

function minus() {
  if (operators !== `` && commonCount < 1) {
    result();
  }
  if (commonCount < 1) {
    numbersFirst = [...numbersRecent];
    operators = `-`;
    resettingTwo();
    commonCount++;
    equalsCount = 0;
  }
}
function division() {
  if (operators !== `` && commonCount < 1) {
    result();
  }
  if (commonCount < 1) {
    numbersFirst = [...numbersRecent];
    operators = `/`;
    resettingTwo();
    commonCount++;
    equalsCount = 0;
  }
}

function multiples() {
  if (operators !== `` && commonCount < 1) {
    result();
  }
  if (commonCount < 1) {
    numbersFirst = [...numbersRecent];
    operators = `*`;
    resettingTwo();
    commonCount++;
    equalsCount = 0;
  }
}

function result() {
  if (equalsCount < 1 && commonCount < 1) {
    let numOne = parseFloat(numbersFirst.join(``));
    let numTwo = parseFloat(numbersRecent.join(``));
    console.log(typeof numOne);
    if (operators === `+`) {
      show = numOne + numTwo;
    } else if (operators === `-`) {
      show = numOne - numTwo;
    } else if (operators === `/`) {
      show = numOne / numTwo;
    } else if (operators === `*`) {
      show = numOne * numTwo;
    }

    if (show <= 9999999999999) {
      screen.innerText = show;
    } else {
      alert(`Result is ${show} it is too long `);
    }
    numbersRecent = show.toString().split("");
    equalsCount++;
    operators = ``;
  }
}
