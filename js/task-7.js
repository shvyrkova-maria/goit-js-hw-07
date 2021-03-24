const refs = {
  range: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.range.setAttribute("value", 18);
refs.range.setAttribute("min", 0);
refs.range.setAttribute("max", 100);
refs.text.style.fontSize = "18px";

refs.range.addEventListener("input", onRangeChange);

function onRangeChange() {
  return (refs.text.style.fontSize = refs.range.value + "px");
}
