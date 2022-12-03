const titleCalculate = document.querySelector(".first-title");

const input1S = document.querySelector("#input1");
const input1T = document.querySelector("#input2");
const input2T = document.querySelector("#input3");
const input3T = document.querySelector("#input4");
const input1TB = document.querySelector("#input5");
const input6TH = document.querySelector("#input6");
const input7C = document.querySelector("#input7");

const perimeterButton1 = document.querySelector(".btn-perimeter1");
const perimeterButton2 = document.querySelector(".btn-perimeter2");
const perimeterButton3 = document.querySelector(".btn-perimeter3");

const areaButton1 = document.querySelector(".btn-area1");
const areaButton2 = document.querySelector(".btn-area2");
const areaButton3 = document.querySelector(".btn-area3");

const PI = Math.PI;

const diameterButton = document.querySelector(".btn-diameter");

perimeterButton1.addEventListener("click", (e) => {
  let perCalcRes = input1.value * 4;
  return (titleCalculate.innerHTML = `The square perimeter is: ${perCalcRes} cm`);
});

areaButton1.addEventListener("click", (e) => {
  areaCalcRes = input1S.value * input1S.value;
  return (titleCalculate.innerHTML = `The square area is: ${areaCalcRes} cm2`);
});

perimeterButton2.addEventListener("click", (e) => {
  let perCalcRes2 =
    Number(input1T.value) + Number(input2T.value) + Number(input3T.value);
  return (titleCalculate.innerHTML = `The triangle perimeter is: ${perCalcRes2} cm`);
});

areaButton2.addEventListener("click", (e) => {
  let areaCalcRes2 = input1TB.value * input6TH.value;
  return (titleCalculate.innerHTML = `The triangle area is: ${areaCalcRes2} cm2`);
});

perimeterButton3.addEventListener("click", () => {
  let perCalcRes3 = PI * 2 * input7C.value;
  return (titleCalculate.innerHTML = `The circle perimeter is: ${perCalcRes3} cm`);
});

areaButton3.addEventListener("click", (e) => {
  let areaCalcRes3 = PI * input7C.value;
  return (titleCalculate.innerHTML = `The circle area is: ${areaCalcRes3} cm2`);
});

diameterButton.addEventListener("click", (e) => {
  let diameterCalcRes = input7C.value * 2;
  return (titleCalculate.innerHTML = `The circle diameter is: ${diameterCalcRes} cm`);
});
