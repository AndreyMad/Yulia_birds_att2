const items = [
  {
    template: ` <div class="modal_slider">
    <div class="modal_slider_container">
    
    <picture class="feeder_image active_slide">
      <source srcset="./img/feederHouse/1.jpg"  media="(min-width: 760px)">
      <img src="./img/feederHouse/1_mobile.jpg" alt="Yellow bird house " >
    </picture>
    <picture class="feeder_image inactive_slide">
      <source srcset="./img/feederHouse/2.jpg"  media="(min-width: 760px)">
      <img src="./img/feederHouse/2_mobile.jpg" alt="Yellow bird house " >
    </picture>    
    <picture class="feeder_image inactive_slide">
      <source srcset="./img/feederHouse/3.jpg"  media="(min-width: 760px)">
      <img src="./img/feederHouse/3_mobile.jpg" alt="Yellow bird house ">
    </picture>
    <picture class="feeder_image inactive_slide">
      <source srcset="./img/feederHouse/4.jpg"  media="(min-width: 760px)">
      <img src="./img/feederHouse/4_mobile.jpg" alt="Yellow bird house " >
    </picture>
    <picture class="feeder_image inactive_slide">
      <source srcset="./img/feederHouse/5.jpg"  media="(min-width: 760px)">
      
      <img src="./img/feederHouse/5_mobile.jpg" alt="Yellow bird house ">
    </picture>
    </div>
    <a class="arrow arrow-left modal_inactive_arrow" title="Previous" id="arrow-left"></a>
    <a class="arrow arrow-right modal_active_arrow" title="Next" id="arrow-right"></a>
</div>`,
    name: "feeder_house",
    imgSrc: "./img/yellow_house.jpg",
    about: `Уникальный дизайн не оставит равнодушными абсолютно никого. А продуманная конструкция, с максимально открытой стороной к окну в ваш дом, позволит рассмотреть всех птиц.`,
    volume: " 0,8 л. корма",
    size: "150х370х125 мм.",
    aboutText: `Кормушки выполнены из качественного пластика производства Израиль, не подвергаются внешнему влиянию (не промокают, не гниют, не теряют внешний вид).

    Для крепления на стекло используются качественные, большие прозрачные присоски, хорошо держатся при любой температуре (проверено много раз, 
    
    держатся всю зиму в мороз, снег, дождь). Но даже если вы беспокоитесь, что кормушка может отпасть и улететь, предусмотрена система якорь (страховка), 
    
    одна присоска крепится на окно внутри дома, от которой идет тонкая нить до кормушки.
    
    Кормушки снабжены инструкцией по эксплуатации. При правильном обращении имеют длительный  срок службы.`
  },
  {
    name: "feeder_photo",
    template: ` <div class="modal_slider">
    <div class="modal_slider_container">
    
    <picture class="feeder_image active_slide">
      <source srcset="./img/photo.jpg"  media="(min-width: 760px)">
      <img src="./img/photo_mobile.jpg" alt="Yellow bird house " >
    </picture>
    
    </div>
  
</div>`,
    about: `Премиум кормушка, отлично подойдет на подарок!
    Комплектуется:
    - крафтовая упаковка с древесной стружкой
    - упаковка корма "Hause_for_birds"
    - Инструкция`,
    volume: " 0,8 л. корма",
    size: "160х220х70 мм.",

    aboutText: `Кормушка  изготовлена из акрилового стекла производства Германии. Это кристально прозрачный материал с длительным сроком эксплуатации. В кормушке установлена деревянная деталь для удобной посадки птиц. Сам "Объектив" можно снять, что удобно при чистке.
    Кормушка крепится к окну на три качественные присоски диаметром 40 мм. Крепёж присосок позволяет производить легко их замену. 
    На случай небрежного крепления или грязного стекла, для недопущения потери кормушки, она укомплектована нашей системой "Якорь", состоящей из капронового шнура и декоративного  якоря.
    Кормушка снабжена инструкцией по эксплуатации и при правильном обращении имеют долгий срок службы   
    Если вы хотите рассматривать и фотографировать птиц без помех, то акриловые кормушки для вас!`
  },
  {
    name: "feeder_lodgy",
    template: ` <div class="modal_slider">
    <div class="modal_slider_container">
    
    <picture class="feeder_image active_slide">
      <source srcset="./img/feeder_lodgy.jpg"  media="(min-width: 760px)">
      <img src="./img/feeder_lodgy_mobile.jpg" alt="Yellow bird house " >
    </picture>
    
    </div>
  
</div>`,
    about: `Кормушка для птиц "Лоджия" предназначена для кормления мелких птиц. Кормушка  изготовлена из акрилового стекла производства Германии. Это кристально прозрачный материал с длительным сроком эксплуатации. В кормушке установлена деревянная деталь для удобной посадки птиц.  `,
    volume: "0,3 л. корма",
    size: "110х180х70 мм.",
    aboutText: `Для крепления на стекло используются качественные, большие прозрачные присоски, хорошо держатся при любой температуре (проверено много раз, держатся всю зиму в мороз, снег, дождь). Но даже если вы беспокоитесь, что кормушка может отпасть и улететь, предусмотрена система "Якорь" (страховка), одна присоска крепится на окно внутри дома, от которой идет тонкая нить до кормушки. Кормушки снабжены инструкцией по эксплуатации. При правильном обращении имеют длительный  срок службы  и требуют минимального ухода. Если вы хотите рассматривать и фотографировать птиц без помех, то акриловые кормушки для вас!`
  },
  {
    template: ` <div class="modal_slider">
    <div class="modal_slider_container">
    
    <picture class="feeder_image active_slide">
      <source srcset="./img/teremok.jpg"  media="(min-width: 760px)">
      <img src="./img/teremok_mobile.jpg" alt="Yellow bird house " >
    </picture>
    
    </div>
  
</div>`,
    name: "feeder_teremok",
    about: `Кормушка "Теремок" изготовлена из литого акрилового стекла производства Германии. Это кристально прозрачный материал с длительным сроком эксплуатации. В кормушке установлена деревянная деталь для удобной посадки птиц.`,
    volume: "0,2 л. корма",
    size: `150х130х50 мм.`,
    aboutText: `Для крепления на стекло используются качественные, большие прозрачные присоски, хорошо держатся при любой температуре (проверено много раз, держатся всю зиму в мороз, снег, дождь). Но даже если вы беспокоитесь, что кормушка может отпасть и улететь, предусмотрена система "Якорь" (страховка), одна присоска крепится на окно внутри дома, от которой идет тонкая нить до кормушки. Кормушки снабжены инструкцией по эксплуатации. При правильном обращении имеют длительный  срок службы  и требуют минимального ухода. Если вы хотите рассматривать и фотографировать птиц без помех, то акриловые кормушки для вас!`
  },
  {
    name: "feeder_flamingo",
    about: `Если вы хотите повесить кормушку в саду, сделайте так, чтобы это была не просто кормушка, а яркое решение, которое будет выделятся и привлекать внимание не только птиц но и ваших гостей.

    Наши подвесные кормушки украсят ваш сад и принесут яркие краски в серые зимние дни. 
    
    Палитра цветов позволит выбрать вам то, что больше всего нравится, а качественные материалы прослужат долгие годы.
    
    Крыша и емкость для корма выполнены с прозрачного акрила, боковые части выполнены с дерева, которые покрыты водоустойчивыми матовыми красками. Для подвешивания в комплекте идет крафтовая веревка.`,
    volume: "0,8 л. корма",
    size: `190х210х140 мм.`,
    aboutText: `Если вы ищите вариант для школы, это идеальный и оригинальный вариант все что вам потребуется это крестовая отвертка.
    Возможна отправка в разобранном варианте, где в комплекте будут все детали, предварительно засверлены в местах вкручивания шурупов, шурупы, канат для подвешивания.
    Также возможно заказать без покраски деревянных деталей, и раскрасить их самостоятельно.`,
    template: ` <div class="modal_slider">
    <div class="modal_slider_container">
    
    <picture class="feeder_image active_slide">
      <source srcset="./img/feeder_flamingo/flamingo1.jpg"  media="(min-width: 760px)">
      <img src="./img/feeder_flamingo/flamingo1_mobile.jpg" alt="Yellow bird house ">
    </picture>
    <picture class="feeder_image inactive_slide">
    <source srcset="./img/feeder_flamingo/flamingo2.jpg"  media="(min-width: 760px)">
      <img src="./img/feeder_flamingo/flamingo2_mobile.jpg" alt="Yellow bird house " >
    </picture>    
    <picture class="feeder_image inactive_slide">
    <source srcset="./img/feeder_flamingo/flamingo3.jpg"  media="(min-width: 760px)">
      <img src="./img/feeder_flamingo/flamingo3_mobile.jpg" alt="Yellow bird house " >
    </picture>
    <picture class="feeder_image inactive_slide">
    <source srcset="./img/feeder_flamingo/flamingo4.jpg"  media="(min-width: 760px)">
      <img src="./img/feeder_flamingo/flamingo4_mobile.jpg" alt="Yellow bird house " >
    </picture>
    <picture class="feeder_image inactive_slide">
    <source srcset="./img/feeder_flamingo/flamingo5.jpg"  media="(min-width: 760px)">
      <img src="./img/feeder_flamingo/flamingo5_mobile.jpg" alt="Yellow bird house " >
    </picture>
    <picture class="feeder_image inactive_slide">
    <source srcset="./img/feeder_flamingo/flamingo6.jpg"  media="(min-width: 760px)">
    
    <img src="./img/feeder_flamingo/flamingo6_mobile.jpg" alt="Yellow bird house " >
  </picture>
  <picture class="feeder_image inactive_slide">
  <source srcset="./img/feeder_flamingo/flamingo7.jpg"  media="(min-width: 760px)">  
  <img src="./img/feeder_flamingo/flamingo7_mobile.jpg" alt="Yellow bird house " >
</picture>
    
    
    
    </div>
    <a class="arrow arrow-left modal_inactive_arrow" title="Previous" id="arrow-left" style="box-shadow:3px -3px white inset;;"></a>
    <a class="arrow arrow-right modal_active_arrow" title="Next" id="arrow-right" style="box-shadow:3px -3px white inset;;"> </a>
</div>`
  }
];

function htmlCreate(event) {
  setTimeout(() => {
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
      let modalBuyButton = document.createElement("button");
      modalBuyButton.classList.add("buy_button");
      let modalBuyLink = document.createElement("a");
      modalBuyLink.classList.add("buy_button_link");
      modalBuyLink.textContent = "Купить";
      modalBuyLink.href = "#order_form";

      let volume = document.createElement("span");
      volume.classList.add("modal_volume");
      volume.textContent = ` ${item.volume}`;
      let subscribe = document.createElement("span");
      subscribe.classList.add("modal_subscribe");
      subscribe.textContent = item.aboutText;
      outWrapper.prepend(overlay);
      // outWrapper.append(img);
      overlay.append(modalOutwrapper);

      modalBuyButton.append(modalBuyLink);

      modalOutwrapper.append(innerWrapper);
      sizeName.append(size);
      volumeName.append(volume);
      modalTextContainer.append(
        about,
        sizeName,
        volumeName,
        subscribe,
        modalBuyButton
      );
      modalOutwrapper.append(modalTextContainer);
      innerWrapper.append(closeButton);
      closeButton.addEventListener("click", closeModal);
      modalBtnActivate();
      modalBuyLink.addEventListener("click", closeModal);
    }
  }, 500);
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
