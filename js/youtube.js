const youtubemusic = [
    "https://www.youtube.com/embed/dSlnHz86tew",
    "https://www.youtube.com/embed/wSiJEbfPu6U",
    "https://www.youtube.com/embed/fz2KhVErjqs",
    "https://www.youtube.com/embed/TXWntRQcpK0",
    "https://www.youtube.com/embed/mipIdvWyGZA",
    "https://www.youtube.com/embed/hdbrc6nl7OM",
];

function changeIframeUrl(){
    document.getElementById("mainframe").src = youtubemusic[Math.floor(Math.random()*youtubemusic.length)];
}

window.addEventListener('load', changeIframeUrl)
