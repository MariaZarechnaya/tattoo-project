const images = () =>{
    const container = document.querySelector('.gallery__photo-images-block');
    const popUp = document.querySelector('.pop-up__images');
    const wrapper = document.querySelector ('.pop-up__wrapper-images');
    const bigImg = document.querySelector('.pop-up-change-img');
    



    container.addEventListener('click', (e)=>{
        console.log('клик')
        e.preventDefault();
        let target = e.target;
        if (target && target.classList.contains('gallery__photo-images-img')){
            popUp.classList.add('pop-up-active');
            document.body.style.overflow = 'hidden';
            let path = target.parentNode.getAttribute('href');
            console.log(path)
            bigImg.setAttribute('src', path)
        } 
    })
    wrapper.addEventListener('click', (e)=>{
        if( e.target === wrapper||e.target.classList.contains('pop-up-change-img') ){
            popUp.classList.remove('pop-up-active');
            document.body.style.overflow = '';
        }
    })

}
export default images;
