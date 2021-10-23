const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const remoweItem = document.createElement('li');
remoweItem.textContent = 'Potatoes';
remoweItem.classList.add('item');

const remoweItem1 = document.createElement('li');
remoweItem1.textContent = 'Mushrooms';
remoweItem1.classList.add('item');
 
const remoweItem2 = document.createElement('li');
remoweItem2.textContent = 'Garlic';
remoweItem2.classList.add('item');

const remoweItem3 = document.createElement('li');
remoweItem3.textContent = 'Tomatos';
remoweItem3.classList.add('item');

const remoweItem4 = document.createElement('li');
remoweItem4.textContent = 'Herbs';
remoweItem4.classList.add('item');

const remoweItem5 = document.createElement('li');
remoweItem5.textContent = 'Condiments';
remoweItem5.classList.add('item');

const navItem = document.querySelector('ul#ingredients');
navItem.append(remoweItem, remoweItem1, remoweItem2, remoweItem3, remoweItem4, remoweItem5);