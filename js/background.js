/*const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `image/${chosenImage}`;

document.body.appendChild(bgImage);*/
const images = [
    "0.jpeg"
  ]
const modalImage = document.getElementById('modal_box')
function changeQuote1(){
    const choseImage = images[Math.floor(Math.random() * images.length)];
    
    modalImage.style.backgroundImage = "url(img/"+choseImage+")";
    console.log(choseImage);
    }
  
    window.addEventListener('load', changeQuote1)