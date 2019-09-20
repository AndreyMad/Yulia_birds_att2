"use strict";
let previousBtn = document.querySelector(".previous");
let nextBtn = document.querySelector(".next");
let slides = document.querySelectorAll(".slide");
let sliderDots = document.querySelectorAll(".slider-dots_item");
let dotsWrapper = document.querySelector(".dots_wrapper");

slides[0].style.zIndex = "1";
function nextSlide() {
  let activeEl = document.querySelector(".active");
  let activeDot = document.querySelector(".activeDot");
  if (activeEl.nextElementSibling) {
    for (let slide of slides) {
      slide.classList.remove("active");
    }
    activeEl.nextElementSibling.classList.add("active");
    activeDot.classList.remove("activeDot");
    activeDot.nextElementSibling.classList.add("activeDot");
    siblingDot();
    previousBtn.classList.add("slider_buttons__hover");
  }
  if (!activeEl.nextElementSibling)
    this.classList.remove("slider_buttons__hover");
}
function previousSlide() {
  let activeEl = document.querySelector(".active");
  let activeDot = document.querySelector(".activeDot");
  if (activeEl.previousElementSibling) {
    activeEl.classList.remove("active");
    activeDot.classList.remove("activeDot");
    activeDot.previousElementSibling.classList.add("activeDot");
    activeEl.previousElementSibling.classList.add("active");
    siblingDot();
    nextBtn.classList.add("slider_buttons__hover");
  }
  if (!activeEl.previousElementSibling)
    this.classList.remove("slider_buttons__hover");
}

nextBtn.addEventListener("click", nextSlide);
previousBtn.addEventListener("click", previousSlide);

function siblingDot() {
  let activeDot = document.querySelector(".activeDot");
  for (let el of sliderDots) {
    el.classList.remove("halfActiveDot");
  }
  if (activeDot.nextElementSibling) {
    activeDot.nextElementSibling.classList.add("halfActiveDot");
  }

  if (activeDot.previousElementSibling) {
    activeDot.previousElementSibling.classList.add("halfActiveDot");
  }
  // activeDot.previousElementSibling.classList.add("halfActiveDot");
}
function goToSlide({ target }) {
  if (target.dataset.number) {
    for (let slide of slides) {
      slide.classList.remove("active");
    }
    for (let dot of sliderDots) {
      dot.classList.remove("activeDot");
    }
    sliderDots[target.dataset.number].classList.add("activeDot");
    siblingDot();
    slides[target.dataset.number].classList.add("active");
  }
}
dotsWrapper.addEventListener("click", goToSlide);
function touching(e) {
  console.log(object);
}

let giftSlides = document.querySelectorAll(".giftSet_sliderItem");
let controlButtonsGift = document.querySelector(".giftSet_controls_wrapper");

giftSlides[0].classList.add("giftSetActive");
function giftSlider({ target }) {
  let activeSlide = document.querySelector(".giftSetActive");

  if (target.classList.contains("next")) {
    if (activeSlide.nextElementSibling) {
      activeSlide.classList.remove("giftSetActive");
      activeSlide.nextElementSibling.classList.add("giftSetActive");
    }
  }
  if (target.classList.contains("previous")) {
    if (activeSlide.previousElementSibling) {
      activeSlide.classList.remove("giftSetActive");
      activeSlide.previousElementSibling.classList.add("giftSetActive");
    }
  }
}
controlButtonsGift.addEventListener("click", giftSlider);
