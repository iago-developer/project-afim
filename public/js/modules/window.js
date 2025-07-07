// import FundoGraphic from "../images/fundo-graphic.png";

class Window {
  static header_content = "Gráfico Gerado:";
  static a = null;
  static b = null;
  static main_content = null;
  static gradient = "linear-gradient(to top, #1e3a8a, #38b2ac, #1e3a8a)";
  static destino = document.body;

  static configLine(a, b, fS01, fS02) {
    this.a = a;
    this.b = b;
    this.fS01 = fS01;
    this.fS02 = fS02;
  }

  static exibir() {
    const area = document.createElement("div");
    area.setAttribute("id", "area-box");
    area.style.cssText = `
      height: 100%;
      width: 100%;
      background-color: rgba(0,0,0, 0.7);
      z-index: 1;
      position: fixed;
      top: 0%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
  `;
    this.destino.prepend(area);

    const box = document.createElement("div");
    box.setAttribute("id", "box");
    box.style.cssText = `
      background-image: ${this.gradient};
      background-size: 300% 300%;
      border-radius: 12px;
      box-shadow: 2px 2px 4px rgba(0,0,0, 0.5);
      color: #000;
      height: 100%d;
      width: auto;
      margin: 15px;
      overflow: hidden;
      animation: gradient 10s ease infinite;
  `;
    area.appendChild(box);

    const header = document.createElement("header");
    header.setAttribute("id", "header-box");
    header.style.cssText = `
      color: #fff;
      width: 100%;
      padding: 20px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.594);
      display: flex;
      flex-direction: column;
      gap: 20px;
    `;
    const lineHeader = document.createElement("div");
    lineHeader.setAttribute("id", "line-header");
    lineHeader.style.cssText = `
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `;
    const title = document.createElement("h2");
    title.innerHTML = this.header_content;
    const hr = document.createElement("hr");
    hr.style.cssText = `
      background-color: #fff;
      height: 5px; 
      width: 100%; 
    `;
    header.appendChild(lineHeader);
    header.appendChild(hr);
    lineHeader.prepend(title);
    box.appendChild(header);

    const main = document.createElement("main");
    main.setAttribute("id", "main-box");
    main.style.cssText = `
     height: 100%;
     width: 100%;
     color: #000;
     padding: 20px;
     display: flex;
     flex-direction: column;
     gap: 30px;
    `;
    box.appendChild(main);

    const dataSection = document.createElement("div");
    dataSection.setAttribute("id", "section-data");
    dataSection.style.cssText = `
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 2px 2px 4px rgba(0,0,0, 0.6);
      height: 100%;
      width: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 30px; 
    `;
    main.appendChild(dataSection);

    const titleData = document.createElement("h2");
    titleData.setAttribute("id", "title-data");
    titleData.style.cssText = `
      width: 100%;
      text-align: start;
      border-bottom: 3px solid #000;
    `;
    titleData.innerHTML = "Dados do Gráfico:";
    dataSection.appendChild(titleData);

    const dataDiv01 = document.createElement("div");
    dataDiv01.setAttribute("id", "data-div");
    dataDiv01.style.cssText = `
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
    `;
    dataSection.appendChild(dataDiv01);

    const spanA = document.createElement("span");
    spanA.setAttribute("id", "span");
    spanA.style.cssText = `
    background-color: #dfdfdf;
    border: 3px solid #1a2020;
    border-radius: 6px;
    color: #000;
    margin: 5px;
    font-weight: bold;
    padding: 12px;
    `;
    spanA.innerHTML = `Coeficiente Angular (a): ${this.a}`;
    dataDiv01.appendChild(spanA);

    const spanB = document.createElement("span");
    spanB.setAttribute("id", "span");
    spanB.style.cssText = `
      background-color: #dfdfdf;
      border: 3px solid #1a2020;
      border-radius: 6px;
      color: #000;
      margin: 5px;
      font-weight: bold;
      padding: 12px;
    `;
    spanB.innerHTML = `Coeficiente Linear (b): ${this.b}`;
    dataDiv01.appendChild(spanB);

    const dataDiv02 = document.createElement("div");
    dataDiv02.setAttribute("id", "data-div");
    dataDiv02.style.cssText = `
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
    `;
    dataSection.appendChild(dataDiv02);

    const funcao = document.createElement("span");
    funcao.setAttribute("id", "funcao-graphic");
    funcao.style.cssText = `
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    `;
    dataDiv02.appendChild(funcao);

    const spanFuncao01 = document.createElement("span");
    spanFuncao01.setAttribute("id", "funcao-span");
    spanFuncao01.style.cssText = `
      background-color: #dfdfdf;
      border: 3px solid #1a2020;
      border-radius: 6px;
      color: #000;
      margin: 5px;
      font-weight: bold;
      padding: 12px;
    `;
    spanFuncao01.innerHTML = `Função: f(x) = ${this.a} · x + ${this.b}`;
    funcao.appendChild(spanFuncao01);

    const spanFuncao02 = document.createElement("span");
    spanFuncao02.setAttribute("id", "funcao-span");
    spanFuncao02.style.cssText = `
      background-color: #dfdfdf;
      border: 3px solid #1a2020;
      border-radius: 6px;
      color: #000;
      margin: 5px;
      font-weight: bold;
      padding: 12px;
    `;
    spanFuncao02.innerHTML = `Esta função é considerada: ${this.fS01} e também ${this.fS02}.`;
    funcao.appendChild(spanFuncao02);

    const lineX = document.createElement("div");
    lineX.setAttribute("id", "line-x");
    lineX.style.cssText = `
      background-color: #000;
      height: 2.4px;
      width: 100%;
      text-align: end;
      position: absolute;
      top: 52%;
    `;

    const titleX = document.createElement("h3");
    titleX.style.cssText = `
      padding: 10px;
      `;
    titleX.innerHTML = "X";
    lineX.prepend(titleX);

    const lineY = document.createElement("div");
    lineY.setAttribute("id", "line-y");
    lineY.style.cssText = `
      background-color: #000;
      height: 100%;
      width: 2.4px;
      position: absolute;
      top: 0%;
      `;

    const titleY = document.createElement("h3");
    titleY.style.cssText = `
      padding: 10px;
      position: relative;
    `;
    titleY.innerHTML = "Y";
    lineY.prepend(titleY);

    const section = document.createElement("section");
    section.setAttribute("id", "section-main-box");
    section.style.cssText = `
      border-radius: 9px;
      box-shadow: 2px 2px 4px rgba(0,0,0, 0.5);
      height: 300px;
      width: 100%;
      display: flex;
      justify-content: center;
      position: relative;
      overflow: hidden;
    `;

    main.prepend(section);
    section.appendChild(lineX);
    section.appendChild(lineY);

    const pointer = document.createElement("div");
    pointer.setAttribute("id", "pointer");
    pointer.style.cssText = `
      background-color: red;
      border-radius: 50%;
      height: 12px;
      width: 12px;
      position: absolute;
      top: ${this.b}%;
      left: 50%;
      transform: translateX(-50%) rotate(${this.a}deg);
    `;
    lineY.prepend(pointer);

    const line = document.createElement("div");
    line.setAttribute("id", "line");
    line.style.cssText = `
      background-color: red;
      height: 10000px;
      width: 3px;
      position: relative;
      top: 50%;
      left: 50%;  
      transform: translate(-50%, -50%);
    `;
    pointer.prepend(line);

    const buttonBox = document.createElement("button");
    buttonBox.setAttribute("id", "button-box");
    buttonBox.style.cssText = `
      background-color: rgb(208, 56, 56);
      background-size: 300% 300%;
      border: none;
      border-radius: 6px;
      color: #fff;
      padding: 10px 20px;
      width: auto;
      cursor: pointer;
      font-weight: bold;
      transition: all .6s ease;
      animation: gradient 10s ease infinite;
    `;
    buttonBox.innerHTML = "X";
    lineHeader.appendChild(buttonBox);

    buttonBox.addEventListener("click", () => this.ocultar());
  }

  static ocultar() {
    const area = document.querySelector("#area-box");
    this.destino.removeChild(area);
  }
}

export default Window;
