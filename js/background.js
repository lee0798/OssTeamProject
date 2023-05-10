/*const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `image/${chosenImage}`;

document.body.appendChild(bgImage);*/
const images = [
    "0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg",
    "6.jpg","7.jpg","8.jpg","9.jpg","10.jpg",
    "11.jpg","12.jpg","13.jpg","14.jpg","15.jpg",
    "16.jpg","17.jpg","18.jpg","19.jpg","20.jpg",
    "21.jpg","22.jpg","23.jpg","24.jpg","25.jpg",
  ]
const modalImage = document.getElementById('body')
function changePic(){
    const choseImage = images[Math.floor(Math.random() * images.length)];
    
    modalImage.style.backgroundImage = "url(img/"+choseImage+")";
    console.log(choseImage);
    }
  
    window.addEventListener('load', changePic)

//code-reivew 완료했습니다. - 이하나
//code-review 완료했습니다. - 이도환
