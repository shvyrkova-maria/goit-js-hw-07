const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.classList.add("ingredients-list");

const createIngredientsItems = (ingredients) => {
  return ingredients.map((ingredient) => {
    const ingredientItemEl = document.createElement("li");
    ingredientItemEl.classList.add("ingredients-item");
    ingredientItemEl.textContent = ingredient;
    return ingredientItemEl;
  });
};

const ingredientsList = createIngredientsItems(ingredients);
ingredientsEl.append(...ingredientsList);
