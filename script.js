console.log("Welcome to Spotify!");
//Initialize the variables
let songindex = 0;
let AudioElement = new Audio('/CSS Course/Spotify Clone/songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let progress = document.getElementById('progress');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songName: "Salam-e-Ishq", filePath: "/CSS Course/Spotify Clone/songs/1.mp3", coverPath: "/CSS Course/Spotify Clone/covers/1.jpg"},
    {songName: "Bekhayam", filePath: "/CSS Course/Spotify Clone/songs/2.mp3", coverPath: "/CSS Course/Spotify Clone/covers/2.jpg"},
    {songName: "Song3", filePath: "/CSS Course/Spotify Clone/songs/3.mp3", coverPath: "/CSS Course/Spotify Clone/covers/3.jpg"},
    {songName: "Song4", filePath: "/CSS Course/Spotify Clone/songs/4.mp3", coverPath: "/CSS Course/Spotify Clone/covers/4.jpg"},
    {songName: "Song5", filePath: "/CSS Course/Spotify Clone/songs/5.mp3", coverPath: "/CSS Course/Spotify Clone/covers/5.jpg"},
    {songName: "Song6", filePath: "/CSS Course/Spotify Clone/songs/6.mp3", coverPath: "/CSS Course/Spotify Clone/covers/6.jpg"},
]
let gif= document.getElementById('gif');

songitem.forEach(function(element, i){
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerHTML = songs[i].songName;
}
);



//Listen to events


//Play the song
masterplay.addEventListener('click', function(){
    if(AudioElement.paused|| AudioElement.ended|| AudioElement.currentTime===0){ 
        AudioElement.play();
        masterplay.classList.add('fa-pause-circle');
        masterplay.classList.remove('fa-play-circle');
        gif.style.opacity =1;
          
    }
    else{
        AudioElement.pause();
        masterplay.classList.add('fa-play-circle');
        masterplay.classList.remove('fa-pause-circle');
        gif.style.opacity =0;

    }
}); 
AudioElement.addEventListener('timeupdate', () => {
    //update seekbar
    let position = AudioElement.currentTime / AudioElement.duration;
    progress.value=position; 
});

progress.addEventListener('change', () => {
    AudioElement.currentTime = AudioElement.duration * progress.value/100;

}
);

//play each song on play button
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach(function(element, i){
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach(function(element, i){
    element.addEventListener('click', function(){
        makeAllPlay();
        index=parseInt(element.target.id);
        element.target.classList.add('fa-pause-circle');
        element.target.classList.remove('fa-play-circle');
        AudioElement.src = "/CSS Course/Spotify Clone/songs/${index+1}.mp3";
        AudioElement.currentTime = 0;
        AudioElement.play();
        masterplay.classList.add('fa-pause-circle');
        masterplay.classList.remove('fa-play-circle');
        gif.style.opacity =1;
    }
    )
}
);





// AudioElement.play();