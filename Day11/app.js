// get our elements  
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const control = player.querySelector('.player__controllers')

// build out functions
function togglePlay() {
    video.paused ? video.play() : video.pause();
}

function updateButton() {
    const icon = this.paused ? '&#9654;' : '&#9707;';
    toggle.innerHTML = icon;
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip); // parse string to float
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
    progressBar.style.width = `${percent}%`;
}


function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progress.style.width = `${percent}%`;
}

// function updateProgress() {
//     progressBar.style.width = (video.currentTime / video.duration) * 100;
// }


// function toggleFullScreen() {
//     if (video.requestFullscreen) {
//         video.requestFullscreen();
//     } else if (video.mozRequestFullScreen) {
//         video.mozRequestFullScreen();
//     } else if (video.webkitRequestFullscreen) {
//         video.webkitRequestFullscreen();
//     } else if (video.msRequestFullscreen) {
//         video.msRequestFullscreen();
//     }
// }

// function toggleMute() {
//     video.muted = !video.muted;
// }



// hook up the event listeners

video.addEventListener('loadedmetadata', () => {
    toggle.addEventListener('click', togglePlay); // play or pause when clicking to play button
    video.addEventListener('click', togglePlay); // play or pause when clicking to video
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    video.addEventListener('timeupdate', handleProgress);

    skipButtons.forEach(button => button.addEventListener('click', skip));
    ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
    ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
    progress.addEventListener('click', scrub);
});








// video.addEventListener('ended', togglePlay);
// video.addEventListener('timeupdate', updateProgress);
// video.addEventListener('click', toggleFullScreen);

// skipButtons.addEventListener('click', function(e) {
//     e.preventDefault();
//     video.currentTime += e.target.dataset.skip;
// });

// ranges.addEventListener('input', function(e) {
//     video.currentTime = e.target.value;
// });

// video.addEventListener('volumechange', function(e) {
//     progressBar.style.width = e.target.volume * 100 + '%';
// });

// video.addEventListener('click', toggleMute);