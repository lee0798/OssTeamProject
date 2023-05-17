const clock = document.querySelector('#clock')

function getClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, '0')
    const minute = String(date.getMinutes()).padStart(2, '0')
    const sec = String(date.getSeconds()).padStart(2, '0')
    clock.innerText = `${hour}:${minute}:${sec}`
}
getClock();

setInterval(getClock, 1000)  // 5초마다 반복호출
//setTimeout(sayHello, 5000)  // 5초뒤에 호출

// 코드 확인했습니다. -이승현
