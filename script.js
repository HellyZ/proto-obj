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
const squareResult = document.querySelector(".squareResult");

addElementLabel.innerText = "Введите элемент";
getHeightLabel.innerText = "Введите высоту";
getWidthLabel.innerText = "Введите ширину";
getBgLabel.innerText = "Введите цвет фона";
getFontSizeLabel.innerText = "Введите размер текста";

const DomElement = function (
  selector,
  height,
  width,
  bg,
  fontSize = "10px",
  position = "relative",
  destination = result
) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.position = position;
  this.destination = destination;

  this.createNewElement = function () {
    let div = document.createElement("div");
    div.textContent = (Math.random() + 1).toString(36).substring(7);

    if (selector.startsWith("#")) {
      div.setAttribute("id", selector.slice(1));
    } else if (selector.startsWith(".")) {
      div.classList.add(selector.slice(1));
    } else {
      console.log("не класс и не id");
    }

    div.style.cssText = `height: ${height}; width: ${width}; background-color: ${bg}; font-size: ${fontSize}; position: ${position}`;
    this.destination.appendChild(div);
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

const newSquare = new DomElement(
  ".square",
  "100px",
  "100px  ",
  "yellow",
  "",
  "absolute",
  squareResult
);

document.addEventListener("DOMContentLoaded", newSquare.createNewElement());

function place(selector, x_pos, y_pos) {
  let element = document.querySelector(selector);
  element.style.left = x_pos + "px";
  element.style.top = y_pos + "px";
}

function moveSquare(event) {
  let move = document.querySelector(".square").getBoundingClientRect();
  var left = parseInt(move.left, 10);
  var top = parseInt(move.top, 10);
  const key = event.key;
  switch (key) {
    case "ArrowLeft":
      place(".square", left - 10, top);
      break;
    case "ArrowRight":
      place(".square", left + 10, top);
      break;
    case "ArrowUp":
      place(".square", left, top - 10);
      break;
    case "ArrowDown":
      place(".square", left, top + 10);
      break;
  }
}

window.addEventListener("keydown", moveSquare);
