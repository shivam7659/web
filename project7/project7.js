
async function getSongs(){
    let a = await fetch('https://cuddly-space-trout-pjw9gwx9659crxq9-5500.app.github.dev/project7/songs/');
    let response = await a.text();
    let div=document.createElement('div');
    div.innerHTML=response;
    let as=div.getElementsByTagName('a');
    let songs=[];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith('.mp3')){
            songs.push(element.href);
        }
    }
    return songs;
}


function formatTime(timeInSeconds) {
  let minutes = Math.floor(timeInSeconds / 60);
  let seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
}



async function play(){
  let songs= await getSongs();
  let songUL=document.querySelector('.songList').getElementsByTagName('ul')[0];
  for (let index = 0; index < songs.length; index++) {
    let element = songs[index];
    let lastSlashIndex=element.lastIndexOf('/');
    let openingParenthesisIndex=element.indexOf('(');
    let extractedText=element.slice(lastSlashIndex + 1, openingParenthesisIndex).trim();
    let replacedText=decodeURIComponent(extractedText);
    songUL.innerHTML+=`<li>
    <img src="play.svg" alt="Play Button">
    ${replacedText}
    </li>`
  }
  let currentSong = new Audio(songs[0]);
  let playbtn = document.querySelector('#play');
  let current = document.querySelector('#current-time');
  let total = document.querySelector('#total-time');
   currentSong.addEventListener('timeupdate', function() {
    current.innerHTML = formatTime(currentSong.currentTime);
    let currentInPercent=(currentSong.currentTime/currentSong.duration)*100+"%";
    document.querySelector('.pointer-circle').style.left=currentInPercent;
});

currentSong.addEventListener('loadedmetadata', function() {
    total.innerHTML = formatTime(currentSong.duration);
});

document.querySelector(".seekbar").addEventListener('click',e =>{
  let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
  document.querySelector(".pointer-circle").style.left = percent + "%";
  currentSong.currentTime = ((currentSong.duration) * percent) / 100
})
playbtn.addEventListener('click',()=>{
    if(currentSong.paused){
       currentSong.play();
       playbtn.src="pause.svg";
    }
    else{
        currentSong.pause();
        playbtn.src="play.svg";
    }
    
  })
  
}
play();
