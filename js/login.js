const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");  //documnert가 아니라 loginForm에서 찾을수있다.
const greeting = document.querySelector("#geeting")

const USERNAME = "username"
function onLoginSubmitClick(event){
  event.preventDefault();  //이벤트에 기본동작을 막는다
  loginForm.classList.add("hiden")
  const username = loginInput.value;
  localStorage.setItem(USERNAME, username)
  painGreeting(username)
}

function painGreeting(username){
  greeting.innerText = "Welcome to Diney calendar princess " + username
}

const savedUsername = localStorage.getItem(USERNAME)

if(savedUsername === null){
  loginForm.classList.remove("hiden");
  loginForm.addEventListener("submit", onLoginSubmitClick);
}else{
  painGreeting(savedUsername)
}

window.addEventListener('load',()=>{
    if(savedUsername){
        localStorage.removeItem(USERNAME)
    }
})
    
// 코드확인했습니다. -이승현
