// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const refs = {
  decrementBtn: document.querySelector("#counter button"),
  incrementBtn: document.querySelector("#value ~ button"),
  value: document.querySelector("#value"),
};

let counterValue = Number(refs.value.textContent);

refs.decrementBtn.addEventListener("click", onDecrementClick);
refs.incrementBtn.addEventListener("click", onIncrementClick);

function onDecrementClick() {
  return (refs.value.textContent = counterValue -= 1);
}

function onIncrementClick() {
  return (refs.value.textContent = counterValue += 1);
}
