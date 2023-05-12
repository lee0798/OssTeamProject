const quotes = [
  {
    quote: "항상 너의 양심이 시키는대로 해.",
    author: "피노키오",
  },
  {
    quote: "넌 나한테 이 세상 어떤 것보다 의미 있어.",
    author: "피터팬",
  },
  {
    quote: "오늘 특별한 순간들은 내일의 추억이에요.",
    author: "알라딘",
  },
  {
    quote: "사랑은 쓰는 게 아니야, 느끼는 거지.",
    author: "곰돌이 푸",
  },
  {
    quote: "행복이 네가 있는 곳에 있다는 걸 깨닫는 날이 올 거야.",
    author: "모아나",
  },
  {
    quote: "최고의 순간은 갑자기 찾아오는 거야.",
    author: "니모를 찾아서",
  },
  {
    quote: "널 억누르던 것들이 널 일으켜 줄 거야",
    author: "맘보",
  },
  {
    quote: "난 지금 잠깐 넘어졌지만 다시 일어날 거야.",
    author: "밤비",
  },
  {
    quote: "오직 내가 할 수 있는 건 다음 할 일을 하는 것뿐이야.",
    author: "겨울왕국",
  },
];
//수정 완료했습니다. - 이하나

const quoteDiv = document.querySelector('#quote')
const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote span:last-child");
const calendarhead = document.getElementsByClassName('header')

function changeQuote(){
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = "'" + todaysQuote.quote + "'";
author.innerText = "-" + todaysQuote.author + "-";
}

window.addEventListener('load', changeQuote)
// 코드 확인했습니다. -이승현
