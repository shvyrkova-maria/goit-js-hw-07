// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и
//количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

// const categoriesEl = document.querySelector("ul#categories");
// const itemsEl = document.querySelector(".item");

// function countCategoreis() {
//   const categoriesQuantity = categoriesEl.children.length;
//   return `В списке ${categoriesQuantity} категории`;
// }

// function countElementsInCategory() {
//   categoriesEl.forEach(() => {
//     return `Категория: ${itemsEl.firstElementChild.textContent}
//   Количество элементов: ${itemsEl.lastElementChild.children.length}`;
//   });
// }
// console.log(countCategoreis());
// console.log(countElementsInCategory());

const categoriesEl = document.querySelector("ul#categories");
const itemsEl = document.querySelector(".item");
console.log(categoriesEl.children);

function countCategoreis() {
  const categoriesQuantity = itemsEl.length;
  return `В списке ${categoriesQuantity} категории`;
}

function makeInner() {
  return `Категория: ${itemsEl.firstElementChild.textContent}
 Количество элементов: ${itemsEl.lastElementChild.children.length}`;
}

console.log(makeInner());
