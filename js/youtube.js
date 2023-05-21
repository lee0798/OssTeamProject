const youtubemusic = [
    "https://www.youtube.com/embed/dSlnHz86tew",
    "https://www.youtube.com/embed/wSiJEbfPu6U",
    "https://www.youtube.com/embed/fz2KhVErjqs",
    "https://www.youtube.com/embed/TXWntRQcpK0",
    "https://www.youtube.com/embed/mipIdvWyGZA",
    
    "https://www.youtube.com/embed/hdbrc6nl7OM",
    "https://www.youtube.com/embed/BMW5TB0weSs",
    "https://www.youtube.com/embed/Zdzwer-xoiQ",
    "https://www.youtube.com/embed/H3p7JUZiet0",
    "https://www.youtube.com/embed/UHwJFkfqaaI",
    
    "https://www.youtube.com/embed/nd5GMzxrGYs",
    "https://www.youtube.com/embed/ZVCLJTYqU_8",
    "https://www.youtube.com/embed/S7XLVTMHRmQ",
    "https://www.youtube.com/embed/0K-x_hdW36I",
    "https://www.youtube.com/embed/QMSv28VwWwY",
    
    "https://www.youtube.com/embed/HzG2PeKJIF4",
    "https://www.youtube.com/embed/TnR0D8_4iGk",
    "https://www.youtube.com/embed/m6mAIF-D4L0",

];

function changeIframeUrl(){
    document.getElementById("mainframe").src = youtubemusic[Math.floor(Math.random()*youtubemusic.length)];
}

window.addEventListener('load', changeIframeUrl)

/*코드 리뷰했습니다. - 이하나*/
