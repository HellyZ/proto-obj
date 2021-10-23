"use strict";
const addElementLabel = document.getElementById("text-span");
const getHeightLabel = document.getElementById("height-span");
const getWidthLabel = document.getElementById("width-span");
const getBgLabel = document.getElementById("bg-span");
const getFontSizeLabel = document.getElementById("fontSize-span");
const addBtn = document.querySelector("#btn_add");

const getSelector = document.querySelector(".addDomElement");
const getHeight = document.querySelector(".addHeight");
const getWidth = document.querySelector(".addWidth");
const getBg = document.querySelector(".addBg");
const getFontSize = document.querySelector(".addFontSize");

const result = document.querySelector(".result");

addElementLabel.innerText = "Введите элемент";
getHeightLabel.innerText = "Введите высоту";
getWidthLabel.innerText = "Введите ширину";
getBgLabel.innerText = "Введите цвет фона";
getFontSizeLabel.innerText = "Введите размер текста";

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createNewElement = function () {
    let div = document.createElement("div");
    div.textContent = (Math.random() + 1).toString(36).substring(7);
    selector.startsWith("#") ? 
      div.setAttribute("id", selector.slice(1)).classList.add("blue")
      : (selector.startsWith("#") ? div.setAttribute("id", selector.slice(1)).classList.add("blue") : console.log('не класс и не id'))

    div.style.cssText = `height: ${height}; width: ${width}; background-color: ${bg}; font-size: ${fontSize}`;
    result.appendChild(div);
  };
};


addBtn.addEventListener("click", () => {
  let selector = getSelector.value;
  let height = getHeight.value;
  let width = getWidth.value;
  let bg = getBg.value;
  let fontSize = getFontSize.value;

  const newElement = new DomElement(selector, height, width, bg, fontSize);
  newElement.createNewElement();
});
