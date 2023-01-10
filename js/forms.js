const forms = () => {


// берем формы 
const form = document.querySelector('form');
// текстовые поля
const textInfo = document.querySelectorAll('[data-formInfo]');
// сообщения после отправки формы
const message = {
    done:"Отправлено!",
    error:"Ошибка отправки",
    loading : "Загрузка..."
};


//  функция отправки запроса на сервер 
const postData = async (url, data) =>{

    let result = await fetch(`${url}`, {
        method: 'POST',
        body: data,

    })  
    return await result.text();
 }



    // обработчик события
    form.addEventListener('submit', (e)=>{
    e.preventDefault();    // отмена перезагрузки
        console.log(postData)
    // место, куда будем выводить сообщения "Отправлено/ ошибка"
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status-text');
    document.querySelector('.message-container').prepend(statusMessage);

    // собираем все данные формы 
    const formData = new FormData(form);
    // функция отправки на сервер postData
    postData ("../php/index.php", formData)

    // промисы 
    .then((data) =>{
        console.log(data)
        statusMessage.textContent = message.done;
    })
    .catch(() =>{
        statusMessage.textContent = message.error;
    })
    .finally(()=>{
        // функция очистки полей 
        const clearInfo = ()=>{
            textInfo.forEach((elem)=>{
                elem.value = '';
            }) 
        }
        clearInfo();
        // убираем сообщения б отправке через какое то время 
        setTimeout (()=>{
            statusMessage.remove();
        }, 7000)

    })

})
}


export default forms;