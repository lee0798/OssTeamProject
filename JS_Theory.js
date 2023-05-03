<<<<<<< HEAD
=======
<<<<<<<< HEAD:JS_Theory.js
>>>>>>> f800a8bf3eb8d84944b5c8405ba96fe1cc765d19
//print
console.log()
//variable: const let var
const a=5;
const b=2;
<<<<<<< HEAD
const MyName="dohwan lee";
console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("Hello "+MyName);
let MyName="dohwan lee";
console.log("Hello "+MyName);
MyName="dohwanee"; 
console.log("Hello "+MyName);
=======
const MyName="dohwan";
console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello "+MyName);
let MyName="dohwan";
console.log("hello "+MyName);
MyName="dohwanee"; 
console.log("hello "+MyName);
>>>>>>> f800a8bf3eb8d84944b5c8405ba96fe1cc765d19
//boolean true false null 
const amIFat = true;
const amIFat1 = null;
let amIFat2 ;//undefined
console.log(amIFat);
//array
const daysOfWeek=["mon","tue","wed","thu","fri","sat"];
//get item from array
console.log(daysOfWeek[5]);
//add one more day to the array
daysOfWeek.push("sun");
//Objects
const player ={
    name:"nico",
    points:10,
    handsome:false,
    fat:"little fat"
};
console.log(player);
console.log(player.name);
console.log(player["name"]);
player.fat=true;//player가 const여도 object는 변경 가능
player.lastName="Dohwan";//새로운 object 항목 추가
//function
function sayHello(nameOfPerson, age){
    console.log("Hello "+nameOfPerson+  " "+age);
}
sayHello("nico",10);
//function in object
const player ={
    name:"nico",
    sayHello:function(otherPerson){
        console.log("hela" + otherPerson+" nice to meet you")
    }
};
console.log(player.name);
player.sayHello("lynn");
//use return in function
const age = 96;
function calculateKrAge(ageofForeigner){
    return ageofForeigner +2;
}
const krAge =calculateKrAge(age);
console.log(krAge);
//change type 
const age =prompt("How old are you?");

console.log(typeof age,typeof parseInt(age));
//if else
<<<<<<< HEAD
const age = parseInt(prompt("How old are you?"));
console.log(isNaN(age));
if(isNaN(age))
{
    console.log("Please write number");
}else if(age===100){
    console.log("Wow you are wise");
}else if(age<18 || age>50){
    console.log("You are too young,too old");
}else{
    console.log("You can drink");
}
=======
const age = parseInt(prompt("how old are you?"));
console.log(isNaN(age));
if(isNaN(age))
{
    console.log("please write number");
}else if(age===100){
    console.log("wow you are wise");
}else if(age<18 || age>50){
    console.log("you are too young,too old");
}else{
    console.log("you can drink");
}
========
const h1=document.querySelector("div.hello:first-child h1");
function handleTitleClick(){
    if(h1.className==="active"){
        h1.className="";
    }else{
        h1.className="active";
    }

}

h1.addEventListener("click",handleTitleClick);









>>>>>>>> origin/main:app.js
>>>>>>> f800a8bf3eb8d84944b5c8405ba96fe1cc765d19
