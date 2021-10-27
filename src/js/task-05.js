const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});

textInput.addEventListener("blur", () => {
   output.textContent = "Anonymous";
   textInput.value = "";
   
});