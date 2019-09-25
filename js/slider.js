let giftSetSlides = document.querySelectorAll('.giftSet_slide');
const leftButton = document.querySelector('.svg_leftArrow')
const rightButton = document.querySelector('.svg_rigthArrow')

function nextSlide(){
    let activeSlide = document.querySelector('.gift_active');
    if(activeSlide.nextElementSibling){
    activeSlide.classList.remove('gift_active');
    activeSlide.classList.add('go_left')
    activeSlide.nextElementSibling.classList.remove('go_right')
    activeSlide.nextElementSibling.classList.add('gift_active')
    }
}
function previousSlide(){
    let activeSlide = document.querySelector('.gift_active');
    if(activeSlide.previousElementSibling){
    activeSlide.classList.remove('gift_active');
    activeSlide.classList.add('go_right')
    activeSlide.previousElementSibling.classList.remove('go_left')
    activeSlide.previousElementSibling.classList.add('gift_active')
    }
}



rightButton.addEventListener('click', nextSlide)
leftButton.addEventListener('click', previousSlide)