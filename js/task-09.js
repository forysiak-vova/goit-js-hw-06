function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const resChange = document.querySelector('.change-color');
const resColor = document.querySelector('.color');
const bodyCol = document.querySelector('body');

resChange.addEventListener('click', () => {
  bodyCol.style.backgroundColor = `${getRandomHexColor()}`
 resColor.textContent = `${getRandomHexColor()}`
});


