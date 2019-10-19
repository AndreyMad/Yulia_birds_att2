const items = [
  {
    template: ` <div class="modal_slider">
    <div class="modal_slider_container">
        <img src="./img/feederHouse/1.jpg" alt="Yellow bird house " class="feeder_image active_slide">

        <img src="./img/feederHouse/2.jpg" alt="Yellow bird house " class="feeder_image inactive_slide">
        <img src="./img/feederHouse/3.jpg" alt="Yellow bird house " class="feeder_image inactive_slide">
        <img src="./img/feederHouse/4.jpg" alt="Yellow bird house " class="feeder_image inactive_slide">
        <img src="./img/feederHouse/5.jpg" alt="Yellow bird house " class="feeder_image inactive_slide">
     
       
    </div>
    <a class="arrow arrow-left modal_inactive_arrow" title="Previous" id="arrow-left"></a>

    <a class="arrow arrow-right modal_active_arrow" title="Next" id="arrow-right"></a>
</div>`,
    name: "feeder_house",
    imgSrc: "./img/yellow_house.jpg",
    about: `Кормушка "Теремок" изготовлена из литого акрилового стекла производ-
        ства Германии. Это кристально прозрачный материал с длительным сроком 
        эксплуатации. В кормушке установлена деревянная деталь для удобной по-
        садки птиц.`,
    volume: " 0,2 л. корма",
    size: "150х130х50 мм.",
    aboutText: `Для крепления на стекло используются качественные, большие прозрачные 
        присоски, хорошо держатся при любой температуре (проверено много раз, 
        держатся всю зиму в мороз, снег, дождь). Но даже если вы беспокоитесь, что 
        кормушка может отпасть и улететь, предусмотрена система "Якорь" (страхо-
        вка), одна присоска крепится на окно внутри дома, от которой идет тонкая 
        нить до кормушки. Кормушки снабжены инструкцией по эксплуатации. При 
        правильном обращении имеют длительный  срок службы  и требуют минима-
        льного ухода. Если вы хотите рассматривать и фотографировать птиц без 
        помех, то акриловые кормушки для вас!`
  },
  {
    name: "feeder_photo",
    about: `Кормушка "Теремок" изготовлена из литого акрилового стекла производ-
        ства Германии. Это кристально прозрачный материал с длительным сроком 
        эксплуатации. В кормушке установлена деревянная деталь для удобной по-
        садки птиц.`,
    volume: " 0,2 л. корма",
    size: "150х130х50 мм.",

    aboutText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis mollitia nam dicta! Voluptas quidem nisi animi culpa expedita accusamus? Nisi est exercitationem ipsam, consequatur beatae voluptas ullam facilis facere? Neque sit accusantium debitis quis a quae consectetur iusto, ut voluptate omnis eaque corporis, rerum, quasi id harum perferendis quo corrupti?`
  },
  {
    name: "feeder_lodgy"
  },
  {
    name: "feeder_teremok"
  },
  {
    name: "feeder_flamingo"
  }
];

function htmlCreate(event) {
  if (event.target.classList == "feeder_details") {
    const outWrapper = event.target.closest(".feeder_out_wrapper");
    let item = items.find(el => el.name === outWrapper.dataset.name);

    let closeButton = document.createElement("div");
    closeButton.classList.add("close_button");
    closeButton.textContent = "X";
    let modalOutwrapper = document.createElement("div");
    modalOutwrapper.classList.add("modal_out_wrapper");

    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    let innerWrapper = document.createElement("div");
    innerWrapper.classList.add("modal_innerWrapper");
    innerWrapper.innerHTML = item.template;

    // let img = document.createElement("img");
    // img.classList.add("modal_img");
    // img.src = outWrapper.dataset.src;

    outWrapper.prepend(overlay);
    // outWrapper.append(img);
    overlay.append(modalOutwrapper);
    modalOutwrapper.append(innerWrapper);

    innerWrapper.append(closeButton);
    closeButton.addEventListener("click", closeModal);
    modalBtnActivate();
  }
}

function closeModal() {
  let overlay = document.querySelector(".overlay");
  overlay.remove();
}

window.addEventListener("click", htmlCreate);

let modalButtons = document.querySelectorAll(".arrow");

function modalBtnActivate() {
  let modalButtons = document.querySelectorAll(".arrow");
  console.log(modalButtons);
  modalButtons.forEach(el => {
    el.addEventListener("click", modalSlider);
  });
}

function modalSlider({ target }) {
  let modalButtons = document.querySelectorAll(".arrow");
  let modalSlidesWrapper = target.closest(".modal_slider").childNodes[1];
  let modalSlidesAll = Array.from(
    modalSlidesWrapper.querySelectorAll(".feeder_image")
  );

  let activeSlide = modalSlidesAll.find(el => {
    return el.classList.contains("active_slide");
  });
  //right slide
  if (target.classList.contains("arrow-right")) {
    if (!activeSlide.previousElementSibling) {
      modalButtons[0].classList.replace(
        "modal_inactive_arrow",
        "modal_active_arrow"
      );
    }
    if (activeSlide.nextElementSibling) {
      activeSlide.classList.replace("active_slide", "inactive_slide");
      activeSlide.nextElementSibling.classList.replace(
        "inactive_slide",
        "active_slide"
      );
      let newActiveSlide = document.querySelector(".active_slide");
      if (!newActiveSlide.nextElementSibling) {
        target.classList.replace("modal_active_arrow", "modal_inactive_arrow");
      }
    }
  }
  //left slide
  else if (target.classList.contains("arrow-left")) {
    if (!activeSlide.nextElementSibling) {
      modalButtons[1].classList.replace(
        "modal_inactive_arrow",
        "modal_active_arrow"
      );
    }
    if (activeSlide.previousElementSibling) {
      activeSlide.classList.replace("active_slide", "inactive_slide");
      activeSlide.previousElementSibling.classList.replace(
        "inactive_slide",
        "active_slide"
      );
      let newActiveSlide = document.querySelector(".active_slide");
      if (!newActiveSlide.previousElementSibling) {
        target.classList.replace("modal_active_arrow", "modal_inactive_arrow");
      }
    }
  }
}
