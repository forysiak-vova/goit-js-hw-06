function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// =======================

//  const render = document.querySelector('.data-create');
//  const destroy = document.querySelector('.data-destroy');
// const boxes = document.querySelector("#boxes");
 
// render.addEventListener('click', getAmount);

// destroy.addEventListener('click', destroyBoxes);

// function getAmount() {
//   const amount = +document.querySelector("#controls input").value;
//   createBoxes(amount)

//   function createBoxes(amount) {
//     const basicSize = 30;
//     const fragment = document.createDocumentFragment();
//     for (const i = 0; i < amount; i++) {
//       const size = basicSize + i * 10;
//       const div = document.createElement("div");
//       div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
//       fragment.appendChild(div);
//     }
//     boxes.appendChild(fragment);
//   }

//   function destroyBoxes() {
//     boxes.innerHTML = "";
//   }

//   function random() {
//     return Math.floor(Math.random() * 256);
//   }
// }
const refs = {
    createBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    divBoxes: document.querySelector('#boxes'),
    input: document.querySelector('input'),
}
refs.createBtn.addEventListener('click', getAmount)
refs.destroyBtn.addEventListener('click', destroyBoxes)

function getAmount() {
  const amount = refs.input.value
  createBoxes(amount)
}

function destroyBoxes() {
    refs.divBoxes.textContent = ''
    refs.input.value = ''
} 
function createBoxes(amount) {
    const boxSize = 30
    const element = document.createDocumentFragment()
    for (let i = 0; i < amount; i+=1) {
        let size = boxSize + i * 10
        const divEl = document.createElement('div')

revs.inputEL.addEventListener('input') 
        divEl.style.cssText = `
        width: ${size}px;
        height: ${size}px; 
        background-color: rgb(
            ${Math.floor(Math.random() * 255)} ,
            ${Math.floor(Math.random() * 255)} ,
            ${Math.floor(Math.random() * 255)} )`
        element.append(divEl)
    }
    boxes.append(element)

}