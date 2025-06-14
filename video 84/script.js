let currentsong = new Audio();
let songs;
let currfolder;
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}
async function getSongs(folder) {
    currfolder = folder;
    let a = await fetch(`/${folder}/`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let atags = div.getElementsByTagName("a");

    songs = [];
    for (let i = 0; i < atags.length; i++) {
        const element = atags[i];
        if (element.href.endsWith(".mp3")) { // Fetch all MP3 files
            let filename = element.href.split(`/${folder}/`).pop().replaceAll("%20", " ");
    let [artist, songName] = filename.replace("[NCS Release].mp3", "").split(" - ");
            songs.push({ songName, artist, filename });
        }
    }

    let songsUL = document.querySelector(".songlist ul");
    songsUL.innerHTML = "";
    for (const song of songs) {
        songsUL.innerHTML += `
            <li class="color flex items-center bg-color2 fontsize2 ">
                <div class="music bg-color"><img src="/svgs/music.svg"></div>
                <div class="info flex items-center cgap">
                <div class="song-title">${song.songName || "Unknown Title"}</div>
                <div class="artist-name">${song.artist || "Unknown Artist"}</div>
                    
                    </div>
                    <div class="playnow flex items-center cgap">
                        <span>Play Now</span>
                        <img src="/svgs/play3.svg" id="play">
                    </div>
            </li>`;
    }

    document.querySelectorAll(".playnow img").forEach(playBtn => {
        playBtn.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent li click event
            let songTitle = playBtn.closest("li").querySelector(".song-title").textContent.trim();
            playMusic(songTitle);
        });
    });
    
    return songs;
}

function playMusic(songTitle) {
    let songObj = songs.find(s => s.songName.trim() === songTitle.trim());
    if (!songObj) {
        console.error("Song not found:", songTitle);
        return;
    }

    let songPath = `songs/${songObj.filename}`;
    console.log("Playing:", songPath); // Debugging output

    currentsong.src = songPath;
    currentsong.play();
}

// Fetch songs from 'songs' folder
getSongs("songs");

const playthemusic=(track,pause=true)=>{
    currentSong.src=`/${currFolder}/`+track
    if(pause){
        currentSong.play()
        play.src="/svgs/pause.svg"
    }
    document.querySelector("songinfo").innerHTML=decodeURI(track)
    document.querySelector("songtime").innerHTML="00:00/00:00"
}
async function displayAlbums() {
    console.log("displaying albums")
    let a=await fetch(`/songs`)
    let response=await a.text();
    let div=document.createElement("div")
    div.innerHTML=response;
    let anchors=div.getElementsByTagName("a")
    let cardcntr=document.querySelector(".cardcntr")
    let array=Array.from(anchors)
    for (let i = 0; i < array.length; i++) {
        const e = array[i];
        if(e.href.includes("/songs")&&e.href.includes(".htaccess")){
            let folder=e.href.split("/").slice(-2)[0]
            
            let a2=await fetch(`/songs${folder}/info.json`)
            let response2=await a2.json();
            cardcntr.innerHTML=cardcntr.innerHTML+`<div data-folder="${folder}" class="card">
            <div class="playy">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
            stroke-linejoin="round" />
            </svg>
            </div>
            <img src="/songs/${folder}/cover.jpg" alt=""
            <h2>${response.title}</h2>
            <p>${response.description}</p>
            </div>`
            }
    }
    Array.from(document.getElementsByClassName("card")).forEach(e=>{
        e.addEventListener("click",async (item) => {
            console.log("fetching songs")
            songs=await getSongs('songs/${item.currentTarget.data.folder}')
            playthemusic(songs[0])
        })
    })
}
async function main() {
    await getSongs("songs")
    playthemusic(songs[0],false)
    await displayAlbums()
    play.addEventListener("click",()=>{
        if(currentSong.paused){
            currentSong.play()
            play.src="img/pause.svg"
        }
    })
    currentSong.addEventListener("timeupdate",()=>{
        document.querySelector(".songtime").innerHTML=`${secondsToMinutesSeconds(currentSong.currentTime)}/${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left=(currentSong.currentTime/currentSong.duration)*100+"%";
    })
    document.querySelector(".seekbar").addEventListener("click",e=>{
        let percent=(e.offsetX/e.target.getBoundingClientRect().width)*100;
        currentSong.currentTime=((currentSong.duration)*percent)/100
        })
        document.querySelector(".hamburger").addEventListener("click",()=>{
            document.querySelector(".left").style.left="0"
        })
        document.querySelector(".close").addEventListener("click",()=>{
            document.querySelector(".left").style.left="-120%"
        })
        previous.addEventListener("click",()=>{
            currentSong.pause()
            console.log('Previous clicked');
            let index=songs.indexOf(currentSong.src.split("/").slice(-1)[0])
            if((index-1)>=0){
                playthemusic(songs[index-1])
            }
            
        })
        next.addEventListener("click",()=>{
            currentSong.pause()
            console.log("Next clicked")
            let index=songs.indexOf(currentSong.src.split("/").slice(-1)[0])
            if((index+1)<songs.length){
                playthemusic(songs[index+1])
            }
        })
        document.querySelector(".range").getElementsByTagName("input")[0].
        addEventListener("change",(e)=>{
          console.log("Setting volume to",e.target.value,"/100")
          currentSong.volume=pareInt(e.target.value/100)
          if(currentSong.volume>0){
            document.querySelector(".volume>img").src=document.querySelector(".volume>img").src.replace("/svgs/mute.svg","/svgs/volume.svg")
          }
          

        })
        document.querySelector(".volume>img").
        addEventListener("click",e=>{
            if(e.target.src.includes("volume.svg"))
            {
                e.target.src=e.target.src.replace("/svgs/volume.svg","/svgs/mute.svg")
                currentSong.volume=0;
                document.querySelector(".range").getElementsByTagName("input")[0].value=0;
            }
            else{
                e.target.src=e.target.src.replace("/svgs/mute.svg","/svgs/volume.svg")
                currentSong.volume=.10;
                document.querySelector(".range").getElementsByTagName("input")[0].value=10;
            }
        })
}
main()

