const inputEl = document.querySelector("#validation-input");

// inputEl.addEventListener("blur", onInputBlur);

// function onInputBlur(event) {
//   const inputValue = event.currentTarget.value;
//   if (inputValue) {
//     return inputValue.length === 6
//       ? inputEl.classList.add("valid")
//       : inputEl.classList.add("invalid");
//   }
//   return inputEl.classList.remove("valid", "invalid");
// }

inputEl.addEventListener("blur", onInputBlur);

// function onInputBlur(event) {
//   const inputValue = event.currentTarget.value;
//   if (inputValue.length === 6) {
//     return inputEl.classList.add("valid");
//   } else if (inputValue.length !== 6) {
//     return inputEl.classList.add("invalid");
//   } else {
//     return inputEl.classList.toggle("valid");
//   }
// }
