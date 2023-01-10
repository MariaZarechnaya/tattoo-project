

// }
const modals = function(){
function createModal (triggerSelector, modalSelector, modalCloseSelector, wrapperSelector){
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector (modalSelector);
const modalClose = document.querySelector (modalCloseSelector);
const modalWrapper = document.querySelector (wrapperSelector);
trigger.forEach((item)=>{
item.addEventListener('click', () =>{
      modal.classList.add('pop-up-active');
      document.body.style.overflow = 'hidden';
  
})
})
modalClose.addEventListener('click', ()=>{
    modal.classList.remove('pop-up-active');
    document.body.style.overflow = '';
})
modalWrapper.addEventListener('click', (el) =>{
if(el.target === modalWrapper){
    modal.classList.remove('pop-up-active');
    document.body.style.overflow = '';   
}
})
}
createModal ('[data-modal]', '.pop-up', '[data-close]', '.pop-up__wrapper')
}
export default modals

