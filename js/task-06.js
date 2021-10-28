

// const input = document.querySelector('input')


// input.addEventListener('blur', () => {
//     if (input.value.length === 6) {
//         input.classList.add("valid")
//     } else {
//         input.classList.add("invalid")
//     }
// })

const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length');


input.addEventListener('blur', onValidation)

function onValidation() {
  
   if (Number(dataLength) === input.value.length) {
      input.classList.remove('invalid')
      input.classList.add('valid');
    
   }
   else {
      input.classList.add('invalid')
   }
};











