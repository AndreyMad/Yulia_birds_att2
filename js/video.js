let playButton = document.querySelector('.video_play_button')
let video = document.querySelector('#video')

function playVideo() {
    video.setAttribute('controls', true)
    video.play()
    playButton.classList.add('inactive')
}




playButton.addEventListener('click', playVideo)
