const items = [
  {
    template: ` <div class="modal_slider">
    <div class="modal_slider_container">
    
    <picture class="feeder_image active_slide">
      <source srcset="./img/feeder_flamingo/feeder1.jpg"  media="(min-width: 760px)">
      <img src="./img/feederHouse/1.jpg" alt="Yellow bird house " >
    </picture>
    <picture class="feeder_image inactive_slide">
      <source srcset="./img/feeder_flamingo/feeder3.jpg"  media="(min-width: 760px)">
      <img src="./img/feederHouse/2.jpg" alt="Yellow bird house " >
    </picture>    
    <picture class="feeder_image inactive_slide">
      <source srcset="./img/feeder_flamingo/feeder2.jpg"  media="(min-width: 760px)">
      <img src="./img/feederHouse/3.jpg" alt="Yellow bird house ">
    </picture>
    <picture class="feeder_image inactive_slide">
      <source srcset="./img/feeder_flamingo/feeder4.jpg"  media="(min-width: 760px)">
      <img src="./img/feederHouse/4.jpg" alt="Yellow bird house " >
    </picture>
    <picture class="feeder_image inactive_slide">
      <source srcset="./img/feeder_flamingo/feeder5.jpg"  media="(min-width: 760px)">
      
      <img src="./img/feederHouse/5.jpg" alt="Yellow bird house ">
    </picture>
    </div>
    <a class="arrow arrow-left modal_inactive_arrow" title="Previous" id="arrow-left"></a>
    <a class="arrow arrow-right modal_active_arrow" title="Next" id="arrow-right"></a>
</div>`,
    name: "feeder_house",
    imgSrc: "./img/yellow_house.jpg",
    about: `Кормушка "Теремок" изготовлена из литого акрилового стекла производства Германии. Это кристально прозрачный материал с длительным сроком 
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
    about: `.modal_sizeилового стекла производ-
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
    name: "feeder_flamingo",
    template: ` <div class="modal_slider">
    <div class="modal_slider_container">
    
    <picture class="feeder_image active_slide">
      <source srcset="./img/feeder_flamingo/feeder1.jpg"  media="(min-width: 760px)">
      <img src="./img/feederHouse/5.jpg" alt="Yellow bird house ">
    </picture>
    <picture class="feeder_image inactive_slide">
    <source srcset="./img/feeder_flamingo/feeder2.jpg"  media="(min-width: 760px)">
      <img src="./img/feeder_flamingo/feeder2_mobile.jpg" alt="Yellow bird house " >
    </picture>    
    <picture class="feeder_image inactive_slide">
    <source srcset="./img/feeder_flamingo/feeder3.jpg"  media="(min-width: 760px)">
      <img src="./img/feeder_flamingo/feeder3_mobile.jpg" alt="Yellow bird house " >
    </picture>
    <picture class="feeder_image inactive_slide">
    <source srcset="./img/feeder_flamingo/feeder4.jpg"  media="(min-width: 760px)">
      <img src="./img/feeder_flamingo/feeder4_mobile.jpg" alt="Yellow bird house " >
    </picture>
    <picture class="feeder_image inactive_slide">
    <source srcset="./img/feeder_flamingo/feeder5.jpg"  media="(min-width: 760px)">
      <img src="./img/feeder_flamingo/feeder5_mobile.jpg" alt="Yellow bird house " >
    </picture>
    <picture class="feeder_image inactive_slide">
    <source srcset="./img/feeder_flamingo/feeder6.jpg"  media="(min-width: 760px)">
    
    <img src="./img/feeder_flamingo/feeder6_mobile.jpg" alt="Yellow bird house " >
  </picture>
  <picture class="feeder_image inactive_slide">
  <source srcset="./img/feeder_flamingo/feeder7.jpg"  media="(min-width: 760px)">  
  <img src="./img/feeder_flamingo/feeder7_mobile.jpg" alt="Yellow bird house " >
</picture>
    
    
    
    </div>
    <a class="arrow arrow-left modal_inactive_arrow" title="Previous" id="arrow-left"></a>
    <a class="arrow arrow-right modal_active_arrow" title="Next" id="arrow-right"></a>
</div>`
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
    let modalTextContainer = document.createElement("div");
    modalTextContainer.classList.add("modal_text_container");

    let about = document.createElement("span");
    about.textContent = item.about;
    about.classList.add("modal_about");
    let sizeName = document.createElement("span");
    sizeName.classList.add("size_name");
    sizeName.textContent = "Размеры В*Ш*Г:";

    let size = document.createElement("span");
    size.classList.add("modal_size");
    size.textContent = `${" "}${item.size}`;
    let volumeName = document.createElement("span");
    volumeName.classList.add("volume_name");
    volumeName.textContent = "Вместительность:";

    let volume = document.createElement("span");
    volume.classList.add("modal_volume");
    volume.textContent = ` ${item.volume}`;
    let subscribe = document.createElement("span");
    subscribe.classList.add("modal_subscribe");
    subscribe.textContent = item.aboutText;
    outWrapper.prepend(overlay);
    // outWrapper.append(img);
    overlay.append(modalOutwrapper);
    modalOutwrapper.append(innerWrapper);
    sizeName.append(size);
    volumeName.append(volume);
    modalTextContainer.append(about, sizeName, volumeName, subscribe);
    innerWrapper.append(modalTextContainer);
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
