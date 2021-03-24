const refs = {
  categories: document.querySelector("ul#categories"),
  items: document.querySelectorAll(".item"),
};

function countCategoreis() {
  return `В списке ${refs.items.length} категории`;
}

function countEachCategory() {
  return [].map
    .call(refs.items, (item) => {
      return `Категория: ${item.firstElementChild.textContent}\nКоличество элементов: ${item.lastElementChild.children.length}`;
    })
    .join("\n");
}
console.log(countCategoreis());
console.log(countEachCategory());
