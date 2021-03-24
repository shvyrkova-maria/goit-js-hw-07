const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputValue = event.currentTarget.value;
  inputEl.classList.add("invalid", "valid");
  if (inputValue.length === 6) {
    inputEl.classList.remove("invalid");
  }
  if (inputValue.length !== 6 || !inputValue) {
    inputEl.classList.remove("valid");
  }
}
