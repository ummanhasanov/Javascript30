function playSound(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
        if (!audio) return; // stop any currently playing sounds on the same key
        // playSound(audio);
        audio.currentTime = 0; // rewind to the start
        audio.play();
        key.classList.toggle('playing');
   
}
function removeTransition(e){
    if(e.propertyName !== 'transform') return; // skip it if it's not a transform
    // console.log(this); // == <div data-key="pressed-key" class="key playing">
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

