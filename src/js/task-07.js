const input = document.querySelector('#font-size-control');
console.log(input.value);
const text = document.querySelector('#text');

input.addEventListener('input', () => {
 
   text.style.fontSize = `${input.value}px`;

});
