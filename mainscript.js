document.getElementById('logo').height = window.innerHeight/5
document.getElementById('logo').width = window.innerWidth/5

let myaud = document.getElementById('myaud');
let myvid = document.getElementById('myvideo');
let landscape = false
let currentSong = 0

let myvids = [
  "singing0.mp4",
  "Rahman_video.mp4"
  ];

let landscapeVideo = "landscape.mp4"

let myauds = [
  "city_gardens.mp3",
  "Tahman_audio.mp3"
]

myvid.src = myvids[currentSong], myaud.src = myauds[currentSong]
myvid.height = window.innerHeight/1.5

function chooseMedia(songNumber){
	currentSong = songNumber

	return(songNumber)
}

function initiate(currentSong){
	myvid.src = myvids[currentSong], myaud.src = myauds[currentSong]
	myvid.play()
	myaud.play()
}

    $(document).on("keydown", function (event) {
        if (event.which == 32) {
        	if (myvid.paused){
        		initiate(currentSong)
        	}
            else if (landscape == false) {
            	myvid.src = landscapeVideo, myvid.currentTime = myaud.currentTime
            	landscape = true
            } else {
            	myvid.src = myvids[currentSong], myvid.currentTime = myaud.currentTime
            	landscape = false
            }
			myvid.play()
        }
    })


function test(){
	myvid.width = window.innerWidth/1.5
	myvid.height = myvid.width/1.777777 

	
		document.getElementById('logo').height = window.innerHeight/5
		document.getElementById('logo').width = window.innerWidth/5
}

// event listeners:

window.addEventListener("resize", test);