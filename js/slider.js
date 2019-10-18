let giftSetSlides = document.querySelectorAll('.giftSet_slide');
const leftButton = document.querySelector('.svg_leftArrow')
const rightButton = document.querySelector('.svg_rightArrow')

function nextSlide(){
    let activeSlide = document.querySelector('.gift_active');
    if(!activeSlide.previousElementSibling){
        leftButton.classList.remove('inActive_button')
        leftButton.classList.add('active_button')
    }
    if(activeSlide.nextElementSibling){
    activeSlide.classList.remove('gift_active');
    activeSlide.classList.add('go_left')
    activeSlide.nextElementSibling.classList.remove('go_right')
    activeSlide.nextElementSibling.classList.add('gift_active')
    let newActiveSlide = document.querySelector('.gift_active');
    if(!newActiveSlide.nextElementSibling){
        rightButton.classList.remove('active_button')
        rightButton.classList.add('inActive_button')
    }
    }
}
function previousSlide(){
    let activeSlide = document.querySelector('.gift_active');
    if(!activeSlide.nextElementSibling){
        rightButton.classList.remove('inActive_button')
        rightButton.classList.add('active_button')
    }

    if(activeSlide.previousElementSibling){
    activeSlide.classList.remove('gift_active');
    activeSlide.classList.add('go_right')
    activeSlide.previousElementSibling.classList.remove('go_left')
    activeSlide.previousElementSibling.classList.add('gift_active')    
    let newActiveSlide = document.querySelector('.gift_active');
   
    if(!newActiveSlide.previousElementSibling){
        leftButton.classList.add('inActive_button')
        leftButton.classList.remove('active_button')
    }
    
}
}



rightButton.addEventListener('click', nextSlide)
leftButton.addEventListener('click', previousSlide)