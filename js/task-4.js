// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const refs = {
  decrementBtn: document.querySelector("#counter button"),
  // incrementBtn: document.querySelector(),
  value: document.querySelector("#value"),
};

let counterValue = refs.value.textContent;

// function decrement() {
//   return (counterValue += 1);
// }

// function increment() {
//   return (counterValue -= 1);
// }

refs.decrementBtn.addEventListener("click", () => {
  return (counterValue += 1);
});
refs.incrementBtn.addEventListener("click", () => {
  return (counterValue -= 1);
});
