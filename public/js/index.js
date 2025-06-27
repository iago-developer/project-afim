const container = document.querySelector("div.container");
const boxAfim = document.querySelector("div.box-afim");
const buttonGenerate = document.querySelector("#button-generate");
const resultAfim = document.querySelector("div.result-afim");

function random() {
  const title = document.querySelector("h3#variable-x-title");
  const paragraph = document.querySelector("p#variable-x");
  var randomText = Math.floor((Math.random() * 50) + 1);

  title.innerHTML += `&nbsp; <span>${randomText}</span>`;
  paragraph.innerHTML += `&nbsp; <span>f(${randomText}) = a · ${randomText} + b.</span>`;
}

random();

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
  if(variableA.value == "" || variableB.value == "") throw window.alert("Erro, insira os valores de A e B!");
  
  functionAfim.innerHTML = `&nbsp; <span>f(${variableX}) = ${variableA.value} · ${variableX} + ${variableB.value}.</span> `;
  let result = (variableA.value * variableX) + Number(variableB.value);
  
  const output = document.querySelector("#result");
  output.innerHTML = `<span>f(${variableX}) = ${result}.</span>`;
  zeroDiv.innerHTML = Number(zero);
});


