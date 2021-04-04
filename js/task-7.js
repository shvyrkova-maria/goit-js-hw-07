const refs = {
  range: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.range.setAttribute("value", 18);
refs.text.style.fontSize = refs.range.value + "px";

refs.range.addEventListener("input", onRangeChange);

function onRangeChange() {
  return (refs.text.style.fontSize = refs.range.value + "px");
}
