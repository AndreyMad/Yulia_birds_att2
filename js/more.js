const items = [
  {
    
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
    let closeButton = document.createElement('div');
    closeButton.classList.add('close_button');
    closeButton.textContent = 'X';
    let modalOutwrapper = document.createElement('div')
    modalOutwrapper.classList.add('modal_out_wrapper')

    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    let innerWrapper = document.createElement("div");
    innerWrapper.classList.add("modal_innerWrapper");
    let img =document.createElement('img');
    img.classList.add('modal_img')
    img.src=outWrapper.dataset.src;
    
    
    
    
    
    
    
    
    
    
    
    
    outWrapper.prepend(overlay);
    outWrapper.append(img)
    overlay.append(modalOutwrapper);
    modalOutwrapper.append(innerWrapper)
    innerWrapper.append(img, closeButton)
    closeButton.addEventListener('click', closeModal)

  }
}

function closeModal(){
  let overlay = document.querySelector('.overlay')
 overlay.remove()
}


window.addEventListener("click", htmlCreate);
