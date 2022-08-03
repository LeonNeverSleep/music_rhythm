var timer=null;  
var i=1;
function handlePlay(){
     var btn = document.getElementById('displaybtn');
    if(btn.innerHTML=='| |暂停'){
        stop();
        btn.innerHTML='&#9658; 播放';
    }else{
        play();
        btn.innerHTML='| |暂停';
    }
}
function play(){
    var audio = document.getElementById("audio"); 
    audio.play();
    var bgArray = document.getElementsByName('bg');

    timer = setInterval(switchimg,1000);
    function switchimg(){
        if(i>9){
            i=1;
        }
        if(i<bgArray.length){
            bgArray[i].src='./img/activity_beat_highlight.png'
            bgArray[i-1].src='./img/activity_beat_circle.png'
            console.log(i);
        }
        i++;
    }
}
function stop(){
    var audio = document.getElementById("audio"); 
    clearInterval(timer);
    audio.pause(); 

}
