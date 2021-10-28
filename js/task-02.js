const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listRef = document.querySelector('ul');
const makeIngrediens = ingredients => {
  return ingredients.map(ingredient => {
    const itemrefs = document.createElement('li');
    itemrefs.textContent = ingredient;
    return itemrefs;
  })
};
const elements = makeIngrediens(ingredients);
listRef.append(...elements);