const resOfItem = document.querySelectorAll('.item');


console.log('Number of categories:', resOfItem.length);

const titleelements = document.querySelectorAll('.item h2');

titleelements.forEach(item =>
   console.log(`Categories: ${item.textContent}, Elements ${item.nextElementSibling.children.length}`)
   );












