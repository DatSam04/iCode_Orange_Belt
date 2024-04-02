// tells the browser to run this function every second
setInterval(setClock, 1000)

// The querySelector is a JavaScript method that plays a vital role in the searching of elements.
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock(){
    const currentDate = new Date(); //return the hour at which the code is being executed (return a string representing the current time)
    const secondsRatio = currentDate.getSeconds() / 60; //getting seconds from the actual time setting the ratio
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60; //getting minutes from the actual time setting the ratio
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12; //getting hours from the actual time setting the ratio
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360); //grabbing frmo the css file
}

setClock()