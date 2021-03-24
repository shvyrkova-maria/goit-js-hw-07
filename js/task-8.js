const refs = {
  number: document.querySelector("div > input"),
  render: document.querySelector("#controls > button"),
  destroy: document.querySelector("button ~ button"),
  boxes: document.querySelector("#boxes"),
};

refs.number.setAttribute("value", "0");

//==================================================================//
let inputValue = Number(refs.number.textContent);
console.log(refs.render.addEventListener("input", onInputChange));

function onInputChange(event) {
  return (refs.number.textContent = refs.number.value);
}
console.log(onInputChange());
// const createBoxsMarkup = () => `<div class="box"></div>`; // или
const createBoxsMarkup = () =>
  `<div class="box" style = "color: ${makeRandomColor()}; width: 30px; height: 30px" ></div>`;

// const newBox = document.querySelectorAll(".box");
// newBox.style.width = "30px";
// newBox.style.height = "30px";
// newBox.style.color = makeRandomColor();

// const makeBoxes = [].map(createBoxsMarkup).join("");
// refs.boxes.insertAdjacentHTML("afterbegin", makeBoxes);

function onDestroyBtnClick() {
  //   return parent.removeChild(elem);
}

function createBoxes(amount) {
  let newBoxes = [];
  newBoxes.length = amount; //длина массива, amount - это значение инпута
  console.log(newBoxes.map(createBoxsMarkup));
  return newBoxes.map(createBoxsMarkup).join("");
}
console.log(refs.boxes.insertAdjacentHTML("afterbegin", createBoxes(9)));
// refs.boxes.insertAdjacentHTML("afterbegin", newBoxes);

function makeRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
// console.log(makeRandomColor());
