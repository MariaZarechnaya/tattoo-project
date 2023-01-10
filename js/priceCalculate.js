
 let actualPrice = 160; //коэффициент


const inputNumber = document.querySelectorAll('#input-number');
inputNumber.forEach(function(element){
    element.addEventListener('input',()=>{   // эта функция при событии записывает значение в Value
   let resultValue = +element.value;
   element.setAttribute('value', resultValue); 
   square(inputNumber);
            })

})
function square (input){
    let square = +input[0].value * +input[1].value
    input[2].value = square;
    input[3].value = square * actualPrice
    if (input[3].value < 3000){
        return input[3].value=3000;
    } else {
        return input[3].value 
    }
}


