const time=document.getElementById("time");
setInterval(function(){
    let date=new Date();
    time.innerText=date.toLocaleTimeString();
},1000)