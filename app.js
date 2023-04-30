const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked";
    if(h1.className === clickedClass) {
     h1.className = "";
    }else{
     h1.className = clickedClass;
    }
}

// event 생성했던 거 그냥 지우기 아쉬워서 주석 처리 해뒀어요!

//function handleMouseEnter(){
//    h1.innerText = "Mouse is here!";
//}

//function handleMouseLeave(){
//   h1.innerText = "Mouse is gone!";
//}

//function handleWindowResize(){
//    document.body.style.backgroundColor = "tomato";
//}

//function handleWindowCopy(){
//    alert("copier!");
//}

//function handleWindowOffline(){
//    alert("SoS no WIFI");
//}

//function handleWindowOnline(){
//    alert("ALL GOOD");
//}

h1.addEventListener("click", handleTitleClick);
//h1.addEventListener("mouseenter",handleMouseEnter);
//h1.addEventListener("mouseleave", handleMouseLeave);
//window.addEventListener("resize", handleWindowResize);
//window.addEventListener("copy", handleWindowCopy);
//window.addEventListener("offline", handleWindowOffline);
//window.addEventListener("online", handleWindowOnline);








