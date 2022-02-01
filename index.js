"use strict";
let isPlay = false;
let play_pause = document.querySelector(".play_pause");
let play_pause2 = document.querySelector(".play_pause2");
let link = document.querySelectorAll(".navigation__link");
let forest = document.querySelector("#forest");
let solov = document.querySelector("#solov");
let drozd = document.querySelector("#drozd");
let malin = document.querySelector("#malin");
let gavor = document.querySelector("#gavor");
let slavka = document.querySelector("#slavka");
let imgFon = document.querySelector(".container_img");
forest.addEventListener("click", playAudio);
solov.addEventListener("click", playAudio);
drozd.addEventListener("click", playAudio);
malin.addEventListener("click", playAudio);
gavor.addEventListener("click", playAudio);
slavka.addEventListener("click", playAudio);
play_pause.addEventListener("click", playAudio2);
play_pause2.addEventListener("click", playAudio2);
const audio = new Audio();
audio.src = `./assets/audio/forest.mp3`;

function playAudio2() {
  if(!isPlay){
    audio.play();
    isPlay = true;
    play_pause.style.display= "none";
    play_pause2.style.display= "block";
  }
  else {
    audio.pause();
    isPlay = false;
    play_pause.style.display= "block";
    play_pause2.style.display= "none";
  }
}
function playAudio(ev) {
  for(let l of link ){
    l.classList.remove("visited");
  }
   let attribute = ev.target.getAttribute("id");
   ev.target.classList.add("visited");    
    audio.src = `./assets/audio/${attribute}.mp3`;
    audio.currentTime = 0;
    audio.play();
    imgFon.style.backgroundImage = `url(./assets/img/${attribute}.jpg)`;
    play_pause.style.display= "none";
    play_pause2.style.display= "block";
    isPlay = true;

  } 
  


/*сохраняем данные языка и темы в localStorage*/
/*let langFirst = "en";
let themaFirst = "false";
let flagRu;

function setLocalStorage() {
  localStorage.setItem("lang", langFirst);
  localStorage.setItem("thema", themaFirst);
  localStorage.setItem("flagRu", flagRu); 
}
window.addEventListener("beforeunload", setLocalStorage)

/* считываем данные языка и темы из localStorage*/
/*function getLocalStorage() {
  if(localStorage.getItem("lang")) {
    langFirst = localStorage.getItem("lang");
    getTranslate(langFirst);
  }
  if(localStorage.getItem("thema") === "true"){
    changeSubject();
  }
  if(localStorage.getItem("flagRu") === "true"){
    rusLang.classList.add("visited");
    engLang.classList.remove("visited");
  }
  if(localStorage.getItem("flagRu") === "false"){
    rusLang.classList.remove("visited");
    engLang.classList.add("visited");
  }
}
window.addEventListener('load', getLocalStorage)

//////перевод//////

};
//////переводчик////
let engLang = document.querySelector(".en");
let rusLang = document.querySelector(".ru");
rusLang.addEventListener("click", translate);
engLang.addEventListener("click", translate);


function translate(event) {
  if (event.target.classList.contains("ru")) {
    langFirst = "ru";
    flagRu = "true";
    getTranslate("ru");
    event.target.classList.add("visited");
    event.target.previousElementSibling.classList.remove("visited");
  } else if (event.target.classList.contains("en")) {
    langFirst = "en";
    flagRu = "false";
    getTranslate("en");
    event.target.classList.add("visited");
    event.target.nextElementSibling.classList.remove("visited");
  }
}

function getTranslate(lang) {
  let elemTranslate = document.querySelectorAll("[data-i18]");
  elemTranslate.forEach((item) => {
    item.textContent = i18Obj[lang][item.dataset.i18];
    if (item.placeholder) {
      item.placeholder = i18Obj[lang][item.dataset.i18];
      item.textContent = "";
    }
  });
}
//////смена темы/////////////
let tema = document.querySelector(".tema__sun");
let temaWhite = document.querySelector(".tema__moon");

tema.addEventListener("click", changeSubject);
temaWhite.addEventListener("click", changeSubject);

let arElem = [
  ".container__price_cards",
  ".titl3",
  ".titl2",
  ".titl",
  ".container__portfolio",
  ".container__video",
  ".container__skills",
  ".container__price",
  ".section__titl",
  ".container__skills_items",
];

function changeSubject() {
  tema.classList.toggle("dispNone");
  temaWhite.classList.toggle("dispNone");
  themaFirst = (tema.classList.contains("dispNone")).toString();
  /*кнопки портфолио меяют color*/
 /* let btnPoffolio = document.querySelectorAll(".bt");
  for (let bt of btnPoffolio) {
    bt.classList.toggle("portfolio__btnWhiteThem");
  }
  /*адаптивное меню-гамбургер меняем фон на белый*/
  /*let main = document.querySelector(".navigation");
  main.classList.toggle("navigationWhite");
  let linkMain = document.querySelectorAll(".navigation__link");
  for (let a of linkMain) {
    a.classList.toggle("openMaimWhitThem");
  }
  ///// /*меняем цвет полосок before after*/ ////
  /*arElem.forEach((item) => {
    let a = document.querySelector(item);
    a.classList.toggle("lit");
    if (
      item === ".section__titl" ||
      item === ".titl" ||
      item === ".titl2" ||
      item === ".titl3"
    ) {
      let v = document.querySelector(item);
      v.classList.toggle("polosa");
    }
  });
}
/////****АДАПТИВНОЕ МЕНЮ*********////////
//вешаем слушатель событий на гамбургер//
/*let list = document.getElementById("list_main"); //<ul>
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", show_menu);

function show_menu() {
  hamburger.classList.toggle("is-active"); //добавляем активный класс <ul> и гамбургеру
  list.classList.toggle("is-active");

  if (tema.classList.contains("dispNone")) {
    let hamburgerLine = document.querySelectorAll(".line");
    for (let a of hamburgerLine) {
      a.classList.toggle("lineWtiteThem");
    }
  }
}

//вешаем прослушиватель событий на на поле <ul>, чтобы закрывать меню/
list.addEventListener("click", closeMenu);

function closeMenu(event) {
  if (event.target.classList.contains("is-active")) {
    hamburger.classList.remove("is-active");
    list.classList.remove("is-active");
    // код, удаляющий класс `is-active`
    //у гамбургер-иконки и у меню при нажатии  на поле <ul>
  }
}

//вешаем прослушиватель событий на сылки, чтобы закрывать меню
//при переходе по ссылкам
let navLinks = document.querySelectorAll(".open");
navLinks.forEach((el) => el.addEventListener("click", closMenu));

function closMenu(event) {
  hamburger.classList.remove("is-active");
  list.classList.remove("is-active");
  // здесь код, удаляющий класс `is-active`
  //у гамбургер-иконки и у меню при нажатии  cсылку,
  //так как мы переходим по ссылке и открытое меню нам больше не нужно
}
/////////////////portfolio IMG////////////////
const portfolioBtns = document.querySelector(".container__portfolio_btn");
const portfolioImages = document.querySelectorAll(".portfolio__card");
portfolioBtns.addEventListener("click", changeImage);

function changeImage(event) {
  for (let i = 0; i < 4; i++) {
    portfolioBtns.children[i].classList.remove("active");
  }
  if (event.target.classList.contains("portfolio__btn")) {
    let dataAttribute = event.target.dataset.season;
    event.target.classList.add("active");
    event.stopPropagation();
    // перебираем массив рисунков и выбираем нужный src изображения исходя из dataAttribute
    portfolioImages.forEach(
      (img, index) =>
        (img.src = `./assets/img/${dataAttribute}/${index + 1}.jpg`)
    );
  }
}
///////кэшируем изображения/////////
const seasons = ["winter", "spring", "summer", "autumn"];
seasons.forEach((item) => {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/${item}/${i}.jpg`;
  }
});


*/