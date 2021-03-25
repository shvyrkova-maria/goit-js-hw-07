const refs = {
  number: document.querySelector("div > input"),
  render: document.querySelector("#controls > button"),
  destroy: document.querySelector("button ~ button"),
  boxes: document.querySelector("#boxes"),
};

refs.number.setAttribute("value", "0");

refs.number.addEventListener("input", onInputChange);
refs.render.addEventListener("click", onRenderBtnClick);
refs.destroy.addEventListener("click", onDestroyBtnClick);

function onInputChange(event) {
  return Number(event.currentTarget.value);
}

function onRenderBtnClick() {
  refs.boxes.insertAdjacentHTML("afterbegin", createBoxes(refs.number.value));
}

function onDestroyBtnClick() {
  refs.number.value = 0;
  while (refs.boxes.firstChild) {
    refs.boxes.removeChild(refs.boxes.firstChild);
  }
}

function createBoxsMarkup() {
  return `<div class="box" style = "background-color: ${makeRandomColor()};  width:
  30px; height: 30px";" ></div>`;
}

function createBoxes(amount) {
  let newBoxes = [];
  newBoxes.length = amount;
  for (let i = 0; i < newBoxes.length; i++) {
    newBoxes[i] = createBoxsMarkup();
  }
  return newBoxes.join("");
}

function makeRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

//==================================================================//
