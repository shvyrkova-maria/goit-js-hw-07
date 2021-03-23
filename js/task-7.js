const refs = {
  range: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

function onRangeChange(event) {
  return (refs.text.style.fontSize += 1);
}
