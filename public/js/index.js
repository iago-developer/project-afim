import Window from "./modules/window.js";

const container = document.querySelector("div.container");
const boxAfim = document.querySelector("div.box-afim");
const buttonGenerate = document.querySelector("#button-generate");
const resultAfim = document.querySelector("div.result-afim");
const buttonGraphic = document.querySelector("button#button-graphic");
const buttonAlternateX = document.querySelector("button#alternate-x");


function random() {
  const title = document.querySelector("h3#variable-x-title");
  const paragraph = document.querySelector("p#variable-x");
  var randomText = Math.floor(Math.random() * 50);
  
  title.innerHTML += `&nbsp; <span id='random-text-title'>${randomText}</span>`;
  paragraph.innerHTML += `&nbsp; f(<span class="random-text-paragraph">${randomText}</span>) = a · <span class="random-text-paragraph">${randomText}</span> + b.`;
}

random();

buttonAlternateX.addEventListener("click", () => {
  let randomTextTitle = document.querySelector("span#random-text-title");
  let randomTextParagraph = [...document.querySelectorAll("span.random-text-paragraph")];
  let randomText = Math.floor(Math.random() * 50);

  randomTextTitle.innerHTML = randomText;
  randomTextParagraph.forEach((paragraph) => {
    paragraph.innerHTML = randomText;
  });
});

buttonGenerate.addEventListener("click", function (event) {
  event.preventDefault();
  let functionAfim = document.querySelector("p#function-afim");
  let paragraph = document.querySelector("p#variable-x");
  let textParagraph = paragraph.textContent;
  let numberParagraph = textParagraph.match(/\d+/);
  let variableA = document.querySelector("#variable-a");
  let variableB = document.querySelector("#variable-b");
  let variableX = Number(numberParagraph);
  let zero = Number(-variableB.value / variableA.value);
  let zeroDiv = document.querySelector("p#zero-result");
  let zeroFormula = document.querySelector("span#zero-formula");
  let formulaZero = `x = -${variableB.value} / ${variableA.value}`;

  if (variableA.value == "" || variableB.value == "")
    throw window.alert("Erro, insira os valores de A e B!");

  functionAfim.innerHTML = `&nbsp; <span>f(${variableX}) = ${variableA.value} · ${variableX} + ${variableB.value}.</span> `;
  let result = variableA.value * variableX + Number(variableB.value);

  const output = document.querySelector("#result");
  output.innerHTML = `<span>f(${variableX}) = ${result}.</span>`;
  zeroDiv.innerHTML = Number(zero);
  zeroFormula.innerHTML = formulaZero;

  let funcaoStatus01;

  if (variableX > zero) {
    funcaoStatus01 = "positiva";
  } else {
    funcaoStatus01 = "negativa";
  }
  buttonGraphic.disabled = false;

  let a = variableA.value;
  let b = variableB.value;
  let x = variableX;
  let funcaoStatus02;

  if (a > 0) {
    funcaoStatus02 = "crescente";
  } else if (a < 0) {
    funcaoStatus02 = "decrescente";
  } else if (a == 0) {
    funcaoStatus02 = "constante";
  }
  Window.configLine(a, b, x, funcaoStatus01, funcaoStatus02);
});

buttonGraphic.addEventListener("click", () => {
  Window.exibir();
});
