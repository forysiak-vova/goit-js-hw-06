const validActionInput = document.querySelector('#validation-input');

console.log(validActionInput);

validActionInput.addEventListener('blur', () => {
   validActionInput.value = '';
});


