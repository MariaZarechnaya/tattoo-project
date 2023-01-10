const timer = (selector, deadline)=>{   // куда будем выводить, до какой даты акция 
    const getTime = (end) =>{    // функция, показывающая время до конца  акции
        const time = Date.parse(end) - Date.parse(new Date ()),  // разница , то есть время нашей акции
        seconds = Math.floor((time/1000) % 60),    // количество секунд в таймере
        minutes = Math.floor ((time / 1000 / 60) % 60), // количество минут
        
        hours = Math.floor ((time / 1000 / 60 / 60) % 24), // часов
        days = Math.floor ((time / 1000 / 60 / 60 / 24)); // дни

        return {
            totalDays: time,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        };

        }
        
        // помещаем значения в элементы

        
        const setTime =(elemSelector, end) =>{
            let timer = document.querySelector(elemSelector),
            days =  timer.querySelector('[data-days]'),
            hours =  timer.querySelector('[data-hours]'),
            minutes =  timer.querySelector('[data-minutes]'),
            seconds =  timer.querySelector('[data-seconds]'),
            timeInterval = setInterval(UpdateTime, 1000);  // смена счетчика каждую секунду

            // функция смены счетчика, которая каждую секунду будет устанавливать новое значение 
            function UpdateTime (){
                
                const t = getTime(end);
                console.log(t.totalDays)
                days.textContent = numberForm(t.days);
                hours.textContent = numberForm(t.hours);
                minutes.textContent = numberForm(t.minutes);
                seconds.textContent = numberForm(t.seconds);
                if (t.totalDays <= 0){

                    days.textContent = '00';
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                   
                    clearInterval (timeInterval);
                }

            }

    }
    function numberForm (number) {
        if (number <= 9){
            return '0' + number;
        } else {
            return number;
        }
    }
    setTime(selector, deadline);

}
export default timer;