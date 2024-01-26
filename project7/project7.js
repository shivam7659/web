let currentSong=new Audio();
let songs;
async function getSongs(){
    let a = await fetch('https://cuddly-space-trout-pjw9gwx9659crxq9-5500.app.github.dev/project7/songs/');
    let response = await a.text();
    let div=document.createElement('div');
    div.innerHTML=response;
    let as=div.getElementsByTagName('a');
    console.log(as);
    let songs=[];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith('.mp3')){
            songs.push(element);
        }
    }
    return songs;
}
getSongs();