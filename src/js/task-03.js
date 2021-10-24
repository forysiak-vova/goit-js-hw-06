const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imageItem = document.createElement('li');
const imageEl = document.createElement('img');
imageEl.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260';
imageEl.alt = 'Group of Horses Running';
imageEl.width = 320;
imageEl.height = 180;

 imageItem.appendChild(imageEl);

const imageItem2 = document.createElement('li');
const imageEl2 = document.createElement('img');
imageEl2.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260';
imageEl2.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
imageEl2.width = 320;
imageEl2.height = 180;
 imageItem2.appendChild(imageEl2);

const imageItem3 = document.createElement('li');
const imageEl3 = document.createElement('img');
imageEl3.src = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260';
imageEl3.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
imageEl3.width = 320;
imageEl3.height = 180;
 imageItem3.appendChild(imageEl3);

const heroEl = document.querySelector('.gallery');
heroEl.append(imageItem, imageItem2, imageItem3);
// const result = (imageItem, imageItem2, imageItem3);
// heroEl.insertAdjacentHTML("afterbegin",  `${imageItem}`);
