const resOfItem = document.querySelectorAll('.item');


console.log('Number of categories:', resOfItem.length);

const titleelements = document.querySelectorAll('.item h2');

titleelements.forEach(item =>
   console.log(`Categories: ${item.textContent}, Elements ${item.nextElementSibling.children.length}`)
   );









































































































   // const refs = {
//     createBtn: document.querySelector('[data-action="render"]'),
//     destroyBtn: document.querySelector('[data-action="destroy"]'),
//     divBoxes: document.querySelector('#boxes'),
//     input: document.querySelector('input'),
// }
// refs.createBtn.addEventListener('click', getAmount)
// refs.destroyBtn.addEventListener('click', destroyBoxes)

// function getAmount() {
//   const amount = refs.input.value
//   createBoxes(amount)
// }

// function destroyBoxes() {
//     refs.divBoxes.textContent = ''
//     refs.input.value = ''
// } 
// function createBoxes(amount) {
//     const boxSize = 30
//     const element = document.createDocumentFragment()
//     for (let i = 0; i < amount; i+=1) {
//         let size = boxSize + i * 10
//         const divEl = document.createElement('div')

// revs.inputEL.addEventListener('input') 
//         divEl.style.cssText = `
//         width: ${size}px;
//         height: ${size}px; 
//         background-color: rgb(
//             ${Math.floor(Math.random() * 255)} ,
//             ${Math.floor(Math.random() * 255)} ,
//             ${Math.floor(Math.random() * 255)} )`
//         element.append(divEl)
//     }
//     boxes.append(element)

// }






