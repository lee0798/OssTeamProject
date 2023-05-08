/*const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `image/${chosenImage}`;

document.body.appendChild(bgImage);*/
const images = [
    "0.jpeg"
  ]
const quoteDiv = document.querySelector('#modal_box')
const bgImage = document.querySelector('#modal_box img')
function changeQuote1(){
    const choseImage = images[Math.floor(Math.random() * images.length)];
    
    bgImage.src = `img/${choseImage}`;
    }
    
    window.addEventListener('load', changeQuote1)