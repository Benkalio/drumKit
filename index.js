window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    if(!audio) return; //STOPS THE ABOVE FUNCTION FROM RUNNING WHEN LETTER HAS NO AUDIO
    
    audio.currentTime = 0; //GO BACK TO THE STARTING
    audio.play();
})