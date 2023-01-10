
let swiper = new Swiper('.swiper-container', {
    slidesPerGroup:3,
    loop: true,
slidesPerView: 3,
breakpoints: {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20
  },
 1024: {
    slidesPerView: 3,
    spaceBetween: 20
  },
},
spaceBetween: 15,
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true,
  },
  
});

// показать\скрыть галерею

let btnShowGallery = document.querySelector('.gallery__btn'); //кнопка
btnShowGallery.addEventListener('click', showGallery); 
let div = true; // как переключатель
function showGallery (){
  console.log('тык')
  let divContainer = document.querySelector('.gallery__photo-images-container') //блок с картинками
if (div){
  divContainer.classList.add('gallery__photo-images-container-show');
  div = false;
} else{
  divContainer.classList.toggle('gallery__photo-images-container-show')
  div=true;
}
}

// header плавная прокрутка

  const links = document.querySelectorAll('.header__list-a[data-goTo]');
  console.log(links)
  if(links.length > 0) {
    links.forEach(menuLink =>{
      menuLink.addEventListener('click', clickOnMenu)
    })
  }

    function clickOnMenu (e){
      const menuLink = e.target; // сама ссылка
      if( menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto) ){
        const goTo = document.querySelector(menuLink.dataset.goto)
        goTo.scrollIntoView({
          behavior: 'smooth',
        })
        e.preventDefault();
    }
    // мобильная навигация
    if(headerRow.classList.contains('_active')){
      headerRow.classList.remove('_active');
      bodyOverflow.classList.remove('body_lock');
    }
  };


  // карта




// Модальные окна
import modals from "./modals.js";
// отправка формы
import forms from "./forms.js";
// таймер
import timer from "./timer.js";
// модалка галерея
import images from "./images-popUp.js";

window.addEventListener('DOMContentLoaded', ()=>{
  
  modals();
  forms();
  let deadline = '2023-01-19';
  timer('.timer__number-wrapper', deadline)
  images()

})

// мобильная навигация

 const mobileButton = document.querySelector('.header__mobile-nav-img');
 const headerRow = document.querySelector('.header__row');
 const bodyOverflow = document.querySelector('body');
 const closeBtn = document.querySelector('header__mobile-nav-img');
 mobileButton.addEventListener('click', ()=>{

  headerRow.classList.toggle('_active');
  bodyOverflow.classList.toggle('body_lock')
 })



